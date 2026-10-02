# Ali Al Najjar Portfolio

![Portfolio Cover](src/assets/ProjectImages/coverImgPortfolio.png)

Welcome to my interactive developer portfolio! This site is a retro-inspired, multimedia-rich showcase of my web development skills, projects, and personality. Dive in to explore my work, tech stack, and more—all wrapped in a playful, animated UI.

---

## 🚀 Features

- **Animated Retro UI**: Pixel/retro popups, animated backgrounds, and custom fonts for a unique vibe.
- **Interactive Navigation**: Responsive navbar, sidebar, and smooth section transitions.
- **Background Music & Sound**: Toggleable music and click sounds for an immersive experience.
- **Project Showcases**: Live previews and GitHub links for featured projects:
  - **DevArt**: Web app for learning programming languages ([Live](https://devart-learn.vercel.app/) | [Repo](https://github.com/alialridaalnajjar/DevArt_Front))
  - **Sakkerha**: Municipal service web app ([Live](https://sakkerha.up.railway.app/) | [Repo](https://github.com/alialridaalnajjar/sakkerha_uni))
  - **No Wallet Gaming**: Wallet-free way to explore web games ([Live](https://no-wallet-gaming.vercel.app/) | [Repo](https://github.com/alialridaalnajjar/NoWalletGamingFrontEnd))
  - **AR Warehouse**: E-commerce for esports gadgets ([Live](https://ar-warehouse.vercel.app/) | [Repo](https://github.com/alialridaalnajjar/AR_Warehouse))
  - **Baka Rate**: Anime listing/rating app ([Live](https://alialridaalnajjar.github.io/BakaRate/) | [Repo](https://github.com/alialridaalnajjar/BakaRate))
  - **Pixelated Expo**: Mini-games and restaurant app ([Live](https://studio.code.org/projects/applab/eMJlUxRGQccYPfv5qbbEvPdTIywD6gTC3tcy37LJlOw))
- **Certificates Timeline**: Scroll-animated timeline of certifications, each linking to its verification page.
- **Articles**: Short write-ups with their own pages.
- **About & Tech Stack**: My background, philosophy, and a visual grid of my favorite technologies.
- **Resume Download**: Instantly grab my CV as a PDF.
- **Mobile Friendly**: Fully responsive design with custom layouts for all screen sizes.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **UI/UX**: pixel-retroui, custom fonts, motion, Radix UI primitives
- **Icons**: lucide-react, react-icons
- **Routing**: react-router-dom
- **Other**: Vite, ESLint, pnpm

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn, but pnpm is preferred)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

---

## 📁 Project Structure

- `src/`
  - `components/` – Navbar, ProjectSection, ServiceSection, Footer, etc.
  - `secondaryComponents/` – TimeLine, RetroPopUp, ThreeDButton, QuoteGenerator, etc.
  - `pages/` – HomePage, MainPage, ArticlePage, FullCertificatesPage
  - `data/` – Certificates and articles content
  - `Utils/` – Audio manager, sound helpers, and hooks
  - `assets/` – Images (WebP), background videos, sprites, and PDF resume
- `public/` – Static assets (background music, click sound)
- `index.html` – Main HTML entry
- `tailwind.config.ts`, `vite.config.ts` – Configuration files

---

## ✨ Customization & Notes

- **Sound & Music**: Toggle music in the navbar. Click sounds on interactive elements.
- **Theming**: Uses Tailwind CSS and pixel-retroui for easy style tweaks.
- **Images**: Site images are stored as WebP and lazy-loaded; convert new screenshots to WebP before adding them.
- **Future Ideas**: Theme switching, more animations, Redux for state, etc.
- **Deployment**: Ready for Vercel (see `vercel.json`).

---

## 👤 Author & Credits

**Ali Al Najjar**  
[LinkedIn](https://www.linkedin.com/in/alialridaalnajjar/)  
[GitHub](https://github.com/alialridaalnajjar)

- Avatar, icons, and some assets are custom or from open sources (see `src/assets/`).
- Inspired by retro/arcade aesthetics and modern web best practices.

---

> _"Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion for TypeScript, React, and all web tech. When I'm not coding, I play games, watch anime, and think about that bug for 12 hours straight."_

Enjoy exploring my portfolio! <3
