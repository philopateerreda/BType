import { useState } from "react";
import styles from "./board.module.css";

const Board = () => {
    const [board, setBoard] = useState([]);

    return (
        <div className={styles.container}>
            <div className={styles.rectangle}>
                <div className={styles.stat}>Accuracy: 60%</div>
                <div className={styles.stat}>Speed: 50 WPM</div>
                <div className={styles.lifeBar}>
                    <div className={styles.lifeBarFill}></div>
                </div>
            </div>
            <div className={styles.octagon}>
                <div className={styles.content}>
                    <p>Monitoring interstellar activities and anomalies in Sector Alpha-9</p>
                    <p>Status: All systems operational</p>
                </div>
            </div>
            <div className={styles.rectangle}>
                <div className={styles.stat}>Accuracy: 60%</div>
                <div className={styles.stat}>Speed: 50 WPM</div>
                <div className={styles.lifeBar}>
                    <div className={styles.lifeBarFill}></div>
                </div>
            </div>
        </div>
    );
};

export default Board;
