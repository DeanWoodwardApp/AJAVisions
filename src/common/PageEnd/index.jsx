import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./style.module.scss"; // Adjust the path as needed

const index = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    });
  
    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const dynamicHeight = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    return (
        <div ref={container} className={styles.pageEnd}>
            <motion.div style={ dynamicHeight } className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    );
};

export default index
