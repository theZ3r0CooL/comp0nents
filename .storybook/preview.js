// import { themes } from '@storybook/theming';
// import { DocsContainer } from '@storybook/addon-docs';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
  },
  docs: {
    // container: DocsContainer,
    source: {
      excludeDecorators: true
    },
    // theme: themes.dark
  }
}
