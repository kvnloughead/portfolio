import React from 'react';

import { Item, Icon, Label } from './styles';

const Skill = ({ data }) => (
  <Item>
    {data.icon ? (
      <Icon icon={data.icon} />
    ) : (
      <img alt={`${data.name} icon`} src={data.src} />
    )}
    <Label>{data.name}</Label>
  </Item>
);

export default Skill;
