
import React from "react";
import styles from "./Footer.module.css"
const Footer = () => {
    return <div className={`text-center text-white bottom-0 w-100 position-fixed bg-primary py-2 ${styles.footer}`}>&copy; belongs to me </div>
}

export default Footer