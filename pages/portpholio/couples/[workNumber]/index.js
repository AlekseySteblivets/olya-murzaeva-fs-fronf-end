import Head from "next/head";
import CartWorkPortpholio from "../../../../lib/CartWorkPortpholio";

// import CartWorkPortpholio from "@/lib/CartWorkPortpholio/CartWorkPortpholio";
import styles from "../../../../styles/workNumber.module.scss";
import LayoutSection from "@/views/LayoutSection/LayoutSection";
import Container from "@/components/Container/Container";

export default function WorkNumber() {
  return (
    <>
      <Head>
        <title> Photo work of couples </title>
      </Head>

      <LayoutSection id="couples" classNameProps={styles.portpholioList}>
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
