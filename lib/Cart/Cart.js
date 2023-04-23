import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import fotoWedding from "../../public/img/price/wedding-image360.jpg";

import styles from "./Cart.module.scss";

export default function Cart({ workNumber, namePortpholio }) {
  const { pathname, query } = useRouter();
  // console.log("pathnameCart", pathname);
  // console.log("queryCart", query);
  return (
    <>
      <li className={styles.item}>
        <Link
          href={`${pathname}/[${workNumber}]`}

          // href={{

          //   pathname: `/portpholio/[${namePortpholio}]/[${workNumber}]`,
          //   query: {
          //     namePortpholio: { namePortpholio },
          //     workNumber: { workNumber },
          //   },
          // }}
        >
          <Image
            src={fotoWedding}
            alt="some foto"
            className={styles.image}
            placeholder="blur"
          />
        </Link>

        <h4 className={styles.itemTitle}> name</h4>
      </li>
    </>
  );
}
