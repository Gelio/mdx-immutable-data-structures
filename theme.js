import { future as theme } from 'mdx-deck/themes';
import codeHighlightStyle from 'react-syntax-highlighter/styles/prism/tomorrow';
import prismTypescript from 'react-syntax-highlighter/languages/prism/typescript';
import prismTsx from 'react-syntax-highlighter/languages/prism/tsx';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';

export default {
  ...theme,
  prism: {
    style: codeHighlightStyle,
    languages: {
      typescript: prismTypescript,
      tsx: prismTsx,
    },
  },
  codeSurfer: {
    ...oceanicNext,
  },

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
