import Link from "next/link";

import { portpholioList } from "../../utils/portpholioList";

import styles from "./Portpholio.module.scss";

export default function Portpholio() {
  return (
    <div className={styles.block}>
      <div className={styles.list}>
        <ul className={styles.menu}>
          {portpholioList.map((namePortpholio) => {
            return (
              <li key={namePortpholio} className={styles.item}>
                <Link href={`portpholio/${namePortpholio}`}>
                  {namePortpholio}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.blockFilm}>
          <Link href="/video">films</Link>
        </div>
        <div className={styles.linkPrice}>
          <Link href="/price">PRICE</Link>
        </div>
      </div>
      <div className={styles.bgFoto}></div>
    </div>
  );
}
