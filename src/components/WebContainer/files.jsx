export const files = {
  "package.json": {
    file: {
      contents: `
        {
          "name": "example-app",
          "type": "module",
          "dependencies": {
          },
          "scripts": {
            "start": "node index.js"
          }
        }      
        `.trim(),
    },
  },
};
