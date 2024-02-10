# React + TypeScript + Vite - Radioactive, Inc.
* Production Build for Enhanced Testing and Deployments.
* Preview Versions are Live at Our [Radioactive's Domain](https://radioactive-drab.vercel.app/)

## Quick Links and Navigation:
For Any Information About Contribution and Documentation of This Repo. <br>
### Please Refer to: 
- [Documentation 📖](https://github.com/offensive-vk/Radioactive/blob/master/README.md) <br>
- [Contribution Guidelines ✨](https://github.com/offensive-vk/Radioactive/blob/master/.github/CONTRIBUTING.md) <br>
- [Security Guidelines ⚠️](https://github.com/offensive-vk/Radioactive/blob/master/.github/SECURITY.md) <br>
- [Author 🧑‍💻](https://github.com/offensive-vk/) <br>

## Crafted and Deployed using Bun 🙌 + Vercel 👌
<p align="center">
  <a href="https://reactjs.dev"><img src="https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/react/react-original.svg" height="200" width="200" alt="react" /></a>
  <a href="https://typescriptlang.org"><img src="https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/typescript/typescript-plain.svg" height="200" width="200" alt="ts" /></a>
  <a href="https://bun.sh"><img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" alt="bun" height=150 width=150 /></a>
  <a href="https://vercel.com"><img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" height="150" width="150" alt="vercel" /></a>
  <a href="https://sass-lang.org"><img src="https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/sass/sass-original.svg" height="200" width="200" alt="sass" /></a>
</p>

## If you want to contribute to this repository. 
### Clone the Repository
```bash
$ git clone https://github.com/offensive-vk/Radioactive
$ cd Radioactive
```

### Install or update bun
```bash 
# Need to install with install script (recommended)
$ curl -fsSL https://bun.sh/install | bash
```
```bash
# If Already installed : 
$ bun update
$ bun upgrade
```

### Install Dependencies
```bash
$ bun install
```
### Start development server: 
```bash
$ bun run dev
```

About this template provided by bun.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
