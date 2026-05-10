# Sachin Video Mixing Lab — Frontend

Cinematic dark-theme React website for Sachin Video Mixing Lab, Bhopal.

## Tech Stack

- **React 18** + **Vite 5**
- **React Router v6** — client-side routing
- **Tailwind CSS v3** — utility styling + custom tokens
- **Lucide React** — icons
- **React Hot Toast** — notifications
- **Axios** — API calls

## Project Structure

```
client/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Sticky nav + mobile hamburger menu
│   │   ├── Footer.jsx        ← 4-column footer with social links
│   │   ├── SectionHeader.jsx ← Reusable eyebrow + title + line
│   │   ├── VideoCard.jsx     ← Hover-animated video placeholder card
│   │   ├── StatsBar.jsx      ← 4-stat animated bar
│   │   └── Ticker.jsx        ← Infinite scrolling marquee
│   ├── pages/
│   │   ├── Home.jsx          ← Hero, featured work, process, reviews, CTA
│   │   ├── Work.jsx          ← Portfolio with category filter
│   │   ├── Services.jsx      ← 6 services with tags
│   │   ├── Packages.jsx      ← 3 pricing tiers + add-ons
│   │   ├── About.jsx         ← Story, values, timeline
│   │   ├── Contact.jsx       ← Full form → POST /api/contact
│   │   └── NotFound.jsx      ← 404 page
│   ├── App.jsx               ← Routes + Toaster
│   ├── main.jsx              ← Entry point
│   └── index.css             ← Global styles + Tailwind layers
├── index.html
├── vite.config.js            ← Dev proxy → localhost:5000
├── tailwind.config.js
├── vercel.json               ← SPA rewrite rules for deployment
└── package.json
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/work` | Portfolio (filterable gallery) |
| `/services` | Services |
| `/packages` | Pricing + Add-ons |
| `/about` | About + Timeline |
| `/contact` | Contact Form |

## Local Setup

```bash
# 1. Install dependencies
cd client
npm install

# 2. Create env file
cp .env.example .env.local

# 3. Start dev server
npm run dev
# → http://localhost:5173
```

> The contact form posts to `/api/contact` which is proxied to `localhost:5000` in dev.
> Make sure the backend server is running for form submissions to work.

## Build for Production

```bash
npm run build
# Output → dist/
```

## Deploy to Vercel (Free)

### Option A — Vercel CLI
```bash
npm i -g vercel
cd client
vercel --prod
```

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Set **Root Directory** → `client`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Add environment variable: `VITE_API_URL` → your Render backend URL
8. Click Deploy ✅

## Customization Checklist

- [ ] Replace phone number in `Footer.jsx` and `Contact.jsx`
- [ ] Replace email in `Footer.jsx` and `Contact.jsx`
- [ ] Add real project thumbnails to `VideoCard` components in `Work.jsx`
- [ ] Update package prices in `Packages.jsx`
- [ ] Add Instagram / YouTube links in `Footer.jsx`
- [ ] Add real testimonials in `Home.jsx`
- [ ] Add Google Analytics / Meta Pixel in `index.html`
- [ ] Set up custom domain in Vercel dashboard

## Design System

| Token | Value |
|-------|-------|
| Primary Red | `#e63946` |
| Dark BG | `#0a0a0a` |
| Card BG | `#111111` |
| Surface | `#161616` |
| Display Font | Bebas Neue |
| Body Font | DM Sans |
| Accent Font | DM Serif Display (italic quotes) |
