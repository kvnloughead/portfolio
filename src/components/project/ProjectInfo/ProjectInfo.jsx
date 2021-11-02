/* eslint-disable import/no-unresolved */
import React from 'react';

import { Description } from './styles';

// TODO - figure out less sucky way to handle dynamic imports
const Components = {};
Components.URLShortener = require('!babel-loader!@mdx-js/loader!../../../config/markdown/urlshortener.mdx').default;
Components.Timestamper = require('!babel-loader!@mdx-js/loader!../../../config/markdown/timestamp.mdx').default;

const ProjectInfo = ({ data }) => {
  // eslint-disable-next-line no-debugger
  debugger;
  const MDXDocument = Components[data.slug];
  return (
    <Description>
      <MDXDocument />
    </Description>
  );
};

export default ProjectInfo;
