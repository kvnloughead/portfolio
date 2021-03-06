import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@mui/material/styles';

import reportWebVitals from './reportWebVitals';

import App from './components/app/app';
import CodeBlock from './components/CodeBlock/CodeBlock';
import './index.css';
import theme from './utils/themes/material-ui';

import {
  Anchor,
  InlineCode,
  Paragraph,
  Heading,
} from './components/shared/shared';

const components = {
  p: Paragraph,
  inlineCode: InlineCode,
  code: CodeBlock,
  a: Anchor,
  h4: Heading,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MDXProvider components={components}>
          <App />
        </MDXProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
