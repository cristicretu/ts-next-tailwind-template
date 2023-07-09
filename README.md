# Ultimate Front-end Template

![preview](https://cdn.discordapp.com/attachments/797485737272541250/952208625806495815/image_5.png)

> Most elements are taken from [my website](https://cretu.dev).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcristicretu%2Fts-next-tailwind-template)

[Use as a CodeSandbox template](https://codesandbox.io/s/ts-next-tailwind-template-vbjvcr)

## Ingredients ✨:

- NextJS 13 🚀
- TailwindCSS 🦄
- Typescript 🦺
- Dark Mode Support 🌓
- ESLint + Prettier Config 📂
- Husky 🐶
- Self-Hosted Inter Font ␊

## Getting started

1. With 'use as template' repository
   ![preview](https://cdn.discordapp.com/attachments/797485737272541250/952208604386189332/Group_11.png)

2. Clone the project

```bash
# http
git clone https://github.com/cristicretu/ts-next-tailwind-template.git
```

```bash
# ssh
git clone git@github.com:cristicretu/ts-next-tailwind-template.git
```

3. With `create-next-app`

```bash
npx create-next-app -e https://github.com/cristicretu/ts-next-tailwind-template project-name
```

* Tip: if you want to use the version prior to Next.js 13 with the app directory, use:
```bash
npx create-next-app -e https://github.com/cristicretu/ts-next-tailwind-template/tree/1ac5d6dd4157ea3c7cc89f14fbfbf01ab0b495fc project-name
```

Install the required packages and run the template

```bash
cd project-name
npm install
# yarn install
# pnpm install
```

## Included

### Custom classNames function
> Under `/lib/classNames`

### Packages

1. Next-themes: An abstraction for themes in your Next.js app
2. react-use: react-hooks
3. Framer Motion: animation library

### Custom globals.css

1. custom underline
2. vercel navbar
3. removes firefox, edge and ie. bugs with overflows

### Absolute Imports

```tsx
import TextField from '../../../ui/TextField.tsx'
```

changes to

```tsx
import TextField from 'uis/TextField.tsx'
```

### SEO optimization found in `Container.tsx`

### Folder structuring & organization

> Under `/ui/` & `/public/`

### Self Hosted Inter Font

> Under `/public/fonts/`

### 404 Page

### Favicons and more configs

> Under `/public/static/favicons/`

![preview](https://cdn.discordapp.com/attachments/797485737272541250/952211815046197278/Frame_7.png)
