### Initial Vite + React setup
###### 1.npm create vite@latest
###### 2.Enter a project name and Selected React & Javascript
###### 3. cd Project name
###### 4. npm install 
###### 5. npm run dev
### Tailwincss and Shadcn setup in Vite + React.
###### [Reference video](https://www.youtube.com/watch?v=-3M8koljr_M)
###### [Shadcn docs Reference](https://ui.shadcn.com/docs/installation/vite)
###### 1. npm install -D tailwindcss postcss autoprefixer
###### 2. npx tailwindcss init -p (This doesnot work in TailwindCss 4).
###### 3. Created the files tailwind.config.js and postcss.config.mjs manually in the root directory.
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
 /** @type {import('tailwindcss').Config} */
export default = {
     content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
```
###### 6. Add this import header in your main css file, src/index.css in our case:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
###### 7. Create a jsconfig.json file in the root directory and paste the below code.
```bash
{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
    },
    "include": ["src"],
    "exclude": ["node_modules"]
  }
```
###### 8. Update vit.config.js as the following:
```bash
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```
###### 9. npx shadcn@latest init
###### 10. Which style would you like to use? › New York<br>Which color would you like to use as base color? › Zinc<br>Do you want to use CSS variables for colors? › no / yes
###### 11. A file - src\lib\utils.js and components.json will be created and tailwind.config.js will be updated.
###### 12. Run the project - npm run dev
###### 13. created a components folder under /src
#### Extensions : <br>1.Tailwindcss intellisense<br>2.ES7+Redux+React.
#### Default react template shortcut - rfec.


