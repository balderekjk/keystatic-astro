import { config, fields, collection } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../src/assets/images/posts/',
            },
          },
          components: {
            imageWithCaption: block({
              label: 'Image with Caption',
              schema: {
                src: fields.image({
                  label: 'Image',
                  directory: 'src/assets/images/posts',
                  publicPath: '../src/assets/images/posts/',
                  validation: { isRequired: true },
                }),
                alt: fields.text({
                  label: 'Alt Text',
                  validation: { isRequired: true },
                }),
                caption: fields.text({ label: 'Caption' }),
                float: fields.select({
                  label: 'Float',
                  options: [
                    { label: 'None', value: 'none' },
                    { label: 'Left', value: 'left' },
                    { label: 'Right', value: 'right' },
                  ],
                  defaultValue: 'none',
                }),
                width: fields.text({
                  label: 'Width',
                }),
                height: fields.text({
                  label: 'Height',
                }),
              },
            }),
          },
        }),
      },
    }),
  },
});
