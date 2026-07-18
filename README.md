# 🎓 Marimuthu A | Computer Science Engineering Portfolio

An interactive, high-performance, and professionally optimized developer portfolio designed for **Marimuthu A**, a Computer Science Engineering student and developer. Built using **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Motion (framer-motion)**.

This repository features state-of-the-art web performance, pixel-perfect responsive layouts, standard WCAG AA accessibility patterns, deep search engine optimizations (SEO), and custom high-fidelity interactive vector designs.

---

## 🚀 Key Features

### 1. High-Performance Design
- **No Heavy Media Payloads**: Fully vector-driven visuals using crisp inline SVG structures for project mockups. No heavy PNG/JPG assets are requested, driving First Contentful Paint (FCP) and Largest Contentful Paint (LCP) to absolute limits.
- **Asset Delivery**: Preconnect link tags established for external Google Font servers to minimize DNS latency.

### 2. Deep Search Engine Optimization (SEO)
- **Custom Metadata**: Features optimized meta tags for title, descriptions, keywords, indexing guidelines (`index, follow`), and canonical references.
- **Social Previews**: Custom Open Graph (`og:*`) and Twitter Card (`twitter:*`) configurations to deliver rich visual embeds when shared on LinkedIn, Twitter, Discord, and other social channels.
- **Search Snippets**: Embedded JSON-LD structured Person Schema representing academic profiles, location coordinates, skill catalogs, and verified credentials to secure search engine rich snippets.
- **Crawling Files**: Configured proper static `robots.txt` directives and XML `sitemap.xml` records in the static asset directory.

### 3. Accessible Usability (WCAG 2.1 AA Standards)
- **Keyboard Navigation Support**: All interactive components include clean visual `focus-visible` ring outlines. Includes an accessible **Skip to Content** anchor on page load to bypass headers.
- **Forms Compliance**: The Contact module features semantic `<label>` elements securely linked to inputs via `htmlFor`. Includes live state notifications for screen readers utilizing `aria-required`, `aria-invalid`, and `aria-describedby` error bindings.
- **Interactive Disclosures**: Sticky header menus capture `Escape` keypress listeners and clicking-outside events to gracefully dismiss mobile drawers and avoid trapping page focus.
- **Safe External Linking**: All outbound hyperlinks enforce secure `rel="noopener noreferrer"` parameters to avoid tab-jacking.

### 4. Visual Layouts & Motion
- **Seamless Theme Engine**: Supports a fluid Luxury Dark (Slate-black) theme and Metallic Light theme.
- **Particle Backdrop Canvas**: Implements a highly efficient client-side custom background particle simulation with adaptive color palettes responsive to active themes.
- **Fluid Timeline**: Displays education paths, certifications, and forward-looking academic milestones inside an interactive vertical timeline structure.
- **Active Navigation Tracking**: Custom scrolling listeners track active sections on the viewport, automatically updating header markers with dynamic spring indicators.

---

## 🛠️ Technology Stack

| Technology | Purpose | Key Attributes |
| :--- | :--- | :--- |
| **React 19** | Core Application Logic | Functional components, optimized hook states, and rendering cycles. |
| **TypeScript** | Type Safety | Strong typing across data models, certification structures, and message payloads. |
| **Tailwind CSS v4** | UI Utility Styling | Performance utility classes, custom themes, and fast asset compiles. |
| **Motion** | Hardware-Accelerated Animations | Smooth entrance, exit, and hover animations via `@motion/react`. |
| **Lucide React** | Consistent Iconography | Clean, scalable vector outline icons. |

---

## 📂 Codebase Folder Structure

```text
├── public/                     # Static assets served at root
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # XML sitemap index
├── src/
│   ├── components/             # Modular UI components
│   │   ├── AboutSection.tsx    # Academic bio and personal highlights
│   │   ├── ContactSection.tsx  # Accessible form with validation (Web3Forms)
│   │   ├── ExperienceLearningSection.tsx # Vertical timeline & cert lists
│   │   ├── Footer.tsx          # Dynamic copyright and scroll-to-top floating triggers
│   │   ├── HeroVisual.tsx      # Vector canvas/SVG backdrop showcase
│   │   ├── Navbar.tsx          # Sticky glassmorphic navigation header
│   │   ├── ParticleBackground.tsx # High-performance particle backdrop canvas
│   │   ├── ProjectsSection.tsx # Portfolio projects with interactive tabs
│   │   ├── RippleButton.tsx    # Material Ripple-effect keyboard CTA buttons
│   │   ├── SkillsSection.tsx   # Categorized competency grid
│   │   └── ThemeToggle.tsx     # Theme switcher
│   ├── data.ts                 # Central profile credentials and resume links
│   ├── types.ts                # Typings and data interfaces
│   ├── index.css               # Global theme declarations and font imports
│   ├── main.tsx                # Entry-point bootstrap
│   └── App.tsx                 # Core App shell structure
├── index.html                  # Core HTML template with full SEO and JSON-LD
├── package.json                # Project dependencies and script tasks
├── tsconfig.json               # TypeScript compiler config
└── vite.config.ts              # Vite bundle configuration
```

---

## 💻 Installation & Local Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and [npm](https://www.npmjs.com/) installed.

### 1. Clone the Codebase & Install Dependencies
Navigate to your project directory and install the pre-configured package dependencies:
```bash
npm install
```

### 2. Spin Up Local Development Server
Launch the local Vite development server. It is configured to run on port `3000`:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 3. Build & Package for Production
Compile the application into static HTML/CSS/JS bundles optimized for deployment inside the `/dist` directory:
```bash
npm run build
```

### 4. Audit & Lint
Run TypeScript checks to verify complete type-safety across the codebase:
```bash
npm run lint
```

---

## 📬 Contact Form Backend Integration

The contact form is pre-wired to leverage **Web3Forms** for zero-server, direct-to-email form deliveries. To receive emails directly from visitors:

1. Request a free Access Key instantly at [Web3Forms](https://web3forms.com).
2. Register the access key in your environment settings or `.env` file as:
   ```env
   VITE_WEB3FORMS_KEY=your_access_key_here
   ```
3. If no key is configured, the form automatically falls back to a clean simulation mode so visitors can still test and preview form validation.

---

## 🔮 Future Enhancements (Academic & Professional Goals)
- **GATE 2028 Core Modules**: Integrate active academic tracker cards mapping progress toward graduate studies preparation.
- **Relational Feedback Base**: Connect visitor logs directly to an lightweight serverless database structure.
- **Advanced Skill Metrics**: Transition progress matrices to support interactive, categorized skills graphs.

---

## 📄 License
This project is private to Marimuthu A. All rights reserved. Designed and developed with ❤️ using modern web standards.
