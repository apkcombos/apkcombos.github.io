# APKCombos - Android App Download Platform

## Overview

APKCombos is a React-based web application for browsing and downloading Android APK files. The platform provides a catalog of apps and games organized by categories, with search functionality, app detail pages, and informational pages (About, Privacy Policy, Terms of Service, Contact). The site is designed as a static frontend application with no backend server, using mock data for app listings.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Routing**: React Router DOM for client-side navigation
- **State Management**: TanStack React Query for server state (prepared for future API integration)
- **Styling**: Tailwind CSS with CSS variables for theming, using a custom design system defined in `src/index.css`

### Component Architecture
- **UI Components**: shadcn/ui component library built on Radix UI primitives, located in `src/components/ui/`
- **Custom Components**: Application-specific components like Header, Footer, AppCard, CategoryCard in `src/components/`
- **Pages**: Route-based page components in `src/pages/` following a simple flat structure

### Design System
- Uses HSL color variables for consistent theming with light/dark mode support
- Custom gradients defined for hero sections and cards
- Responsive container with 2rem padding and max-width of 1400px
- Path aliases configured with `@/` pointing to `src/`

### Data Layer
- Currently uses mock data defined in `src/data/mockData.ts`
- No database or backend API integration yet
- Structure is prepared for future API integration via React Query

### Key Pages
- `/` - Homepage with featured apps and hot games
- `/categories` - Category listing page
- `/category/:slug` - Apps filtered by category
- `/app/:id` - Individual app detail page
- `/search` - Search results page
- `/download` - APK download guide
- `/about`, `/privacy-policy`, `/terms-of-service`, `/contact` - Static informational pages

## External Dependencies

### Third-Party Services
- **Google AdSense**: Integrated for monetization (pub-1061828196602006), configured in `index.html` and `public/ads.txt`
- **Lovable**: Development platform integration via `lovable-tagger` plugin (development only)

### Key NPM Packages
- **UI Framework**: Radix UI primitives (accordion, dialog, dropdown, tabs, etc.)
- **Styling**: Tailwind CSS, class-variance-authority, clsx, tailwind-merge
- **Forms**: react-hook-form with @hookform/resolvers
- **Icons**: lucide-react
- **Carousel**: embla-carousel-react
- **Date Handling**: date-fns, react-day-picker
- **Theming**: next-themes for dark mode support

### Deployment
- Configured for static deployment (GitHub Pages compatible based on domain naming)
- Base URL set to `/` for production builds
- Development server runs on port 5000 with `0.0.0.0` host binding