import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from "@module-federation/vite"

export default defineConfig({
  plugins: [react(),
    federation({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./Cart": "./src/assets/cart.tsx"
      },
      shared: ["react", "react-dom"]
    })
  ],
  server: {
    cors: true,
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
