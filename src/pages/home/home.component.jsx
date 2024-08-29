import React from 'react';
import styles from './home.module.css';

const Home = () => {
    console.log("Home component is rendered");

    return (
        <div className={styles.page}>
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;
