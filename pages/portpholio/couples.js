import Head from "next/head";

import PortpholioItem from "../../components/PortpholioItem";
import Container from "../../components/Container";
import LayoutSection from "../../views/LayoutSection";

import styles from "../../styles/PortpholioList.module.scss";

export default function Couples() {
  return (
    <>
      <Head>
        <title> Portpholio couples</title>
      </Head>

      <LayoutSection id="couples" classNameProps={styles.portpholioList}>
        <Container>
          <PortpholioItem namePortpholio="couples" />
        </Container>
      </LayoutSection>
    </>
  );
}
