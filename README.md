# ImagirationWeb

Web project for ImagiRation. Static site—no build step, no framework.

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit http://localhost:8000

## Deploy: GitHub + Netlify

1. **Create a GitHub repo** (e.g. `ImagirationWeb`), then in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: static ImagiRation site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ImagirationWeb.git
   git push -u origin main
   ```
2. **Connect to Netlify:** [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project** → **GitHub** → choose this repo.
3. **Build settings:** Leave **Build command** empty. Set **Publish directory** to `.` (root). Click **Deploy**.

Your site will get a URL like `https://random-name-12345.netlify.app`. You can add a custom domain later in Netlify.

### Other options

- **Drag & drop:** [app.netlify.com/drop](https://app.netlify.com/drop) — no Git required.

### 2. Cloudflare Pages

- [pages.cloudflare.com](https://pages.cloudflare.com) → **Create a project** → **Direct Upload** and upload the folder, or
- Connect Git for automatic deploys on push.

Free, fast CDN, and no server to manage.

### 3. GitHub Pages

- Push this repo to GitHub.
- **Settings → Pages** → Source: deploy from branch (e.g. `main`), folder: `/ (root)`.

Your site will be at `https://<username>.github.io/<repo>/` (or a custom domain).

---

All of these host **static files only**—no Node, no build, no backend. Just HTML and CSS.
