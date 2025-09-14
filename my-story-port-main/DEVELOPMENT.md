# Development Setup

## Issue Fixed: Changes Lost on Server Restart

This document outlines the fixes applied to prevent losing changes when restarting the development server.

### Root Causes Identified:
1. **Vite Cache Issues**: Vite was not properly handling cached dependencies
2. **File Watching Problems**: Insufficient file watching configuration for shadcn/ui components
3. **Missing Development Environment Variables**: No proper environment configuration for development
4. **Inadequate HMR Configuration**: Hot Module Replacement wasn't optimally configured

### Fixes Applied:

#### 1. Enhanced Vite Configuration (`vite.config.ts`)
- Added **file polling** with `usePolling: true` and `interval: 100ms`
- Enabled **HMR overlay** for better error visibility
- Added **optimizeDeps** configuration to pre-bundle all shadcn/ui dependencies
- Enabled **CSS sourcemaps** for better debugging
- Added **build sourcemaps** for development mode

#### 2. Updated Package Scripts (`package.json`)
- Changed `dev` script to use `--force` flag to bypass cache
- Added `dev:clean` script to clear cache and start fresh
- Added `clean` script to manually clear all cache and build files

#### 3. Environment Configuration (`.env`)
- Added `CHOKIDAR_USEPOLLING=true` for better file watching
- Added `FAST_REFRESH=true` for React Fast Refresh
- Added Vite-specific environment variables

#### 4. VS Code Settings (`.vscode/settings.json`)
- Configured proper file watching exclusions
- Added TailwindCSS regex patterns for better IntelliSense
- Enabled format on save and ESLint auto-fix

#### 5. Updated .gitignore
- Better environment file handling
- Excluded build artifacts and cache directories

### Usage:

#### Start Development Server:
```bash
npm run dev          # Start with cache bypass
npm run dev:clean    # Clear cache and start fresh
```

#### Clean Cache:
```bash
npm run clean        # Remove all cache and build files
```

### Key Benefits:
- **Persistent Changes**: Changes now persist across server restarts
- **Better File Watching**: Improved detection of file changes
- **Faster Development**: Optimized dependency pre-bundling
- **Better Debugging**: Enhanced sourcemaps and error overlay
- **Consistent Environment**: Standardized development settings

### Troubleshooting:
If you still experience issues:
1. Run `npm run dev:clean` to start with a fresh cache
2. Check that all shadcn/ui components are properly imported
3. Ensure your changes are saved before restarting the server
4. Verify that file permissions allow watching (especially in Docker/WSL environments)