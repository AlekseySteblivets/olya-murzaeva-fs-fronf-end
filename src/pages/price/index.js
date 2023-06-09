import Head from "next/head";

import Container from "../../components/Container";
import LayoutSection from "../../views/LayoutSection";
import PriceItems from "../../components/PriceItems";

import styles from "../../styles/Price.module.scss";

const Price = () => {
  return (
    <>
      <Head>
        <title>Price</title>
      </Head>
      <LayoutSection id="newWorks" classNameProps={styles.price}>
        <Container>
          <PriceItems />
        </Container>
      </LayoutSection>
    </>
  );
};
export default Price;
