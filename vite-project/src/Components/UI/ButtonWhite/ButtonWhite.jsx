import React from "react";
import { Link } from "react-router-dom";
import styles from "./ButtonWhite.module.scss";
function ButtonWhite({ adress, text }) {
    return (
        <Link to={adress}>
            <div className={styles.button}>
                <span>{text}</span>
            </div>
        </Link>
    );
}

export default ButtonWhite;
