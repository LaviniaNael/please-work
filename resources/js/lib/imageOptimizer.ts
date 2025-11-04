import React from 'react';
export type ImageFormat = 'webp' | 'avif' | 'jpg' | 'png' | 'gif';

export interface ImageOptimizerOptions {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: ImageFormat;
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  position?: 'top' | 'right' | 'bottom' | 'left' | 'center';
  background?: string;
  blur?: number;
  grayscale?: boolean;
  rotate?: number;
}

/**
 * Generate optimized image URL with specified transformations
 * This is a placeholder that would be implemented with your actual image CDN/service
 */
export function getOptimizedImageUrl(options: ImageOptimizerOptions): string {
  const {
    src,
    width,
    height,
    quality = 80,
    format = 'webp',
    fit = 'cover',
    position = 'center',
    background = 'transparent',
    blur,
    grayscale,
    rotate,
  } = options;

  // If it's an external URL, return as-is
  if (src.startsWith('http') || src.startsWith('//') || src.startsWith('data:')) {
    return src;
  }

  // This is where you'd implement your image transformation logic
  // For example, using a service like Cloudinary, Imgix, or a self-hosted solution
  const params = new URLSearchParams();
  
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  if (quality) params.append('q', quality.toString());
  if (format) params.append('fm', format);
  if (fit) params.append('fit', fit);
  if (position) params.append('position', position);
  if (background) params.append('bg', background.replace('#', ''));
  if (blur) params.append('blur', blur.toString());
  if (grayscale) params.append('grayscale', 'true');
  if (rotate) params.append('rot', rotate.toString());

  // This is a placeholder - replace with your actual image transformation service URL
  const baseUrl = '/images';
  const queryString = params.toString();
  
  return `${baseUrl}${src}${queryString ? `?${queryString}` : ''}`;
}

/**
 * Lazy load image component with optimized loading
 */
interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: ImageFormat;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  quality = 80,
  format = 'webp',
  className = '',
  loading = 'lazy',
  priority = false,
  ...props
}) => {
  const optimizedSrc = getOptimizedImageUrl({
    src,
    width,
    height,
    quality,
    format,
  });

  const imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    src: optimizedSrc,
    alt,
    width,
    height,
    className,
    loading,
    ...props,
  };

  if (priority) {
    imgProps.fetchPriority = 'high';
  }

  return React.createElement('img', imgProps);
};

/**
 * Convert image to base64 for blur placeholders
 */
export async function getBlurDataURL(url: string): Promise<string> {
  // This is a simplified version - in a real app, you'd want to generate
  // a proper blur placeholder on the server or use a service like Cloudinary
  if (typeof window === 'undefined') {
    // Return a small transparent image as fallback for SSR
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
  }

  return new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        resolve('');
        return;
      }
      
      // Set canvas to small size for blur
      const width = 20;
      const ratio = img.height / img.width;
      const height = Math.round(width * ratio);
      
      canvas.width = width;
      canvas.height = height;
      
      // Draw and apply blur
      ctx.drawImage(img, 0, 0, width, height);
      
      // Apply a simple blur effect
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      
      // Simple box blur implementation
      const radius = 2;
      for (let i = 0; i < radius; i++) {
        boxBlur(pixels, width, height, 1);
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      resolve(canvas.toDataURL('image/jpeg', 0.2));
    };
    
    img.onerror = () => {
      // Fallback to a simple colored placeholder
      const canvas = document.createElement('canvas');
      canvas.width = 20;
      canvas.height = 20;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, 20, 20);
      }
      resolve(canvas.toDataURL('image/jpeg', 0.2));
    };
    
    img.src = url;
  });
}

// Simple box blur implementation
function boxBlur(pixels: Uint8ClampedArray, width: number, height: number, radius: number) {
  const tempPixels = new Uint8ClampedArray(pixels.length);
  
  // Horizontal pass
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0, g = 0, b = 0, a = 0, count = 0;
      
      for (let i = -radius; i <= radius; i++) {
        const px = Math.min(width - 1, Math.max(0, x + i));
        const idx = (y * width + px) * 4;
        
        r += pixels[idx];
        g += pixels[idx + 1];
        b += pixels[idx + 2];
        a += pixels[idx + 3];
        count++;
      }
      
      const idx = (y * width + x) * 4;
      tempPixels[idx] = r / count;
      tempPixels[idx + 1] = g / count;
      tempPixels[idx + 2] = b / count;
      tempPixels[idx + 3] = a / count;
    }
  }
  
  // Vertical pass
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let r = 0, g = 0, b = 0, a = 0, count = 0;
      
      for (let i = -radius; i <= radius; i++) {
        const py = Math.min(height - 1, Math.max(0, y + i));
        const idx = (py * width + x) * 4;
        
        r += tempPixels[idx];
        g += tempPixels[idx + 1];
        b += tempPixels[idx + 2];
        a += tempPixels[idx + 3];
        count++;
      }
      
      const idx = (y * width + x) * 4;
      pixels[idx] = r / count;
      pixels[idx + 1] = g / count;
      pixels[idx + 2] = b / count;
      pixels[idx + 3] = a / count;
    }
  }
}
