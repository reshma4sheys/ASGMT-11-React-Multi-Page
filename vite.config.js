// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// nEW CODE

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Netlify automatically sets process.env.NETLIFY to true.
  // If we are on Netlify, use '/'. If we are anywhere else (GitHub), use '/ASGMT-10/'.
  base: process.env.NETLIFY ? '/' : '/ASGMT-11-React-Multi-Page/',
})
