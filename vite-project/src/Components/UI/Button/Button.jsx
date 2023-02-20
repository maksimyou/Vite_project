import React from "react";
import styles from "./Button.module.scss";
function Button(props) {
    return (
        <div className={styles.button}>
            <span>{props.text}</span>
        </div>
    );
}

export default Button;
