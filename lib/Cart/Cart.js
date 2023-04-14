import fotoWedding from "../../assets/img/price/wedding-image360.jpg";
import styles from "./Cart.module.scss";

export default function Cart() {
  return (
    <>
      <li className={styles.item}>
        <img src={fotoWedding} alt="some foto" className={styles.image} />
        <h4 className={styles.itemTitle}> name</h4>
      </li>
    </>
  );
}
