'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import PageEnd from '../../common/PageEnd'

const projects = [
  {
    title: "Mental Health Documentary",
    src: "Example 4.mp4",
    desc: "Embark on a powerful journey surrounding men's mental health issues: Men's perspective on Mental Health,' a transformative documentary challenging stereotypes around masculinity. Through candid interviews and poignant storytelling, it sheds light on the unique challenges faced by men in the UK. Join us in fostering open conversations, breaking the silence, and embracing vulnerability. More than a film, it's a personal call to action for a compassionate UK that prioritizes men's mental health. ",
    color: "#000000"
  },
  {
    title: "Strive Barbers",
    src: "Example 2.mp4",
    desc: "I had the privilege of collaborating with Strive, a distinguished local blend: barber & tattoo. Together we crafted a concise yet impactful promotional video. This project served as an invaluable opportunity for me to refine my skills in video production. ",
    color: "#8C8C8C"
  },
  {
    title: "Peninsula Football",
    src: "Zac video 1.mp4",
    desc: "In my recent collaboration with a dynamic coaching establishment, our primary focus revolves around strategically enhancing their online presence. The objective is twofold: boosting viewership and methodically spotlighting the outstanding coaching expertise they offer.",
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
  <div>
  <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
    <t1>I’m so glad that you are here. Explore a collection of movement, colour and life throughout;</t1>
    <h1>My Gallery</h1>
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
                  <video 
                    src={`/videos/${src}`}
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

  </main>

  <PageEnd />
  </div>

  )
}
