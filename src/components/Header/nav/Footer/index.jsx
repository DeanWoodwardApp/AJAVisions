import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic';
import Image from 'next/image';

export default function index() {
  
  return (
    <div className={styles.logo}>
      <Image
        src="/images/AJA Visions Logo.webp"
        alt="Aidan's Logo"
        width={200} // Adjust the size as needed
        height={155}
        objectFit="contain" // This keeps the aspect ratio of the image
      />
    </div>
    
  )
}
