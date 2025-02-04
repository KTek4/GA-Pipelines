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
    // Going to attempt to replace this Localhost address with the mongodb address
    // baseUrl: 'http://localhost:3001',
    baseUrl: 'https://api.render.com/deploy/srv-cug2n41opnds73bd2uh0?key=x9avBADtU9c',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
