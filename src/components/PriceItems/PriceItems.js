import Image from "next/image";

import fotoWedding from "../../../public/img/price/wedding-image360.jpg";
import fotoFamily from "../../../public/img/price/family-image360.jpg";
import fotoCouples from "../../../public/img/price/couples-image360.jpg";
// import fotoPortrait from "../../assets/img/price/family-image360.jpg";

import styles from "./PriceItems.module.scss";

export default function PriceItems() {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>price</h2>
      <div className={styles.blockWedding}>
        <h3 className={styles.titleMenu}>wedding</h3>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <h4 className={styles.itemTitle}> 3 hour</h4>
            <Image src={fotoWedding} alt="wedding foto " placeholder="blur" />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo li gula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturienmontes, nascetur ridi culus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            {/* <button type="button" className={styles.button}>
              read more
            </button> */}
          </li>
          <li className={styles.item}>
            <h4 className={styles.itemTitle}> 8 hour</h4>
            <Image src={fotoWedding} alt="wedding foto " placeholder="blur" />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo li gula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturienmontes, nascetur ridi culus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            {/* <button type="button" className={styles.button}>
              read more
            </button> */}
          </li>
          <li className={styles.item}>
            <h4 className={styles.itemTitle}> 12 hour</h4>
            <Image src={fotoWedding} alt="wedding foto " placeholder="blur" />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo li gula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturienmontes, nascetur ridi culus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            {/* <button type="button" className={styles.button}>
              read more
            </button> */}
          </li>
        </ul>
      </div>

      <div className={styles.blockOtherPhotos}>
        <div className={styles.blockWedding}>
          <h3 className={styles.titleMenu}>family</h3>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Image src={fotoFamily} alt="wedding foto " placeholder="blur" />
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo li gula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturienmontes, nascetur ridi culus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              {/* <button type="button" className={styles.button}>
                read more
              </button> */}
            </li>
          </ul>
        </div>

        <div className={styles.blockWedding}>
          <h3 className={styles.titleMenu}>couples</h3>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Image src={fotoCouples} alt="wedding foto " placeholder="blur" />
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo li gula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturienmontes, nascetur ridi culus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              {/* <button type="button" className={styles.button}>
                read more
              </button> */}
            </li>
          </ul>
        </div>
        <div className={styles.blockWedding}>
          <h3 className={styles.titleMenu}>portrait</h3>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Image src={fotoCouples} alt="wedding foto " placeholder="blur" />
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo li gula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturienmontes, nascetur ridi culus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              {/* <button type="button" className={styles.button}>
                read more
              </button> */}
            </li>
          </ul>
        </div>
      </div>

      <p className={styles.textFinal}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        li gula eget dolor. Aenean massa.
      </p>
    </div>
  );
}
