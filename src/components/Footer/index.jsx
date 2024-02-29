import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const handleEmailClick = () => {
    window.location.href = `mailto:AJAVisions@mail.com?subject=General Interest`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+447999039535`;
  };  

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/profile.php?id=100094991972556', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/direct/t/17844959589023407', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/aidan-anderson-2237a8193/', '_blank');
  };


  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/Aidan Home photo.webp`} />
            </div>
            <h2>Let us</h2>
          </span>
          <h2>collaborate</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#005B4C"} className={styles.button} href='/contact'>
              <p>Get in touch</p>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded onClick={handleEmailClick}>
            <p>Email</p>
          </Rounded>
          <Rounded onClick={handlePhoneClick}>
            <p>Phone</p>
        </Rounded>
        <Rounded onClick={handleFacebookClick}>
          <p>Facebook</p>
        </Rounded>
        <Rounded onClick={handleInstagramClick}>
          <p>Instagram</p>
        </Rounded>
        <Rounded onClick={handleLinkedInClick}>
          <p>LinkedIn</p>
        </Rounded>
        </div>
        <div className={styles.logoContainer}>
          <Image
            src="/images/AJA Visions Logo.webp"
            alt="Aidan's Logo"
            width={200} // Adjust the size as needed
            height={100}
            objectFit="contain" // This keeps the aspect ratio of the image
          />
        </div>
      </div>
    </motion.div>
  );
}
