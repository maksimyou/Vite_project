import React from "react";
import styles from "./ButtonCards.module.scss";
function ButtonCards({ text }) {
    return (
        <div className={styles.button}>
            <span className={styles.icon_style + " icon-bag_iconsvg"}></span>
            <span className={styles.textt}>{text}</span>
        </div>
    );
}

export default ButtonCards;
