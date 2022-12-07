import React from "react";
import styles from "../css/components/Footer.module.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className={styles.footer_con}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        devport.me <span>&#169; All right reserved</span>
      </motion.p>
      <p className={styles.to}>
        Thanks to{" "}
        <a
          href="https://mongodb.com"
          target="_blank"
          className={styles.to_link}
        >
          MongoDb
        </a>{" "}
        and{" "}
        <a href="https://dev.to" target="_blank" className={styles.to_link}>
          Dev.to
        </a>
      </p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Made with 💖 by{" "}
        <a href="https://twitter.com/utsavbhatrai007" target={"_blank"}>
          <span>&#64;utsav</span>
        </a>
      </motion.p>
    </div>
  );
};

export default Footer;
