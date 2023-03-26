# Ookayama School Site

> [www.ookayamaschool.co.jp](https://ookayamaschool.co.jp/)

## 🚀 Project Goals

- Improve accessibly✅
- Mobile first design✅
- Simplify navigation✅
- Refresh icon design✅
- Increase colour vibrancy and contrast✅
- Improve copy and implement Google Ads✅
- Utilise markdown files for easily updatable articles✅
- 100% lighthouse scores for desktop and mobile devices✅

## 🛠️ Tools

**Development**

- Git
- Astro
- ESLint
- VS Code
- Markdown
- Tailwind
- Typescript

**Deployment**

- Github
- Netlify

**Design**

- Icons made in Figma
- Images made in Figma
- Site mockups made in Figma

## ♿ Accessability

- Semantic HTML
- Skip to main
- Escape to close menu
- Click outside to close menu
- Current page in menu for screen readers
- Current page in footer for screen readers

## 📰 News Articles

Add markdown files to the news folder to add articles to the news page

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── content/
│   │   └── news/
│   │       └── date_of_post.md <--Add news here
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                             |
| :---------------------- | :------------------------------------------------- |
| `npm install`           | Installs dependencies                              |
| `npm run dev`           | Starts local dev server at `localhost:3000`        |
| `npm run dev -- --host` | Starts local dev and network server                |
| `npm run build`         | Build your production site to `./dist/`            |
| `npm run preview`       | Preview your build locally, before deploying       |
| `npm run astro ...`     | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help`  | Get help using the Astro CLI                       |
