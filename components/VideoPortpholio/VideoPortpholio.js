import Image from "next/image";

import CartVideo from "../../lib/CartVideo";

import fotoWedding from "../../public/img/price/wedding-image360.jpg";

import styles from "./VideoPortpholio.module.scss";

export default function VideoPortpholio() {
  return (
    <>
      <div className={styles.blockTitleVideo}>
        <h2 className={styles.title}>FILMS about your real life </h2>
        <p className={styles.text}>
          Each movie is your special life story that inspires you to be even
          happier
        </p>
        <Image
          src={fotoWedding}
          alt="some foto"
          placeholder="blur"
          className={styles.titleVideo}
        />
      </div>
      <div className={styles.blockOfPortfolio}>
        <h3 className={styles.titleBlockPortfolio}>Family</h3>
        <ul className={styles.menu}>
          <CartVideo />
          <CartVideo />
        </ul>
      </div>
      <div className={styles.blockOfPortfolio}>
        <h3 className={styles.titleBlockPortfolio}>Couples</h3>
        <ul className={styles.menu}>
          <CartVideo />
          <CartVideo />
        </ul>
      </div>
      <div className={styles.blockOfPortfolio}>
        <h3 className={styles.titleBlockPortfolio}>Short films</h3>
        <ul className={styles.menu}>
          <CartVideo />
          <CartVideo />
        </ul>
      </div>
      <p className={styles.textAboutWatchVideo}>
        You can watch all the movies on my YouTube channel
      </p>

      <a
        className={styles.linkYouTube}
        href="https://www.youtube.com/channel/UCK6HVE5UvIK6j1B70vtHZzg"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
      </a>
    </>
  );
}
