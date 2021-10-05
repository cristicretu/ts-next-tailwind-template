# Ultimate Front-end Template

![preview](https://cdn.discordapp.com/attachments/797485737272541250/894949112099766272/Screenshot_2021-10-05_at_5.06.29_PM.png)

This is a template that can be re-used for projects. It consists of NextJs, TailwindCSS, Typescript + Dark mode (next-themes) + Keybindings (press t or h) + eslint, prettier, postcss + Self Hosted Inter Font.

Under the _components_ folder, use Container for each of your pages - as it provides a reusable starting point for every page.

```jsx
<Container>...pageElements</Container>
```

## Getting started

1. With 'use as template' repository
![preview](https://cdn.discordapp.com/attachments/797485737272541250/894981214077861928/unknown.png)

2. Clone the project

```bash
# http
git clone https://github.com/cristicretu/ts-next-tailwind-template.git

# ssh
git clone git@github.com:cristicretu/ts-next-tailwind-template.git
```

3. With ```create-next-app```

```bash
npx create-next-app -e https://github.com/cristicretu/ts-next-tailwind-template project-name
```

Install the required packages and run the template

```bash
cd ts-next-tailwind-template
yarn
```

## Included

### Packages

1. Clsx: A tiny (228B) utility for constructing className strings conditionally.
2. Next-themes: An abstraction for themes in your Next.js app.
3. react-use: react-hooks
4. react-use-keypress: for registering key bindings

### Custom globals.css

1. custom underline
2. vercel navbar
3. removes firefox, edge and ie bugs with overflows

### Absolute Imports

```tsx
import TextField from "../../../components/TextField.tsx"

changes to

import TextField from "components/TextField.tsx"
```

### Seo optimization found in ```Container.tsx```

### Folder structuring & organization

### Self Hosted Inter Font

### 404 Page
