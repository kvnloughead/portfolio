import React from 'react';

// eslint-disable-next-line import/no-unresolved
import MDXDocument from '!babel-loader!@mdx-js/loader!../../../config/markdown/urlshortener.mdx';

import { Description } from './styles';

const ProjectInfo = () => {
  return (
    <Description>
      <MDXDocument />
    </Description>
  );
};

export default ProjectInfo;
