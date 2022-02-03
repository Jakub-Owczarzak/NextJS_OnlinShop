import React from 'react';
import Link from "next/link"
import navStyles from "../styles/Nav.module.css"


const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/"> Products</Link>
                </li>
                <li>
                    <Link href="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;
