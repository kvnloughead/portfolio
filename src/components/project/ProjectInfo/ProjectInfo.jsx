/* eslint-disable import/no-unresolved */
import React from 'react';

import { Description } from './styles';

// "Dynamic" imports handled in a rather sucky way, sorry about that.

const Components = {};
// add each project to the Components object, using the project's id as
// the hash, and supplying the appropriate filepath.
// No, I don't recall how this works.
Components.IsometricTurf =
  require('!babel-loader!@mdx-js/loader!../../../config/markdown/isometric-turf.mdx').default;

const ProjectInfo = ({ data }) => {
  const MDXDocument = Components[data.id];
  return (
    <Description>
      <MDXDocument />
    </Description>
  );
};

export default ProjectInfo;
