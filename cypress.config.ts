import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    // Going to attempt to replace this Localhost address with the mongodb address
    // baseUrl: 'https://api.render.com/deploy/srv-cug2n41opnds73bd2uh0?key=x9avBADtU9c',
    // Code exists with an error saying it can't find any of the spec files
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
