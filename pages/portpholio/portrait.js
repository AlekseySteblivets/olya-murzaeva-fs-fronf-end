import Head from "next/head";

import PortpholioItem from "../../components/PortpholioItem";
import Container from "../../components/Container";
import LayoutSection from "../../views/LayoutSection";

import styles from "../../styles/PortpholioList.module.scss";

export default function Portrait() {
  return (
    <>
      <Head>
        <title> Portpholio portrait</title>
      </Head>

      <LayoutSection id="couples" classNameProps={styles.portpholioList}>
        <Container>
          <PortpholioItem namePortpholio="portrait" />
        </Container>
      </LayoutSection>
    </>
  );
}
