# LazyVimx Documentation Website

This directory contains the Docusaurus-based documentation website for LazyVimx.

## Getting Started

### Installation

The website dependencies are separate from the main project. Install them with:

```bash
cd website
npm install
```

### Local Development

Start the development server:

```bash
npm start
```

Or from the project root:

```bash
npm run docs:start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

Build the static website:

```bash
npm run build
```

Or from the project root:

```bash
npm run docs:build
```

This command generates static content into the `build` directory.

### Serve Built Site

Preview the built website locally:

```bash
npm run serve
```

Or from the project root:

```bash
npm run docs:serve
```

### Deploy to GitHub Pages

Deploy the website to GitHub Pages:

```bash
npm run deploy
```

Or from the project root:

```bash
npm run docs:deploy
```

This command builds the website and pushes it to the `gh-pages` branch.

## Structure

```
website/
├── docs/                    # English documentation
│   ├── getting-started.md
│   ├── configuration.md
│   ├── extras.md
│   ├── keybindings.md
│   ├── architecture.md
│   ├── api.md
│   ├── faq.md
│   └── troubleshooting.md
├── i18n/
│   └── ru/                  # Russian translations
│       └── docusaurus-plugin-content-docs/
│           └── current/     # Russian documentation
│               ├── getting-started.md
│               ├── configuration.md
│               └── ...
├── src/
│   ├── components/          # React components
│   ├── css/                 # Custom CSS
│   └── pages/               # Custom pages
├── static/                  # Static assets
├── docusaurus.config.ts     # Site configuration
└── sidebars.ts             # Sidebar configuration
```

## Internationalization

The website supports two languages:

- **English (en)** - Default language
- **Russian (ru)** - Secondary language

### Adding Translations

1. Create the same document structure in `i18n/ru/docusaurus-plugin-content-docs/current/`
2. Translate the content
3. Update `i18n/ru/docusaurus-theme-classic/navbar.json` for navbar translations

## Customization

### Theme

The website uses a custom Catppuccin-inspired theme. Colors and styles can be customized in:

- `src/css/custom.css` - Main theme variables and styles
- `docusaurus.config.ts` - Site-wide configuration

### Components

Custom React components are located in `src/components/`:

- `HomepageFeatures/` - Feature cards on the landing page

### Content

- Documentation files are in Markdown format
- Use frontmatter for page metadata
- Code blocks support syntax highlighting for Lua, Bash, and JSON

## Contributing

When adding new documentation:

1. Add the English version to `docs/`
2. Add the Russian translation to `i18n/ru/docusaurus-plugin-content-docs/current/`
3. Update `sidebars.ts` if adding a new top-level page
4. Test locally before committing

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch.

Manual deployment:

```bash
npm run docs:deploy
```

The site will be available at: `https://aimuzov.github.io/LazyVimx/`

## Useful Links

- [Docusaurus Documentation](https://docusaurus.io/)
- [Markdown Guide](https://docusaurus.io/docs/markdown-features)
- [Internationalization](https://docusaurus.io/docs/i18n/introduction)
