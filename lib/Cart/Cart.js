import Image from "next/image";

import fotoWedding from "../../public/img/price/wedding-image360.jpg";

import styles from "./Cart.module.scss";

export default function Cart() {
  return (
    <>
      <li className={styles.item}>
        <Image
          src={fotoWedding}
          alt="some foto"
          className={styles.image}
          placeholder="blur"
        />
        <h4 className={styles.itemTitle}> name</h4>
      </li>
    </>
  );
}
