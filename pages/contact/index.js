import Head from "next/head";

import Contact from "../../components/ContactWithMe";
import Container from "../../components/Container";
import LayoutSection from "../../views/LayoutSection";

import styles from "../../styles/Contact.module.scss";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <LayoutSection id="contact" classNameProps={styles.contact}>
        <Container>
          <Contact />
        </Container>
      </LayoutSection>
    </>
  );
}
