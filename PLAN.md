# Plan: Complete Copy of imagiration.com → Netlify via GitHub

## 1. Scope: What to Copy

| Page | URL | Content source | Priority |
|------|-----|----------------|----------|
| **Home** | `/` | Already in `index.html` | Done |
| **Brain Training** | `/brain-training/` | Fetched: apps intro, Math & Logic, POOZA Preschoolers/Toddlers, RecoverBrain, CTA | P1 |
| **Autism (MITA)** | `/autism/` | Fetched: study summary, FDA, patent, app store links, science copy, FAQs/testimonials/news links | P1 |
| Contact | `/sample-page/contact` or `/contact/` | Linked from brain-training; fetch if needed | P2 |
| MITA sub-pages | `/autism/mita-faqs/`, `mita-games/`, etc. | Linked from autism; optional for “complete” copy | P2 |

**P1** = must-have for a complete copy. **P2** = nice-to-have or link to existing site.

---

## 2. Project Structure (Static, Netlify-Friendly)

```
ImagirationWeb/
├── index.html              # Home (existing)
├── styles.css              # Global styles (existing)
├── brain-training/
│   └── index.html          # Brain training page
├── autism/
│   └── index.html          # Autism / MITA page
├── contact/
│   └── index.html          # (Optional) Contact
├── netlify.toml            # Optional: redirects, headers
├── .gitignore
├── README.md
└── PLAN.md                 # This file
```

- **No build step.** Plain HTML/CSS.
- **Folder-per-page** so URLs are clean: `yoursite.netlify.app/brain-training/`, `yoursite.netlify.app/autism/`.

---

## 3. Implementation Steps

### Phase A: Content and Layout

1. **Shared layout**
   - Same `<header>` (logo + optional nav) and `<footer>` on every page.
   - Reuse `styles.css`; add section-specific classes if needed (e.g. `.page-brain-training`, `.page-autism`).

2. **Navigation**
   - Header links: **ImagiRation** (home), **Brain Training**, **Autism** (and **Contact** if you add it).
   - Use relative paths: `/`, `/brain-training/`, `/autism/`, `/contact/`.

3. **Home** (`index.html`)
   - Already done; only add the shared header/footer and nav.

4. **Brain Training** (`brain-training/index.html`)
   - Sections: hero (“Apps for brain training!”), intro, “Check out our latest brain-training apps” with Math & Logic, POOZA for Preschoolers, POOZA for Toddlers, RecoverBrain Therapy.
   - CTA: “Get in Touch” → `/contact/` (or mailto/external link).

5. **Autism** (`autism/index.html`)
   - Sections: MITA intro + clinical result, FDA breakthrough, patent link, “Learn More” (MDPI), app store buttons (Apple, Amazon, Google Play).
   - Subsections: short science copy (visual puzzles, PRT, features, design).
   - Links to MITA Games, FAQs, Testimonials, In the News (can be same-page anchors or placeholders).
   - Optional: “Donate to Autism Research” (link or placeholder).

6. **Contact** (optional)
   - Single page with “Get in Touch” and either mailto link or Netlify Forms (add one form in HTML and enable in Netlify).

7. **Assets**
   - Favicon: copy from imagiration.com or use a simple SVG/PNG.
   - External links (MDPI, app stores, FDA PDF, etc.): keep as absolute URLs; no need to host PDFs unless you want them local.

### Phase B: Repo and Netlify

8. **Git**
   - `git init`
   - `.gitignore`: e.g. `.DS_Store`, `*.log`, `.env` (if you add env later).
   - Commit all files.

9. **GitHub**
   - Create a new repo (e.g. `ImagirationWeb` or `imagiration-website`).
   - Add `origin`, push `main` (or your default branch).

10. **Netlify**
    - Log in at [app.netlify.com](https://app.netlify.com).
    - **Add new site** → **Import an existing project** → **GitHub**.
    - Authorize Netlify, pick the repo and branch.
    - Build settings for a static site:
      - **Build command:** leave empty (or “echo ‘No build’”).
      - **Publish directory:** `.` (root).
    - Deploy. Netlify will serve `index.html` at `/` and `brain-training/index.html` at `/brain-training/`, etc.

11. **Optional: netlify.toml**
    - Redirect `http` → `https`, or `www` → non-www (if you add custom domain).
    - No build command in `netlify.toml` if you use the UI; or set `publish = "."` and no `build` for a static site.

12. **Custom domain (later)**
    - In Netlify: **Domain settings** → **Add custom domain** (e.g. `imagiration.com`).
    - Update DNS as Netlify instructs (A/CNAME).

---

## 4. Checklist

- [ ] Add shared header/footer and nav to `index.html`.
- [ ] Create `brain-training/index.html` with full content and same layout.
- [ ] Create `autism/index.html` with full content and same layout.
- [ ] (Optional) Create `contact/index.html` and/or add Netlify form.
- [ ] (Optional) Add MITA sub-pages or link to current site.
- [ ] Add favicon and any needed assets.
- [ ] Add `.gitignore`, run `git init`, commit.
- [ ] Create GitHub repo, push.
- [ ] In Netlify: Import from GitHub, publish directory `.`, deploy.
- [ ] Test all links and pages on the Netlify URL.

---

## 5. One-Page “Connect GitHub and Netlify” Summary

1. **GitHub:** New repo → clone or add `origin` → push this project.
2. **Netlify:** New site → Import from Git → choose repo → Publish directory: `.` → Deploy.
3. No build command; no env vars required for a static copy.

Result: A complete, static copy of imagiration.com hosted on Netlify and driven from a GitHub repo.
