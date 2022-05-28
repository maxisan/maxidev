import React from 'react';

export interface IMenuItem {
  name: string;
  href: string;
  icon: string;
}

const MenuItem:React.FC<IMenuItem> = () => (
  <div>MenuItem</div>
);

export default MenuItem;
