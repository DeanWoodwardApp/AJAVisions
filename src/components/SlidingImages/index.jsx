import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from '../../common/RoundedButton';
import PageEnd from '../../common/PageEnd';

const slider1 = [
  {
    color: "#e3e5e7",
    src: "SlidingImages 1.webp",
  },
  {
    color: "#d6d7dc",
    src: "SlidingImages 2.webp",
  },
  {
    color: "#e3e3e3",
    src: "SlidingImages 3.mp4",
    type: "video"
  },
  {
    color: "#21242b",
    src: "SlidingImages 4.webp",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "SlidingImages 5.webp",
  },
  {
    color: "#e5e0e1",
    src: "SlidingImages 6.webp",
  },
  {
    color: "#d7d4cf",
    src: "SlidingImages 7.webp",
  },
  {
    color: "#e1dad6",
    src: "SlidingImages 8.webp",
  },
];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const dynamicHeight = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
        return (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              {project.type === "video" ? (
                <video autoPlay loop muted playsInline>
                  <source src={`/videos/${project.src}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              )}
            </div>
          </div>
        );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      
      <Rounded className={styles.button} href='/gallery'>
        <p>View gallery</p>
      </Rounded>

    <PageEnd />

    </div>
  );
}
