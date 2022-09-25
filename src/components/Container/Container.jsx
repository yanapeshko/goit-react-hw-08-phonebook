import s from './Container.module.css';

import React from 'react';

export default function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}
