// components/Typewriter.js

import styles from '../styles/Typewriter.module.css';

const Typewriter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.typewriter}>
        <div className={styles.slide}><i></i></div>
        <div className={styles.paper}></div>
        <div className={styles.keyboard}></div>
      </div>
    </div>
  );
};

export default Typewriter;
