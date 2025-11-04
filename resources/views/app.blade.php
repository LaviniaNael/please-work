<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <!-- Performance Critical Meta Tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    
    <!-- SEO Optimized Meta Tags -->
    <meta name="description" content="ProCode: Leading software development agency in Cairo. Expert web, mobile & custom software solutions. High-performance, SEO-friendly applications built with modern technologies." />
    <meta name="keywords" content="software development Cairo, web development Egypt, mobile apps, custom software, Laravel, React, ProCode agency, digital solutions" />
    <meta name="author" content="ProCode" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="ProCode — Software Development Agency | Cairo, Egypt" />
    <meta property="og:description" content="Expert web, mobile & custom software solutions. High-performance applications built with modern technologies." />
    <meta property="og:url" content="{{ url()->current() }}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ProCode" />
    <meta property="og:locale" content="{{ str_replace('_', '-', app()->getLocale()) }}_EG" />
    <meta property="og:image" content="{{ asset('images/og-image.jpg') }}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="ProCode - Software Development Agency" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="ProCode — Software Development Agency | Cairo, Egypt" />
    <meta name="twitter:description" content="Expert web, mobile & custom software solutions. High-performance applications built with modern technologies." />
    <meta name="twitter:image" content="{{ asset('images/og-image.jpg') }}" />
    <meta name="twitter:image:alt" content="ProCode - Software Development Agency" />
    
    <!-- Technical SEO -->
    <link rel="canonical" href="{{ url()->current() }}" />
    <link rel="alternate" hreflang="en" href="{{ url()->current() }}" />
    <link rel="alternate" hreflang="ar" href="{{ url()->current() }}?locale=ar" />
    <link rel="alternate" hreflang="x-default" href="{{ url()->current() }}" />

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script defer>
        (function() {
            const appearance = '{{ $appearance ?? 'system' }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }

        /* Critical CSS for above-the-fold content */
        .hero-container {
            min-height: 100vh;
            background: linear-gradient(135deg, oklch(0.145 0 0), oklch(0.2 0.1 200));
        }

        /* Prevent layout shift */
        img {
            height: auto;
            max-width: 100%;
        }
        
        /* UNIQUE TECH FONTS - System font fallback */
        body {
            font-family: ui-sans-serif, system-ui, sans-serif;
        }
        
        /* English body text - Space Grotesk (modern geometric tech font) */
        .fonts-loaded body {
            font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
            font-feature-settings: 'liga' 1, 'calt' 1;
        }
        
        /* Arabic body text - Tajawal (modern Arabic tech font) */
        .fonts-loaded [dir="rtl"] body,
        .fonts-loaded [lang="ar"] {
            font-family: 'Tajawal', 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
        }
        
        /* English headings - Sora (futuristic sci-fi aesthetic) */
        .fonts-loaded h1, .fonts-loaded h2, .fonts-loaded h3, 
        .fonts-loaded h4, .fonts-loaded h5, .fonts-loaded h6,
        .fonts-loaded .heading {
            font-family: 'Sora', 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
            font-weight: 700;
            letter-spacing: -0.03em;
        }
        
        /* Arabic headings - Tajawal Bold */
        .fonts-loaded [dir="rtl"] h1, .fonts-loaded [dir="rtl"] h2, .fonts-loaded [dir="rtl"] h3,
        .fonts-loaded [dir="rtl"] h4, .fonts-loaded [dir="rtl"] h5, .fonts-loaded [dir="rtl"] h6,
        .fonts-loaded [lang="ar"] h1, .fonts-loaded [lang="ar"] h2, .fonts-loaded [lang="ar"] h3 {
            font-family: 'Tajawal', ui-sans-serif, system-ui, sans-serif;
            font-weight: 800;
        }
        
        /* Code - Fira Code (tech with ligatures) */
        .fonts-loaded .font-mono, .fonts-loaded code, .fonts-loaded pre {
            font-family: 'Fira Code', ui-monospace, monospace;
            font-feature-settings: 'liga' 1, 'calt' 1;
        }
    </style>

    <title inertia>{{ config('app.name') }}</title>

    <!-- Favicon and Icons -->
    <link rel="icon" href="/favicon.ico" sizes="32x32">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <!-- Performance Optimizations -->
    <meta name="theme-color" content="#06b6d4">
    <meta name="color-scheme" content="dark light">
    <meta name="msapplication-TileColor" content="#06b6d4">
    
    <!-- DNS Prefetch & Preconnect for Critical Resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Unique Tech Fonts - English & Arabic Support -->
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800;900&family=Fira+Code:wght@400;500;600&display=swap"></noscript>
    
    <!-- Security & Privacy -->
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="X-XSS-Protection" content="1; mode=block">
    <meta name="referrer" content="strict-origin-when-cross-origin">
    
    <!-- PWA & Mobile Optimization -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="ProCode">
    <meta name="application-name" content="ProCode">
    <meta name="format-detection" content="telephone=no">

    @viteReactRefresh
    @vite(['resources/js/app.tsx'])
    @inertiaHead
    
    {{-- Inline script for faster interactivity --}}
    <script>
        // UNIQUE TECH FONTS - Optimized loading
        if ('fonts' in document) {
            Promise.all([
                // Space Grotesk - English body
                document.fonts.load('400 1em "Space Grotesk"'),
                document.fonts.load('600 1em "Space Grotesk"'),
                // Sora - English headings (futuristic)
                document.fonts.load('700 1em Sora'),
                document.fonts.load('800 1em Sora'),
                // Tajawal - Arabic support
                document.fonts.load('700 1em Tajawal'),
                document.fonts.load('800 1em Tajawal'),
                // Fira Code - Code with ligatures
                document.fonts.load('400 1em "Fira Code"')
            ]).then(function() {
                document.documentElement.classList.add('fonts-loaded');
                console.log('✅ Unique tech fonts loaded successfully!');
            }).catch(function(err) {
                console.warn('⚠️ Custom fonts failed to load:', err);
            });
        }
        
        // Preload critical resources
        window.addEventListener('load', function() {
            // Defer non-critical resources
            const deferredStyles = document.querySelectorAll('link[rel="preload"][as="style"]');
            deferredStyles.forEach(link => {
                if (!link.rel.includes('stylesheet')) {
                    link.rel = 'stylesheet';
                }
            });
        });
    </script>
</head>

<body class="font-sans antialiased">
@inertia
</body>

</html>
