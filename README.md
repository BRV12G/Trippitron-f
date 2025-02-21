#### Initial Vite + React setup
###### 1.npm create vite@latest
###### 2.Enter a project name and Selected React & Javascript
###### 3. cd Project name
###### 4. npm install 
###### 5. npm run dev
#### Tailwincss and Shadcn setup in Vite + React.
###### [Reference video](https://www.youtube.com/watch?v=-3M8koljr_M)
###### [Shadcn docs Reference](https://ui.shadcn.com/docs/installation/vite)
###### 1. npm install -D tailwindcss postcss autoprefixer
###### 2. npx tailwindcss init -p (This doesnot work in TailwindCss 4).
###### 3. Created the files tailwind.config.js and postcss.config.mjs manually.
###### 4. Copy the below code for updating tailwind.config.js file.
```bash
/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
    },
};

export default config;
```
###### 5. Copy the below code for updating postcss.config.mjs file.

```bash
// /** @type {import('tailwindcss').Config} */
// export default = {
//     content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }
```
###### 6. Add this import header in your main css file, src/index.css in our case:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

