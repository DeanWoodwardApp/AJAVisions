import React from 'react';
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from '../Magnetic';
import { useRouter } from 'next/router'; // Import useRouter

export default function index({ children, backgroundColor = "#005B4C", onClick, href, ...attributes }) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
    timeline.current
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit")
  }, [])

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300)
  }

  // Combined click handler
  const handleClick = () => {
    if (href) {
      // Navigate if href is provided
      router.push(href);
    } else if (onClick) {
      // Execute onClick function if provided
      onClick();
    }
  }

  return (
    <Magnetic>
      <div className={styles.roundedButton} style={{ overflow: "hidden" }} onMouseEnter={manageMouseEnter} onMouseLeave={manageMouseLeave} onClick={handleClick} {...attributes}>
        {children}
        <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
      </div>
    </Magnetic>
  )
}
