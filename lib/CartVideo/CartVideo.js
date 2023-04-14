import fotoWedding from "../../assets/img/price/wedding-image360.jpg";
import styles from "./CartVideo.module.scss";

export default function CartVideo() {
  return (
    <>
      <li className={styles.item}>
        <img src={fotoWedding} alt="some foto" className={styles.image} />
        <h4 className={styles.itemTitle}> name</h4>
      </li>
    </>
  );
}
