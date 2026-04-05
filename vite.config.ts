import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { federation } from "@module-federation/vite"

export default defineConfig({
  base: "https://mfe-container-repo.s3.ap-south-1.amazonaws.com/cart/",

  plugins: [
    react(),
    federation({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartPage": "./src/CartPage.jsx"
      },
      shared: ["react", "react-dom"]
    })
  ]
})