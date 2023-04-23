import Head from "next/head";
import CartWorkPortpholio from "../../../../lib/CartWorkPortpholio";
import { useRouter } from "next/router";

// import CartWorkPortpholio from "@/lib/CartWorkPortpholio/CartWorkPortpholio";
import styles from "../../../../styles/workNumber.module.scss";
import LayoutSection from "@/src/views/LayoutSection/LayoutSection";
import Container from "@/src/components/Container/Container";

export default function WorkNumber() {
  const location = useRouter();
  const { query } = useRouter();
  const { namePortpholio } = query;

  console.log("namePortpholioWN", namePortpholio);
  console.log("location", location);
  return (
    <>
      <Head>
        <title> Photo works of {namePortpholio} </title>
      </Head>

      <LayoutSection id={namePortpholio} classNameProps={styles.portpholioList}>
        <Container>
          <h3 className={styles.title}>name blabla</h3>
          <ul>
            <CartWorkPortpholio />
            <CartWorkPortpholio />
            <CartWorkPortpholio />
          </ul>
        </Container>
      </LayoutSection>
    </>
  );
}
