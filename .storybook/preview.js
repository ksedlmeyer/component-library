import { DocsContainer } from './DocsContainer';
import '../src/index.scss';

export const parameters = {
  docs: {
    container: DocsContainer
  },
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ['Base', ['Image', 'Background'], ['Default', '*'], 'Input']
    }
  }
};
