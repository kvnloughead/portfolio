import React from 'react';
import './layout.css';

import { colors } from '../../utils/constants';

export default function Layout({ children }) {
  return <div style={{ background: colors.darkColor }}>{children}</div>;
}
