import Head from "next/head";
import { useRouter } from "next/router";

import PortpholioItem from "../../../components/PortpholioItem";
import Container from "../../../components/Container";
import LayoutSection from "../../../views/LayoutSection";

import styles from "../../../styles/PortpholioList.module.scss";

export default function Couples() {
  const { query } = useRouter();
  const { namePortpholio } = query;
  // console.log("pathnamePortpholio122", namePortpholio);

  return (
    <>
      <Head>
        <title> Portpholio {namePortpholio}</title>
      </Head>

      <LayoutSection id={namePortpholio} classNameProps={styles.portpholioList}>
        <Container>
          <PortpholioItem namePortpholio={namePortpholio} />
        </Container>
      </LayoutSection>
    </>
  );
}
