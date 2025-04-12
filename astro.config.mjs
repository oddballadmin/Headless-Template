import { defineConfig } from 'astro/config';
// @ts-ignore
import partytown from '@astrojs/partytown';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  integrations: [partytown({ config: { forward: ['dataLayer.push'] } })],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
});