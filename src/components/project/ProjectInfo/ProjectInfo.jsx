/* eslint-disable import/no-unresolved */
import React from 'react';

import { Description } from './styles';

// TODO - figure out less sucky way to handle dynamic imports
const Components = {};
Components.URLShortener =
  require('!babel-loader!@mdx-js/loader!../../../config/markdown/urlshortener.mdx').default;
Components.Timestamper =
  require('!babel-loader!@mdx-js/loader!../../../config/markdown/timestamp.mdx').default;
Components.HeaderParser =
  require('!babel-loader!@mdx-js/loader!../../../config/markdown/header-parser.mdx').default;
Components.FileAnalyzer =
  require('!babel-loader!@mdx-js/loader!../../../config/markdown/file-analyzer.mdx').default;

const ProjectInfo = ({ data }) => {
  const MDXDocument = Components[data.slug];
  return (
    <Description>
      <MDXDocument />
    </Description>
  );
};

export default ProjectInfo;
