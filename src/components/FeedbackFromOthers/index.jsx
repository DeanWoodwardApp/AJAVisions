import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import styles from './style.module.scss';
import feedbacks from './dummyData.json'; // Import the feedback data from the JSON file

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const FeedbackFromOthers = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = wrap(0, feedbacks.reviews.length, page);

  return (
    <div className={styles.feedbackSection}>
        <h2 className={styles.feedbackTitle}>Don't just take my word, here is what other people have to say</h2>
        <div className={styles.carouselContainer}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 100, damping: 25, mass: 1 },
                    opacity: { duration: 0.5 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                    }
                }}
                className={styles.slide}
                >
                <div className={styles.feedbackContent}>
                    <img 
                    src={feedbacks.reviews[imageIndex].consumer.profileImage.image64x64.url} 
                    alt={feedbacks.reviews[imageIndex].consumer.displayName}
                    className={styles.profileImage}
                    />
                    <div className={styles.profileInfo}>
                        <p className={styles.consumerName}>{feedbacks.reviews[imageIndex].consumer.displayName}</p>
                        <p className={styles.businessName}>{feedbacks.reviews[imageIndex].businessUnit.displayName}</p>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.reviewText}>"{feedbacks.reviews[imageIndex].text}"</p>
                    </div>
                </div>
                </motion.div>
            </AnimatePresence>
            <div className={styles.next} onClick={() => paginate(1)}>
                {'‣'}
            </div>
            <div className={styles.prev} onClick={() => paginate(-1)}>
                {'‣'}
            </div>
        </div>
    </div>
  );
};

export default FeedbackFromOthers;
