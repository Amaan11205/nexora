# NEXORA – SaaS Landing Page

A landing page for NEXORA, a fictional project management tool. Built as a frontend internship assignment for Sankar Group. It is a marketing page only: there is no backend, login or payment.

## Technologies

React 18, Vite, JSX, plain CSS (one file per component), JavaScript (ES6+). No other libraries.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev      # starts the site at http://localhost:5173
npm run build    # creates the production build in /dist
npm run preview  # previews the production build
```

## Folder structure

```
src/
├── assets/            images/ and icons/ (icons are inline SVG, so these are empty for now)
├── components/
│   ├── Navbar/            Navbar.jsx + Navbar.css
│   ├── Hero/              Hero.jsx + Hero.css
│   ├── DashboardPreview/  DashboardPreview.jsx + DashboardPreview.css
│   ├── Features/          Features.jsx + Features.css
│   ├── About/             About.jsx + About.css
│   ├── Pricing/           Pricing.jsx + Pricing.css
│   ├── Contact/           Contact.jsx + Contact.css
│   └── Footer/            Footer.jsx + Footer.css
├── styles/
│   ├── variables.css      colours, fonts, sizes, spacing (design tokens)
│   ├── global.css         reset, base text, container, buttons
│   └── responsive.css     all media queries
├── App.jsx
└── main.jsx
```

## Main features

- Sticky navbar with a mobile menu
- Hero with a dashboard preview built from HTML and CSS
- Features, How it works, Pricing (Starter free, Professional ₹499/month)
- Contact form with validation and a success message
- Smooth scrolling, responsive layouts, reduced-motion support

## Interview notes (simple explanations)

**How the app is structured.** `main.jsx` mounts `App`. `App` only lists the sections in order: Navbar, Hero, Features, About, Pricing, Contact, Footer. Each section is its own component in its own folder with its own CSS file.

**What each component does.**
- Navbar: logo, links, Get Started button, mobile menu.
- Hero: headline, short text, two buttons, and the dashboard preview.
- DashboardPreview: a fake app screen made of divs, with sidebar, progress bar, small bar chart, tasks and avatars. Data comes from small arrays at the top of the file.
- Features: four features shown as ruled rows with an icon, title and text.
- About: what NEXORA is, who it is for, and three steps.
- Pricing: two plan cards, created from an array with `map`.
- Contact: the form.
- Footer: links and copyright.

**How CSS is separated.** `variables.css` holds the design tokens (like `--citron`, `--space-4`). `global.css` holds only the reset, base text, `.container` and the `.btn` styles. Each component imports its own CSS file. Class names follow the pattern `component__part` (for example `navbar__links`).

**How navigation works.** Every link is a normal anchor, like `href="#pricing"`, and every section has a matching `id`. `scroll-behavior: smooth` in `global.css` makes the scroll smooth, and `scroll-margin-top` on sections stops them hiding under the sticky navbar. The Get Started button goes to `#pricing`. The pricing buttons go to `#contact`. On mobile, `useState` stores whether the menu is open (true/false). The button flips it, and a CSS class shows or hides the menu.

**How the form validation works.** The form keeps three pieces of state: `values` (what the user typed), `errors` (messages) and `isSubmitted`. On submit, `validate()` checks the name is not empty, the email matches a simple pattern, and the message has at least 10 characters. If there are errors, they are shown under the fields. If not, `isSubmitted` becomes true and a success message replaces the form.

**How responsive design works.** `responsive.css` has three breakpoints: 1024px, 860px and 480px. At 860px the navbar becomes a menu button, the hero stacks, the dashboard sidebar is hidden and grids become one column. At 480px spacing shrinks, buttons go full width and the feature rows stack. Font sizes use `clamp()` so they scale smoothly.
