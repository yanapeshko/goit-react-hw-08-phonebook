import { NavLink } from 'react-router-dom';

import items from './items';
import s from './Menu.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${s.link} ${s.active}` : s.link;
  return className;
};

const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={s.menu}>{elements}</ul>;
};

export default Menu;
