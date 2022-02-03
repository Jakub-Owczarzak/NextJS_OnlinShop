import React from 'react';
import Header from '../components/Header'
import styles from '../styles/Layout.module.css'
import Meta from './Meta';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />

            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>

    )
};



export default Layout;
