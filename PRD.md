# GenieAI Staxk - Product Requirements Document (PRD)

> A modern, animated portfolio/landing page website inspired by [LanderX](https://landerx.framer.website/)

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Design System](#design-system)
4. [Page Structure](#page-structure)
5. [Component Specifications](#component-specifications)
6. [Animations & Interactions](#animations--interactions)
7. [Responsive Design](#responsive-design)
8. [Setup & Installation](#setup--installation)
9. [Deployment](#deployment)
10. [Team Information](#team-information)

---

## 🎯 Project Overview

### Purpose
GenieAI Staxk is a premium SaaS/AI company portfolio website designed to showcase services, team members, pricing plans, and drive conversions through an elegant, modern UI with smooth animations.

### Target Audience
- Potential clients looking for AI/ML solutions
- Investors and partners
- Talent looking to join the team

### Key Goals
- Present company capabilities and services
- Showcase the founding team with social links
- Display pricing plans
- Generate leads through CTAs
- Build trust through professional design

### Design Inspiration
- **Reference:** [LanderX Framer Template](https://landerx.framer.website/)
- **Style:** Dark mode, glass morphism, gradient accents, smooth animations

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.x | React framework with App Router |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **Framer Motion** | 12.x | Animations |
| **Lucide React** | Latest | Icon library |

### Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^12.25.0",
    "lucide-react": "^0.562.0",
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

---

## 🎨 Design System

### Color Palette

```css
:root {
  /* Background Colors */
  --background: #050505;           /* Primary dark background */
  --background-secondary: #0a0a0a; /* Secondary background */
  --background-tertiary: #111111;  /* Tertiary background */
  
  /* Text Colors */
  --foreground: #fafafa;           /* Primary text */
  --foreground-muted: #a1a1aa;     /* Muted text (zinc-400) */
  --foreground-subtle: #71717a;    /* Subtle text (zinc-500) */
  
  /* Accent Colors - Amber/Gold */
  --accent-primary: #f59e0b;       /* Primary amber */
  --accent-secondary: #fbbf24;     /* Secondary amber */
  --accent-tertiary: #fcd34d;      /* Tertiary amber */
  
  /* Gradient Colors */
  --gradient-start: #f59e0b;       /* Amber */
  --gradient-mid: #ef4444;         /* Red */
  --gradient-end: #ec4899;         /* Pink */
  
  /* Card Styling */
  --card-bg: rgba(255, 255, 255, 0.03);
  --card-border: rgba(255, 255, 255, 0.08);
  --card-hover: rgba(255, 255, 255, 0.06);
  
  /* Glow Effects */
  --glow-primary: rgba(245, 158, 11, 0.4);
  --glow-secondary: rgba(236, 72, 153, 0.3);
}
```

### Typography

| Font | Usage | Weights |
|------|-------|---------|
| **Outfit** | Body text, UI elements | 300-900 |
| **Syne** | Headings, display text | 400-800 |

```css
/* Font Import */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap');
```

### Spacing Scale
- Section padding: `py-32` (128px vertical)
- Container max-width: `max-w-7xl` (80rem)
- Card padding: `p-6` to `p-8`
- Component gaps: `gap-4` to `gap-8`

### Border Radius
- Cards: `rounded-3xl` (24px)
- Buttons: `rounded-xl` (12px) to `rounded-2xl` (16px)
- Pills/Tags: `rounded-full`
- Icons: `rounded-xl` to `rounded-2xl`

---

## 📄 Page Structure

```
Home Page
├── Navigation (fixed)
├── Hero Section
├── Features Section (Bento Grid)
├── Benefits Section (with Marquee)
├── Comparison Section
├── Team Section
├── Integrations Section
├── Pricing Section
├── FAQ Section
├── CTA Section
└── Footer
```

---

## 🧩 Component Specifications

### 1. Navigation (`Navigation.tsx`)

**Features:**
- Fixed position with blur backdrop on scroll
- Logo with gradient icon
- Desktop nav links (Features, Benefits, Team, Pricing, FAQ)
- Mobile hamburger menu with animated overlay
- "Get Started" CTA button with glow effect

**Behavior:**
- Background becomes semi-transparent with blur after 20px scroll
- Mobile menu slides in with staggered link animations

---

### 2. Hero Section (`Hero.tsx`)

**Features:**
- Social proof avatar stack with counter ("Join 500+ innovative companies")
- 5-star rating display
- Main headline with gradient text
- Subheading paragraph
- Two CTA buttons (primary glow + secondary outline)
- Feature pills (AI Development, Rapid Prototyping, Machine Learning)
- Three animated stat cards with:
  - Mini bar charts
  - Progress bars
  - Percentage counters
- Floating UI cards on desktop (hidden on mobile)
- Scroll indicator at bottom

**Content:**
```
Headline: "The best platform to grow your AI business"
Subheadline: "The most powerful AI tools to boost your business, build intelligent systems, and access cutting-edge machine learning solutions."
CTA Primary: "Get Started Now"
CTA Secondary: "Book a Demo"
```

---

### 3. Features Section (`Features.tsx`)

**Layout:** Bento grid (4 columns on desktop)

**Features:**
| Feature | Size | Color Gradient |
|---------|------|----------------|
| AI Agents | Large (2x2) | amber → orange |
| Custom LLM Solutions | Small | pink → rose |
| Predictive Analytics | Small | violet → purple |
| Enterprise Security | Large (2x2) | cyan → blue |

**Additional Elements:**
- Section label pill
- Feature pills at bottom (Rapid Deployment, Clean APIs, Scalable Architecture, Seamless Integration)

---

### 4. Benefits Section (`Benefits.tsx`)

**Features:**
- Scrolling marquee with service tags
- 6 benefit cards in 3-column grid

**Benefits:**
1. Lightning Fast Delivery
2. Real-Time Analytics
3. Fully Customizable
4. Enterprise Security
5. Continuous Learning
6. 24/7 Expert Support

**Marquee Items:**
AI Development, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Predictive Analytics, Data Engineering, MLOps, LLM Fine-tuning, RAG Systems

---

### 5. Comparison Section (`Comparison.tsx`)

**Layout:** Two-column comparison

**GenieAI Staxk (Left - Highlighted):**
- ✅ Effortless AI integration
- ✅ Highly scalable & flexible solutions
- ✅ Advanced dashboard control
- ✅ Built-in data-driven analytics
- ✅ Latest automation solutions

**Others (Right - Dimmed):**
- ❌ Limited integration capabilities
- ❌ Rigid and non-scalable options
- ❌ Basic dashboard functionalities
- ❌ Lack of advanced analytics
- ❌ Outdated and complex interfaces

---

### 6. Team Section (`Team.tsx`)

**Team Members:**

| Name | Role | LinkedIn | GitHub |
|------|------|----------|--------|
| Shivam | Founder & CEO | linkedin.com/in/shivam274 | github.com/shivam274 |
| Tanishq Jagwani | Co-Founder | linkedin.com/in/tanishq-jagwani-569687193 | github.com/tanishqjagwani |
| Rishabh | CTO | linkedin.com/in/rishabh5301 | github.com/rishabh5301 |

**Card Elements:**
- Gradient avatar with initials
- Name and role
- Bio paragraph
- Quote in styled box
- LinkedIn and GitHub buttons

**Founder's Note Section:**
> "We gather your requirements. We understand your target audience & how your product can stand out from the crowd. Best part is we also help you with Solutions."
> — Shivam, Co-founder & CEO

---

### 7. Integrations Section (`Integrations.tsx`)

**Integrations Grid (6 items):**

| Integration | Description | Icon Color |
|-------------|-------------|------------|
| GPT Models | Generate content and build intelligent agents | emerald → teal |
| Data Platforms | Connect with databases and data warehouses | blue → cyan |
| LinkedIn | Connect with professional tools | LinkedIn blue |
| Cloud Services | Deploy on AWS, GCP, Azure | orange → amber |
| Custom APIs | Build custom APIs for business needs | violet → purple |
| Documentation | Auto-generate documentation | pink → rose |

**Additional:** Scrolling logo marquee at bottom

---

### 8. Pricing Section (`Pricing.tsx`)

**Toggle:** Monthly / Yearly (20% savings)

**Plans:**

| Plan | Monthly | Yearly | Features |
|------|---------|--------|----------|
| **Starter** | $2,999 | $2,499 | Single AI model, Basic support, Email support, Documentation, Monthly reports |
| **Growth** (Popular) | $7,999 | $6,499 | Up to 3 AI models, Priority support, Dedicated Slack, Custom API, Weekly calls, Fine-tuning, Optimization |
| **Enterprise** | Custom | Custom | Unlimited models, Dedicated manager, 24/7 support, Custom infrastructure, On-premise, SLA, Strategy sessions, Full IP ownership |

**Trust Banner:** "14-day money-back guarantee"

---

### 9. FAQ Section (`FAQ.tsx`)

**Questions:**

1. **What types of AI solutions do you build?**
   - Custom LLM, AI agents, RAG systems, predictive analytics, computer vision, NLP, ML fine-tuning

2. **How long does a typical AI project take?**
   - MVP: 4-6 weeks, Enterprise: 3-6 months

3. **Do you offer ongoing support after deployment?**
   - Yes, monitoring, optimization, bug fixes, enhancements

4. **Can you integrate AI solutions with our existing systems?**
   - Yes, CRM, ERP, databases, third-party APIs

5. **How do you ensure data security and privacy?**
   - Enterprise encryption, SOC 2 compliance, on-premise options, NDAs

6. **What industries do you work with?**
   - Fintech, healthcare, e-commerce, manufacturing, logistics, legal tech

**Interaction:** Accordion with expand/collapse animation

---

### 10. CTA Section (`CTA.tsx`)

**Content:**
```
Headline: "Ready to Build the Future Together?"
Subheadline: "Let's discuss how AI can transform your business..."
CTA Primary: "Start a Conversation" (mailto link)
CTA Secondary: "Schedule a Demo"
```

**Trust Indicators:**
- ✓ Free Consultation
- ✓ No Commitment Required
- ✓ Response within 24 hours

---

### 11. Footer (`Footer.tsx`)

**Sections:**
- Brand column (logo, description, contact, social links)
- Company links
- Services links
- Resources links
- Legal links

**Team Links Section:**
- Individual LinkedIn + GitHub buttons for each founder

**Contribution Note:**
"GenieAI Staxk contributes 5% of revenue to AI ethics research"

**Copyright:**
© 2024 GenieAI Staxk. All rights reserved.

---

## ✨ Animations & Interactions

### Framer Motion Animations

| Animation | Trigger | Properties |
|-----------|---------|------------|
| Fade In Up | On scroll into view | `opacity: 0→1, y: 30→0` |
| Scale In | On scroll into view | `opacity: 0→1, scale: 0.9→1` |
| Stagger Children | Container in view | `staggerChildren: 0.1` |
| Hover Scale | On hover | `scale: 1.02-1.05, y: -5` |
| Float | Continuous | `y: 0 → -10 → 0` (4s loop) |

### CSS Animations

```css
/* Marquee - continuous horizontal scroll */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Pulse Glow - button glow effect */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px var(--glow-primary); }
  50% { box-shadow: 0 0 40px var(--glow-primary), 0 0 60px var(--glow-secondary); }
}

/* Float - subtle up/down movement */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### Hover Effects

- **Cards:** Background lightens, border brightens, slight lift (`translateY(-4px)`)
- **Buttons:** Glow intensifies, scale up slightly
- **Links:** Color transition to amber/white
- **Icons:** Subtle rotation or scale

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | Single column, hidden nav links, hamburger menu |
| Tablet | 768px+ | 2-column grids, visible nav |
| Desktop | 1024px+ | Full layout, floating elements visible |
| Large | 1280px+ | Max container width applied |

### Mobile-Specific Changes
- Navigation: Hamburger menu with full-screen overlay
- Hero: Floating cards hidden, single column stats
- Grids: Collapse to single column
- Pricing: Stack vertically
- Footer: Stack columns

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/Tanishqjagwani/questinsights.git
cd questinsights

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, CSS variables, animations
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page component assembly
├── components/
│   ├── Navigation.tsx   # Fixed header navigation
│   ├── Hero.tsx         # Hero section with stats
│   ├── Features.tsx     # Bento grid features
│   ├── Benefits.tsx     # Benefits with marquee
│   ├── Comparison.tsx   # Us vs Others comparison
│   ├── Team.tsx         # Team member cards
│   ├── Integrations.tsx # Integration showcase
│   ├── Pricing.tsx      # Pricing plans
│   ├── FAQ.tsx          # FAQ accordion
│   ├── CTA.tsx          # Call to action
│   ├── Footer.tsx       # Site footer
│   └── index.ts         # Component exports
```

### Environment Variables
No environment variables required for basic setup.

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Click "Deploy"
5. Your site is live!

**Or use the direct import link:**
```
https://vercel.com/new/import?s=https://github.com/YOUR_USERNAME/YOUR_REPO
```

### Build Commands

```bash
# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

---

## 👥 Team Information

### Founding Team

| Role | Name | LinkedIn | GitHub |
|------|------|----------|--------|
| Founder & CEO | Shivam | [shivam274](https://www.linkedin.com/in/shivam274/) | [shivam274](https://github.com/shivam274) |
| Co-Founder | Tanishq Jagwani | [tanishq-jagwani](https://www.linkedin.com/in/tanishq-jagwani-569687193/) | [tanishqjagwani](https://github.com/tanishqjagwani) |
| CTO | Rishabh | [rishabh5301](https://www.linkedin.com/in/rishabh5301/) | [rishabh5301](https://github.com/rishabh5301) |

### Contact
- **Email:** hello@genieaistaxk.com
- **Location:** India

---

## 📝 Additional Notes

### Performance Optimizations
- Images: Use Next.js Image component for optimization
- Fonts: Google Fonts loaded via CSS @import
- Animations: GPU-accelerated transforms only
- Code splitting: Automatic with Next.js App Router

### Accessibility
- Semantic HTML structure
- Focus visible states
- ARIA labels on interactive elements
- Color contrast ratios maintained

### SEO
- Meta tags in layout.tsx
- Open Graph tags configured
- Semantic heading hierarchy

---

## 📜 License

This project is proprietary to GenieAI Staxk. For inquiries about usage or licensing, contact the team.

---

**Built with ❤️ by GenieAI Staxk Team**

