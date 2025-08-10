# XRP Macro Infographic (TH/EN)

Single-page webapp (HTML/CSS/JS) for XRP macro view:
- KPI, Catalysts, Signals
- Apple-style Money Flow Map (responsive)
- Timeline with price bands (educational, not prediction)
- Laws & Financial infrastructure
- Prophecies & fortune sticks (from user’s notes)
- Signal checklist
- Portfolio calculator
- Light/Dark mode + TH/EN toggle

> **Disclaimer:** Educational content only. Not financial advice.

## 📦 Structure
```
xrp-github/
├─ index.html
├─ assets/
│  ├─ style.css
│  └─ app.js
├─ .nojekyll
└─ README.md
```

## 🚀 Deploy on GitHub Pages
1. Create a **public** repo on GitHub, e.g. `xrp-macro`  
2. Upload all files in this folder (index.html, assets/, .nojekyll, README.md)
3. Go to **Settings → Pages**
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` / folder: `/root` → **Save**
4. Wait 1–2 minutes → Your site will be available at:
   - `https://<username>.github.io/xrp-macro/`

### ✅ Custom domain (optional)
- Add your domain in **Settings → Pages → Custom domain**, e.g. `xrp.yourdomain.com`
- In your DNS:
  - If using a **subdomain** (`xrp.yourdomain.com`): add a **CNAME** to `<username>.github.io`
  - Avoid using **A records** for subdomains. Use **CNAME** instead.

## 🛠 Edit content
Open `index.html` and change any text with the `data-i18n` keys, or edit the dictionary in `assets/app.js`.

## 🌓 Light/Dark & Language
- Theme persists using `localStorage`
- Language toggles via `data-i18n` dictionary (Thai/English)

## 🔧 Local preview
Just open `index.html` in your browser. No build step.

---

© 2025 • For education only.
