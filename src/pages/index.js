// import AboutMe from "@/components/AboutMe/AboutMe";
// import Container from "@/components/Container/Container";
// import Hero from "@/components/Hero/Hero";
// import NewWorks from "@/components/NewWorks/NewWorks";
// import Portpholio from "@/components/Portpholio/Portpholio";
// import LayoutSection from "@/views/LayoutSection/LayoutSection";
import Head from "next/head";

import LayoutSection from "../views/LayoutSection";
import Container from "../components/Container";
import Hero from "../components/Hero";
import NewWorks from "../components/NewWorks";
import Portpholio from "../components/Portpholio";
import AboutMe from "../components/AboutMe";

import cn from "classnames";

import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <LayoutSection id="hero" classNameProps={styles.hero}>
        <Container>
          <Hero />
        </Container>
      </LayoutSection>

      <LayoutSection id="newWorks">
        <Container>
          <NewWorks />
        </Container>
      </LayoutSection>

      <LayoutSection id="portpholio" classNameProps={styles.hero}>
        <Container>
          <Portpholio />
        </Container>
      </LayoutSection>

      <LayoutSection id="aboutMe">
        <Container>
          <AboutMe />
        </Container>
      </LayoutSection>
    </>
  );
};
export default Home;
