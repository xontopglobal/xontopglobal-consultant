# Xontopglobal — Consultancy & Digital Solutions Platform

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![React 19](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Netlify Ready](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://netlify.com)

---

## Overview

Xontopglobal is a modern consultancy website built with React, TypeScript, Vite, and Tailwind CSS. It showcases digital solutions including AI chatbots, web development, branding, and business consulting.

**Contact:** xontopglobal@gmail.com | **+234 803 749 0042**

---

## Quick Start (Local Development)

### Prerequisites

- [Node.js](https://nodejs.org) (v18+) or [Bun](https://bun.sh) (recommended)
- [VS Code](https://code.visualstudio.com) (recommended IDE)
- [Git](https://git-scm.com) installed

### Steps

```bash
# 1. Open project in VS Code
code .

# 2. Install dependencies
bun install
# or: npm install

# 3. Run local dev server
bun run dev
# or: npm run dev
# Server starts at http://localhost:3000
```

---

## GitHub Repository Setup

### Step 1: Initialize Git Locally

Open your terminal in the project root and run:

```bash
git init
git branch -M main
git add .
git commit -m "feat: initial commit for Xontopglobal website"
```

### Step 2: Create Remote Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name your repository `xontopglobal-consultancy`
3. Keep it **Public** or **Private** as needed
4. Do NOT initialize with README, .gitignore, or license (already included)
5. Click **Create repository**

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/xontopglobal-consultancy.git
git push -u origin main
```

Replace `<YOUR-GITHUB-USERNAME>` with your actual GitHub username.

#### One-Line Setup Script

Copy and paste this entire block into your terminal to initialize, connect, and push in one go:

```bash
git init && git branch -M main && git add . && \
git commit -m "feat: initial commit" && \
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/xontopglobal-consultancy.git && \
git push -u origin main
```

#### PowerShell Version

```powershell
git init; git branch -M main; git add .;
git commit -m "feat: initial commit";
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/xontopglobal-consultancy.git;
git push -u origin main
```

### Alternative: Clone an Existing Repo

If someone else already created the repo and you want to work on it:

```bash
git clone https://github.com/<OWNER>/xontopglobal-consultancy.git
cd xontopglobal-consultancy
# Then copy all project files here and commit
git add .
git commit -m "feat: import project files"
git push -u origin main
```

---

## Deploy to Netlify (One-Click Continuous Deployment)

### Manual Netlify Setup

1. Go to [app.netlify.com](https://app.netlify.com) and sign in
2. Click **Add new site > Import an existing project**
3. Connect your **GitHub** account
4. Select the `xontopglobal-consultancy` repository
5. Configure build settings:

| Setting          | Value                              |
| ---------------- | ---------------------------------- |
| Build command    | `npm run build` or `bun run build` |
| Publish directory| `dist`                             |
| Node version     | 18+                                |

6. Click **Deploy site**

### Automatic Deploys

Once connected, every push to `main` triggers an automatic rebuild and deploy on Netlify.

### Custom Domain

1. In Netlify dashboard, go to **Domain settings**
2. Add your custom domain (e.g., `xontopglobal.com`)
3. Follow DNS configuration instructions
4. SSL certificate is provisioned automatically

### SPA Routing

The `public/_redirects` file handles client-side routing automatically:

```
/*    /index.html   200
```

---

## GitHub Actions CI

This project includes a CI workflow (`.github/workflows/ci.yml`) that runs on every push and pull request to `main`:

- Installs dependencies
- Runs TypeScript type checking
- Builds the production bundle

View results at your repository's **Actions** tab.

---

## Troubleshooting Common Issues

### Authentication Failed

Use a Personal Access Token instead of your password:
1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Generate a new token with `repo` scope
3. Use the token as your password when prompted

### SSH vs HTTPS

- **HTTPS** (simplest): `git remote add origin https://github.com/user/repo.git`
- **SSH** (no password prompts): Generate keys with `ssh-keygen -t ed25519`, add public key to GitHub, then use `git remote add origin git@github.com:user/repo.git`

### Remote Already Exists

```bash
git remote remove origin
git remote add origin https://github.com/<username>/xontopglobal-consultancy.git
```

### Permission Denied (publickey)

Your SSH key is not added to GitHub. Test with:
```bash
ssh -T git@github.com
```
If it fails, add your public key (`~/.ssh/id_ed25519.pub`) to GitHub under Settings > SSH and GPG keys.

### Push Rejected — Non-Fast-Forward

The remote has commits you don't have locally:
```bash
git pull --rebase origin main
git push -u origin main
```

---

## Recommended VS Code Extensions

| Extension              | Purpose                          |
| ---------------------- | -------------------------------- |
| Tailwind CSS IntelliSense | Autocomplete Tailwind classes  |
| ESLint                 | Linting and code quality         |
| Prettier               | Code formatting                  |
| GitLens                | Enhanced Git blame and history   |
| Error Lens             | Inline error highlighting        |

Install from VS Code Extensions panel (`Ctrl+Shift+X`).

---

## Project Structure

```
├─── public/
│   ├─── _redirects          # Netlify SPA routing fallback
│   └─── gebeya.webp         # Brand asset
├─── src/
│   ├─── assets/             # Static assets
│   ├─── components/
│   │   ├─── ui/             # shadcn/ui primitives
│   │   ├─── Hero.tsx
│   │   ├─── ServicesBento.tsx
│   │   ├─── Navbar.tsx
│   │   ├─── AIChatBot.tsx
│   │   ├─── ConsultationAndContact.tsx
│   │   ├─── GitHubDeployModal.tsx
│   │   ├─── QuickConnectTab.tsx
│   │   ├─── GitCommandsTab.tsx
│   │   ├─── NetlifyTab.tsx
│   │   ├─── VSCodeTab.tsx
│   │   └─── TroubleshootingTab.tsx
│   ├─── hooks/
│   │   └─── use-mobile.ts
│   ├─── lib/
│   │   └─── utils.ts
│   ├─── App.tsx
│   ├─── main.tsx
│   ├─── index.css
│   ├─── constants.ts
│   └─── types.ts
├─── .github/
│   └─── workflows/
│       └─── ci.yml          # Automated build verification
├─── package.json
├─── vite.config.ts
├─── tailwind.config.*
└─── tsconfig.json
```

---

## Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `bun run dev`     | Start development server       |
| `bun run build`   | Production build to `dist/`    |
| `bun run preview` | Preview production build       |
| `bun run lint`    | Run ESLint                     |
| `bun run typecheck` | Run TypeScript type checking |

---

## License

Copyright © 2025 Xontopglobal. All rights reserved.
