# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for the Hummingbird web framework (https://hummingbird.codes), built with Nuxt 3 and Nuxt UI Pro. It's a static site that showcases the framework with documentation links, examples, news, and ecosystem information.

## Development Commands

- `npm run dev` or `nuxt dev` - Start development server
- `npm run build` or `nuxt build` - Build for production
- `npm run generate` or `nuxt generate` - Generate static site
- `npm run preview` or `nuxt preview` - Preview production build
- `npm run lint` or `eslint .` - Run ESLint
- `npm run typecheck` or `nuxt typecheck` - Run TypeScript type checking

## Architecture

### Framework Stack
- **Nuxt 3** - Vue.js framework with SSR/SSG capabilities
- **Nuxt UI Pro** - Extended via `@nuxt/ui-pro` for professional UI components
- **Nuxt Content** - Content management for markdown files
- **TypeScript** - Type safety (strict mode disabled)
- **ESLint** - Code linting with stylistic rules (1tbs brace style, no comma dangle)
- **Tailwind CSS** - Utility-first styling via Nuxt UI

### Directory Structure
- `components/` - Vue components (AppHeader, AppFooter, etc.)
- `pages/` - File-based routing with Vue pages
- `content/` - Markdown content and YAML configuration files
- `public/` - Static assets
- `server/` - Server-side functionality
- `plugins/` - Nuxt plugins

### Key Configuration
- **Theme**: Orange primary color, zinc gray, system color mode preference
- **Icons**: Heroicons, Simple Icons, MDI, Fluent collections
- **Routing**: Redirects to external docs (`/docs` → docs.hummingbird.codes) and Discord
- **Content**: Syntax highlighting for JSON, YAML, shell, Swift

### Content Management
The site uses Nuxt Content for managing documentation and news articles. Content is structured with YAML frontmatter and markdown files in the `content/` directory. Configuration files like `examples.yml`, `news.yml`, `packages.yml` define structured data for different sections.

### Styling System
Uses a custom design system with rounded-full buttons and inputs, custom header/footer styling, and a carefully configured color scheme optimized for both light and dark modes.