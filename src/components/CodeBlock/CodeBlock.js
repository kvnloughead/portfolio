/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/vsDark';

const codeBlockStyles = {
  display: 'block',
  borderRadius: '5px',
  padding: '20px 20px 0 20px',
  overflow: 'auto',
  maxWidth: '90%',
};

export default ({ children, className }) => {
  const language = className.replace(/language-/, '');

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={dracula}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, ...codeBlockStyles }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
