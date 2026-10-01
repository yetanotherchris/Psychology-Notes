# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal psychology notes repository built as a static site using [Zensical](https://zensical.org) (a Rust+Python static site generator by the MkDocs Material authors, fully compatible with `mkdocs.yml`). The site includes several embedded HTML applications located in the tools/ directory (llm-consensus-answers, academic-search, questionnaires, speedreader, and wordcounter) that are copied into the built site.

The `main` branch uses MkDocs Material. The `zensical-migration` branch uses Zensical.

## Build and Development

### Local Development (Zensical dev server)
Fast iteration — does **not** serve `/tools/`.

```powershell
.\run-local.ps1
# Serves at http://localhost:8123
```

This mounts the project into the `zensical/zensical` Docker image and runs the dev server. No Python or pip required.

### Local Development (full nginx build)
Slower but matches production — serves `/tools/` correctly.

```powershell
.\run-nginx-local.ps1
# Builds Docker image then serves at http://localhost:8123
```

### Docker Build
```bash
# Build Docker image (2-stage: zensical/zensical builder + nginx:alpine)
docker build -t psychology-notes .

# Run locally
docker run -p 8080:8080 psychology-notes
```

The Dockerfile:
1. Builds the site with the `zensical/zensical` image (no pip/Python required)
2. Copies the built site and the `tools/` directory into an nginx:alpine image
3. Exposes port 8080

### LLM Consensus Answers
The `tools/llm-consensus-answers/` HTML files are **pre-built and committed to git** — no build step is required. They are copied directly into the Docker image.

Each HTML file is a static page with answers from multiple LLM models for a psychology question. The data structure:
```
tools/llm-consensus-answers/
├── data.json                    # Question configurations
├── [question-id].html           # Pre-generated pages (committed)
└── (no build.js/package.json — HTML files are static)
```

## Architecture

### Multi-Part Static Site
The site consists of:
1. **Zensical documentation** (mkdocs.yml) - Psychology notes in markdown format under docs/
2. **tools/** - Directory containing all HTML applications:
   - **llm-consensus-answers** - Pre-built static HTML pages for LLM-answered questions
   - **academic-search** - Standalone HTML/JS application
   - **questionnaires** - SurveyJS-based psychological questionnaires/inventories
   - **speedreader** - Speed reading tool
   - **wordcounter** - Word counter utility
   - **lexical-decision-task** - Lexical decision task tool

During Docker build:
- Zensical builds docs/ to site/
- tools/ is copied directly to site/tools/ in the nginx web root

### Entries / Blog
Zensical does not yet implement the MkDocs Material blog plugin. A custom template workaround is used instead:

- **`docs/entries/index.md`** — Contains a `posts:` list in YAML frontmatter with each post's `title`, `date` (formatted as "Month D, YYYY"), `description`, and `url`. Posts with `draft: true` in their frontmatter are excluded.
- **`custom_theme/entries.html`** — MiniJinja template that extends `main.html` and iterates `page.meta.posts` to render the listing.
- Individual posts live in `docs/entries/posts/YYYY-MM-DD-title.md` and are **not** listed in the nav (keeping the sidebar clean). They are still built and accessible via their URL.
- Posts use `<!-- more -->` to separate the excerpt (shown on the entries page) from the full content.

When adding a new post:
1. Create `docs/entries/posts/YYYY-MM-DD-title.md` with frontmatter (`date:`, `categories:`) and `<!-- more -->` after the excerpt.
2. Re-run the frontmatter generator to update `docs/entries/index.md` — or manually add the entry to the `posts:` list (newest first).

### Custom Theme
`custom_theme/` contains template overrides (MiniJinja, Zensical's template engine):
- **`main.html`** — Adds cache-control meta tags in `{% block extrahead %}`
- **`entries.html`** — Custom entries listing template (see above)

### Content Organization
Psychology notes are organized in docs/:
- `entries/posts/` - Blog-style posts with dates
- `Cluster-B/` - Personality disorder notes
- Top-level `.md` files for various psychology topics

## Deployment

The site is deployed to Fly.io using the Dockerfile and `nginx.conf` configuration. It can also
be deployed to **Cloudflare Workers** using Workers Static Assets.

### Cloudflare Workers

- **`wrangler.jsonc`** — Worker config. The `assets.directory` points at `dist/`, served through
  the `ASSETS` binding. `html_handling: auto-trailing-slash` maps `/foo/` to `/foo/index.html`
  and `not_found_handling: 404-page` serves the generated `404.html`.
- **`src/worker.mjs`** — A passthrough Worker (`env.ASSETS.fetch`) so dynamic routes can be added
  later. Static files are served by the assets system before the script runs.
- **`scripts/build.mjs`** — Assembles `dist/` exactly like the Dockerfile: builds the site with
  Zensical (`site/`), builds the cs2-flicker-paradigm React app, merges `tools/` into
  `dist/tools/`, and copies `_headers` and `robots.txt`.
- **`_headers`** — Security and cache headers, copied into `dist/` (mirrors `nginx.conf`). Only a
  single `*` splat is allowed per rule, so caching is scoped by directory (e.g. `/assets/*`).

Commands:
```bash
npm ci                 # install wrangler
npm run build          # build dist/
npm run dev            # local wrangler dev server (http://localhost:8787)
npm run deploy         # wrangler deploy (needs CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID)
```

Zensical must be available on the build machine (`uv tool install zensical`, `pip install zensical`,
or `uvx`). The build script auto-detects `uvx`, `zensical`, `python3 -m zensical`, or
`python -m zensical`.

CI/CD uses **Cloudflare Workers Builds** (Dashboard → Workers & Pages → the Worker → Settings →
Builds → Connect). Do **not** also add a GitHub Actions deploy workflow, or pushes will deploy
twice. Required settings:

| Setting | Value |
| --- | --- |
| Worker name | `psychology-notes` (must match `name` in `wrangler.jsonc`) |
| Root directory | `/` (default) |
| Build command | `pip install zensical && npm run build` |
| Deploy command | `npx wrangler deploy` (default) |
| Non-production deploy command | `npx wrangler versions upload` (default; preview builds) |

The build image includes Python 3.13 + pip, so `pip install zensical` works there; npm
dependencies at the root are installed automatically. `cs2-flicker-paradigm`'s dependencies are
installed by `scripts/build.mjs`. Node is pinned via `.nvmrc`.

The Fly.io path (Dockerfile + `nginx.conf`) is unchanged; both builds share the same source.

### Sitemap Generation
The sitemap is generated in two parts:
1. **Zensical sitemap plugin** - Generates initial sitemap.xml for all markdown documentation
2. **generate_sitemap.py** - Appends additional URLs to sitemap.xml:
   - All questionnaire pages (from tools/questionnaires/*/index.html)
   - All LLM consensus answer pages (from tools/llm-consensus-answers/data.json)
   - Academic search page

The sitemap URL is referenced in robots.txt.

## Notes

- The site uses the MkDocs Material theme config (`mkdocs.yml`) — Zensical is fully compatible
- Zensical's blog plugin is not yet implemented; the entries workaround uses frontmatter + custom template
- Questionnaires are based on SurveyJS and contain educational-use-only psychological assessments
- nginx.conf includes cache headers for static assets
- `llm-consensus-answers/*.html` files are committed to git (not gitignored)
