# Ask LLamas - Static Site Generator

This folder contains a static site generator that creates SEO-friendly individual HTML pages for each psychology question answered by multiple LLM models (Claude, ChatGPT, Gemini, Grok, and Deepseek).

## Overview

Instead of using query strings (e.g., `?questionId=ocean-traits-personality-disorders`), the site now generates individual HTML pages for each question (e.g., `ocean-traits-personality-disorders.html`). This approach:

- **Improves SEO**: Each question has its own URL that search engines can index
- **Better sharing**: Direct links to specific questions work without JavaScript
- **Faster loading**: Pre-rendered HTML with no client-side content loading
- **Simpler navigation**: Dropdown redirects to static pages

## Build Process

### Local Development

To build the static pages locally:

```bash
# Install dependencies
npm install

# Generate HTML pages
npm run build
```

This will generate:
- Individual HTML pages for each question (e.g., `ocean-traits-personality-disorders.html`)
- An updated `index.html` with a list of all questions

### Production Build

The build process is automated in the Dockerfile:

1. **Node.js Installation**: Node.js 20.x is installed in the build stage
2. **Dependency Installation**: `npm install` runs in the `/app/ask-llamas` directory
3. **Static Generation**: `npm run build` generates all HTML pages
4. **Deployment**: Generated files are copied to Nginx for serving

### File Structure

```
ask-llamas/
├── assets/              # Model icons and images
├── data/                # Question data and responses
│   ├── data.json       # Question configuration
│   └── [question-id]/  # Folders for each question
│       ├── claude.md
│       ├── gpt.md
│       ├── deepseek.md
│       ├── gemini.md
│       ├── grok.md
│       └── merged.md   # Optional synthesized response
├── build.js            # Static site generator script
├── package.json        # Node.js dependencies
└── *.html             # Generated HTML files (excluded from git)
```

## How It Works

### Build Script (`build.js`)

The build script:

1. Reads `data/data.json` to get all questions
2. For each question:
   - Loads all markdown files (claude.md, gpt.md, etc.)
   - Converts markdown to HTML using `marked`
   - Generates a complete HTML page with:
     - Question title, subtitle, and prompt
     - Accordion sections for each LLM model
     - Dropdown menu for navigation
     - Footer with links to all questions
3. Generates an `index.html` with a list of all questions

### Data Format

Each question in `data.json` has:

```json
{
  "id": "ocean-traits-personality-disorders",
  "title": "OCEAN traits that are linked or related to personality disorders",
  "subtitle": "List the prominent factors from each OCEAN trait",
  "models": {
    "Claude": "3.7 Sonnet",
    "Gemini": "2.5 Pro",
    "Grok": "3 Beta",
    "ChatGPT": "4.5",
    "Deepseek": "3",
    "merged": "claude"  // Optional - indicates merged response exists
  },
  "prompt": "Can you list the prominent factors..."
}
```

## Adding New Questions

To add a new question:

1. Create a new folder in `data/` with a unique ID (e.g., `my-new-question/`)
2. Add markdown files for each model response:
   - `claude.md`
   - `gpt.md`
   - `deepseek.md`
   - `gemini.md`
   - `grok.md`
   - `merged.md` (optional)
3. Add the question to `data/data.json`:
   ```json
   {
     "id": "my-new-question",
     "title": "Your Question Title",
     "subtitle": "Optional subtitle",
     "models": {
       "Claude": "3.7 Sonnet",
       "ChatGPT": "4.5",
       "Deepseek": "3",
       "Gemini": "2.5 Pro",
       "Grok": "3 Beta"
     },
     "prompt": "Your full question prompt..."
   }
   ```
4. Run `npm run build` to generate the new page

## SEO Benefits

Each generated page includes:

- Unique `<title>` tag with the question title
- Meta description with the question subtitle
- Semantic HTML structure
- All content pre-rendered (no JavaScript required for content)
- Clean URLs without query parameters

## Dependencies

- **Node.js**: Version 18 or higher
- **marked**: Markdown to HTML converter

## Notes

- Generated HTML files are excluded from git (see `.gitignore`)
- Pages are built during Docker image creation
- The old query string URLs will still work via `index.js` for backwards compatibility
- All styling is inline (no external CSS files needed)
