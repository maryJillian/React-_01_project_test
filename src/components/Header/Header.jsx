import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://www.macmyday.com/wp-content/uploads/2015/02/apple-logo-black-300x300.jpg'></img>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login
          : <NavLink to={'/login'}>Login</NavLink>
        }

      </div>
    </header>
  );
}

export default Header;