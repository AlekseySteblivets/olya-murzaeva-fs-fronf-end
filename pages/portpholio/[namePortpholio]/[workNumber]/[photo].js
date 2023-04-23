import Head from "next/head";
import Image from "next/image";

import Container from "@/components/Container/Container";
import LayoutSection from "@/views/LayoutSection/LayoutSection";

import someFoto from "../../../../public/img/hero768.jpg";

import styles from "../../../../styles/PortpholioList.module.scss";

export default function Photo() {
  return (
    <>
      <Head>
        <title> Photo </title>
      </Head>

      <LayoutSection id="couples" classNameProps={styles.portpholioList}>
        <Container>
          <Image src={someFoto} placeholder="blur" alt="some foto" />
        </Container>
      </LayoutSection>
    </>
  );
}
