# Tecosoft Web App

**Building Intelligent Ecosystems for Next-Gen Industries**

Tecosoft's marketing and product website built with Next.js. Showcases IIoT, AI, and Digital Twin solutions that transform industrial operations into intelligent, connected ecosystems.

## Tech Stack

- **Framework** - Next.js 16 (App Router, Turbopack)
- **Language** - TypeScript
- **Styling** - Tailwind CSS 4
- **State Management** - Redux Toolkit
- **Animations** - Framer Motion, GSAP, Lenis (smooth scroll)
- **Forms** - Formik + Yup
- **UI** - Lucide React, React Icons, Swiper

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/                  # Next.js pages & routes
├── api/                  # API integration & endpoints
├── components/           # Reusable UI components
├── config/               # Environment configuration
├── constants/            # Static data & content
├── container/            # Layout components (header, footer)
├── imports/              # SVG assets
├── store/                # Redux store & slices
└── utills/               # Utility functions & helpers
```

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home / Landing page |
| `/company` | Company info & team |
| `/why-tecosoft` | Why choose Tecosoft |
| `/analytics` | Analytics dashboard |
| `/industries` | Industries showcase |
| `/eagle` | Eagle product page |
| `/resources/blogs` | Blog listing |
| `/resources/blogs/[slug]` | Blog detail |
| `/resources/white-papers` | White papers listing |
| `/resources/white-papers/[slug]` | White paper detail |
| `/connected-factories-solutions` | Connected Factories solutions |
| `/ai-enabled-solutions` | AI-Enabled solutions |
| `/digital-twin-solutions` | Digital Twin platform |

### Solution Sub-Pages

**Connected Factories:**
`/condition-monitoring`, `/inspection-digitization`, `/maintenance-digitization`, `/manufacturing-condition-monitoring`, `/production-digitization`, `/tool-life-monitoring-digitization`

**AI-Enabled:**
`/predictive-maintenance`, `/smart-energy-management`

## Environment Configuration

Configuration is managed in `src/config/index.js` with three environments:

| Environment | API URL |
|-------------|---------|
| `local` | `http://localhost:7001/api/tecosoft-admin/` |
| `staging` | `https://crr2m74m-7001.inc1.devtunnels.ms/api/tecosoft-admin/` |
| `production` | `https://api.tecosoft.ai/api/tecosoft-admin/` |

Update the `environment` variable in `src/config/index.js` to switch environments.

## API Endpoints

| Endpoint | Purpose |
|----------|---------|
| `/book-demo` | Demo booking requests |
| `/applicants` | Job applications |
| `/resources/blogs` | Blog posts |
| `/resources/blogs/latest/list` | Latest blog posts |
| `/whitepapers` | White papers |
| `/news-letter` | Newsletter signup |

## Key Features

- **Solution Pages** - Connected Factories, AI-Enabled Services, Digital Twin Platform
- **Blog & White Papers** - Content management with slug-based routing
- **Demo Booking** - Modal-based booking flow with Redux state
- **Job Applications** - Careers section with application modal
- **Newsletter** - Email subscription
- **Animations** - Smooth page transitions with Framer Motion, GSAP & Lenis
- **Responsive Design** - Mobile-first with Tailwind CSS
