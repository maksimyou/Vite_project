import React from "react";
import styles from "./ButtonSend.module.scss";

function ButtonSend(props) {
    return (
        <div className={styles.button}>
            <span>{props.text}</span>
        </div>
    );
}

export default ButtonSend;
