import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const githubPagesSpaFallback = {
  name: 'github-pages-spa-fallback',
  apply: 'build',
  async closeBundle() {
    await copyFile(resolve('dist/index.html'), resolve('dist/404.html'))
  },
}

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback],
  base: '/Trumpet-Call-Ministries-/',
})
