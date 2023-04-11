export const files = {
  "vite.config.js": {
    // Because it's a file, add the "file" key
    file: {
      // Now add its contents
      contents: `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
server: {
    headers: {
    "Cross-Origin-Embedder-Policy": "require-corp",
    "Cross-Origin-Opener-Policy": "same-origin",
    },
},
});
      `,
    },
  },
  "package.json": {
    file: {
      contents: `
{
    "name": "react-webcontainer",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    },
    "devDependencies": {
        "@types/react": "^18.0.28",
        "@types/react-dom": "^18.0.11",
        "@vitejs/plugin-react": "^3.1.0",
        "vite": "^4.2.0"
    }
}
      `,
    },
  },
  "index.html": {
    file: {
      contents: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
        `,
    },
  },
  src: {
    directory: {
      "main.jsx": {
        file: {
          contents: `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`,
        },
      },
      "App.jsx": {
        file: {
          contents: `
import { useState, useEffect } from 'react'
import Component from "./component"

function App() {

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <Component />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
                `,
        },
      },
      "component.jsx": {
        file: {
          contents: `
function Component() {
  return <span>component</span>
}

export default Component
          `,
        },
      },
    },
  },
};
