import styles from "./ContactData.module.scss";

export default function ContactData() {
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <a className={styles.tel} href="tel+380990078923">
            +38 099 007 8923
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
            className={styles.linkViber}
            href="https://web.viber.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
          </a>
        </li>
      </ul>
    </>
  );
}
