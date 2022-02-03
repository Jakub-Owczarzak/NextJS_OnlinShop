import React from 'react';

import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>
                    NextJS
                </span>
                Online Shop
            </h1>
            <p className={headerStyles.description}>The things you desire.</p>
        </div>

    )
};



export default Header;
