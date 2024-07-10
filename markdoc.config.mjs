import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    imageWithCaption: {
      render: component('./src/components/ImageWithCaption.astro'),
      attributes: {
        src: { type: String, required: true },
        alt: { type: String, required: true },
        caption: { type: String },
        float: { type: String, default: 'none' },
        width: { type: String },
        height: { type: String },
      },
    },
  },
});
