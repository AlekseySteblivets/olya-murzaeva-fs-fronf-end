import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";

import fotoWedding from "../../public/img/price/wedding-image360.jpg";

import styles from "./CartWorkPortpholio.module.scss";

export default function CartWorkPortpholio({ photo = "qwe" }) {
  const { pathname, query } = useRouter();

  // console.log("query", query);
  // console.log("pathname", pathname);

  return (
    <>
      <li>
        <Link href={`${pathname}/${photo}`}>
          <Image
            src={fotoWedding}
            alt="some foto"
            className={styles.image}
            placeholder="blur"
          ></Image>
        </Link>
      </li>
    </>
  );
}
