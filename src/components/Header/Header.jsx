import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://www.macmyday.com/wp-content/uploads/2015/02/apple-logo-black-300x300.jpg'></img>
        </header>
    );
}

export default Header;