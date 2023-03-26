# Ookayama School Site

> [www.ookayamaschool.co.jp](https://ookayamaschool.co.jp/)

## 🚀 Project Goals

1. Mobile first design✅
2. Simplify navigation✅
3. Improve accessibly✅
4. Increase colour vibrancy and contrast✅
5. Improve copy and implement Google Ads✅
6. 100% lighthouse scores for desktop and mobile devices✅
7. Utilise markdown files for easily updatable articles✅

## 🛠️ Tools

**Development**

- Astro
- Typescript
- Tailwind
- Markdown
- ESLint
- VS Code

**Deployment**

- Github
- Netlify

**Design**

- Icons designed made Figma
- Images designed made Figma
- Site mockups made Figma

## ♿ Accessability

**Navigation**

- Skip to main
- Escape to close menu
- Click outside to close menu

**Screen Reader**

- Semantic HTML
- Current page in menu
- Current page in footer

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
