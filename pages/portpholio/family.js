import Head from "next/head";

import PortpholioItem from "../../components/PortpholioItem";
import Container from "../../components/Container";
import LayoutSection from "../../views/LayoutSection";

import styles from "../../styles/PortpholioList.module.scss";

export default function Family() {
  return (
    <>
      <Head>
        <title> Portpholio family</title>
      </Head>

      <LayoutSection id="couples" classNameProps={styles.portpholioList}>
        <Container>
          <PortpholioItem namePortpholio="family" />
        </Container>
      </LayoutSection>
    </>
  );
}
