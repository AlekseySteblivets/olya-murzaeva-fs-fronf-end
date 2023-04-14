import Image from "next/image";
import Link from "next/link";
import justFoto from "../../public/img/number1.jpg";

import styles from "./NewWorks.module.scss";

export default function NewWorks() {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>NEW WORKS</h2>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link href="/">
            <Image alt="foto" src={justFoto} placeholder="blur" />
          </Link>
          <h3 className={styles.nameWork}>name</h3>
          <p className={styles.data}>data</p>
        </li>
        <li className={styles.item}>
          <Link href="/">
            <Image alt="foto" src={justFoto} placeholder="blur" />
          </Link>
          <h3 className={styles.nameWork}>name</h3>
          <p className={styles.data}>data</p>
        </li>
      </ul>
    </div>
  );
}
