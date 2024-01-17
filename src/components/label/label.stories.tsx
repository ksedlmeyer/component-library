import { Story } from '@storybook/react';
import { Label } from '.';
import { Args } from '../../utils/helpers';
import { DefaultExclude } from '../../utils/helpers/storyArgs/defaultExclude';

export default {
  title: 'Completed/Label',
  component: Label,
  parameters: {
    controls: { expanded: true },
    docs: { inlineStories: false, iframeHeight: 600 }
  },
  args: {
    label: 'Label'
  },
  argTypes: {
    ...Args
  }
};

const textExcludeDefault = [
  'accentPalette',
  'accentPaletteStop',
  'fontSize',
  'disabled',
  'defaultPalette',
  'defaultPaletteStop',
  'fillPalette',
  'fillPaletteStop',
  'type',
  'href',
  'boxShadow',
  'boxShadowPalette',
  'boxShadowPaletteStop',
  'bgPalette',
  'bgPaletteStop',
  'dropShadow',
  'rounded',
  'shadow',
  'blend',
  'centerSelf',
  'margin',
  'bgPosition',
  'bgRepeat',
  'bgSize',
  'bgImage',
  'gridCols',
  'inset',
  'isLink',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'mixBlend',
  'padding',
  'verticalAlign',
  'width',
  'height',
  'spaceBetween',
  'innerRef',
  'ignoreMarkup',
  'text',
  'iconPalette',
  'iconPaletteStop',
  'textIndent',
  'textOverflow',
  'whitespace'
];

export const Default: Story = (args) => <Label {...args} />;
Default.parameters = {
  controls: {
    sort: 'alpha',
    exclude: [...DefaultExclude, ...textExcludeDefault]
  }
};
Default.args = {};

export const ProgressLabel = Default.bind({});
ProgressLabel.parameters = {
  controls: {
    sort: 'alpha',
    exclude: [...DefaultExclude, ...textExcludeDefault]
  }
};
ProgressLabel.args = {
  visualProgressRadial: true,
  showProgress: true
};

export const ContextValue = Default.bind({});
ContextValue.parameters = {
  controls: {
    sort: 'alpha',
    exclude: [...DefaultExclude, ...textExcludeDefault]
  }
};
ContextValue.args = {
  leadingIcon:
    '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>'
};

export const HeroIcon = Default.bind({});
HeroIcon.parameters = {
  controls: {
    sort: 'alpha',
    exclude: [...DefaultExclude, ...textExcludeDefault]
  }
};
HeroIcon.args = {
  trailingIconType: 'outline',
  trailingIcon: 'StarIcon',
  strokePalette: 'primary',
  strokePaletteStop: 500
};

export const ToolTip = Default.bind({});
ToolTip.parameters = {
  controls: {
    sort: 'alpha',
    exclude: [...DefaultExclude, ...textExcludeDefault]
  }
};
ToolTip.args = {
  tip: 'This is a cool tooltip!'
};
