import styles from "./SocialMedia.module.scss";

export default function SocialMedia({ children }) {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <a
          className={styles.linkInstagram}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.linkTelegram}
          href="https://web.telegram.org/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.linkFb}
          target="_blank"
          href="https://www.facebook.com/"
          rel="noreferrer"
        >
          {" "}
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.linkYouTube}
          href="https://www.youtube.com/channel/UCK6HVE5UvIK6j1B70vtHZzg"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
      </li>
      {children}
    </ul>
  );
}
