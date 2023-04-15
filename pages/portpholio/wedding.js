import Head from "next/head";

import PortpholioItem from "../../components/PortpholioItem";
import Container from "../../components/Container";
import LayoutSection from "../../views/LayoutSection";

import styles from "../../styles/PortpholioList.module.scss";

export default function Wedding() {
  return (
    <>
      <Head>
        <title>Portpholio wedding</title>
      </Head>

      <LayoutSection id="wedding" classNameProps={styles.portpholioList}>
        <Container>
          <PortpholioItem namePortpholio="wedding" />
        </Container>
      </LayoutSection>
    </>
  );
}