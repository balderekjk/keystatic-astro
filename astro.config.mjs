import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import markdocConfig from './markdoc.config.mjs';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc({
    config: markdocConfig
  }), keystatic(), tailwind()],
  output: 'hybrid'
});