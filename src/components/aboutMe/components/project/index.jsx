'use client';
import React from 'react'
import styles from './style.module.scss';

export default function Project({index, title, src, desc}) { // src parameter added

    return (
        <div className={styles.project}>
            <h2>{title}</h2>
            <img 
                src={`/images/${src}`} // Assuming videos are stored in public/videos
                width="100%" // Adjust width as needed
                height="auto"
                controls
            />
            <p>{desc}</p>
        </div>
    )
}
