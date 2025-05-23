import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.glb'],
    server : {
      host : '0.0.0.0',
      port : 3000,
      allowedHosts: ['fireonex.com', 'www.fireonex.com'],
    }
});
