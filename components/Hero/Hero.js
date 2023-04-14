// import Button from '../../lib/Button/Button';

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.titleHero}>A B O U T   YOUR   L I F E</h1>
      <p className={styles.textHero}>photo & video</p>
    </div>
  );
}
