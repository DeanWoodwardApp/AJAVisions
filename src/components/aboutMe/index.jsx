'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import PageEnd from '../../common/PageEnd'

const projects = [
  {
    title: "If you’re reading this, hey;",
    src: "Aidan About photo.webp",
    desc: "I'm Aidan, founder of AJA Vision - a freelance videography. My passion is crafting high-quality, personalized videos that bring your vision to life. Welcome to a space where professionalism meets impactful storytelling.",
    color: "#000000"
  },
  {
    title: "Personal values",
    src: "Kaizen.webp",
    desc: "The Kaizen symbol is my compass for continuous improvement, both personally and professionally. Rooted in Japanese philosophy, it signifies my commitment to giving 100% in every endeavour. I believe in the power of 1% daily improvement, a principle that guides my approach to every aspect of life. Welcome to a space where the spirit of Kaizen fuels excellence.",
    color: "#8C8C8C"
  },
  {
    title: "Passion for editing ",
    src: "davinci-resolve.webp",
    desc: "I'm deeply passionate about video editing, treating it as the dynamic process of shaping a visual narrative in real time. I craft polished videos that tell compelling stories, leaving a lasting impression through extensive attention to detail.",
    color: "#8C8C8C"
  }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }

  return (
  <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
    <h1>About Me</h1>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} src={project.src} desc={project.desc} key={index}/>
        })
      }
    </div>
    {/* <Rounded>
      <p>More work</p>
    </Rounded> */}
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                  <img 
                    src={`/images/${src}`}
                    width="300"
                    height="auto"
                    controls
                  />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>

  <PageEnd />

  </main>
  )
}
