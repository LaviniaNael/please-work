import { ReportHandler } from 'web-vitals';

// Performance monitoring
export const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Resource timing
const reportResourceTiming = () => {
  if (window.performance) {
    const resources = performance.getEntriesByType('resource');
    resources.forEach((resource) => {
      console.log(`Resource: ${resource.name}, Load time: ${resource.duration.toFixed(2)}ms`);
    });
  }
};

// Long tasks monitoring
const observeLongTasks = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Long task detected:', entry);
      }
    });
    observer.observe({ entryTypes: ['longtask'] });
  }
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  // Only run in development or if explicitly enabled in production
  if (process.env.NODE_ENV === 'development' || localStorage.getItem('perfMonitoring') === 'true') {
    reportWebVitals(console.log);
    window.addEventListener('load', reportResourceTiming);
    observeLongTasks();
  }
};

// Lazy load images with Intersection Observer
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  }
};

// Debounce function for performance optimization
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  wait: number
): ((...args: Parameters<F>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function (this: any, ...args: Parameters<F>) {
    const later = () => {
      timeout = null;
      func.apply(this, args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for performance optimization
export const throttle = <F extends (...args: any[]) => any>(
  func: F,
  limit: number
): ((...args: Parameters<F>) => void) => {
  let inThrottle = false;
  return function (this: any, ...args: Parameters<F>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
