module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
    '@storybook/preset-create-react-app',
    /*{
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }*/
  ],
  'core': {
    'builder': 'webpack5'
  },
  'framework': '@storybook/react'
}
