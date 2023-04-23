// import { Route, Routes, Navigate } from "react-router-dom";
// import { useMatches } from "react-router-dom";

import Container from "../../components/Container";
// import Navigation from "../../components/Navigation";
import LayoutSection from "../../views/LayoutSection";
import Hero from "../../components/Hero";

import styles from "./PreviewPage.module.scss";
import NewWorks from "../../components/NewWorks/NewWorks";
import Portpholio from "../../components/Portpholio/Portpholio";
import AboutMe from "../../components/AboutMe";

// const pageViews = [
//   {
//     // component: Hero,
//     idSection: "hero",
//   },
//   {
//     // component: Portfolio,
//     idSection: "portfolio",
//   },

// ];

export default function PreviewPage() {
  // console.log("this.props", this.props);

  return (
    <>
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
}

// {pageViews.map(view => (
//   <LayoutSection key={view.idSection} id={view.idSection}>
//     <Container>
//       <view.component />
//     </Container>
//   </LayoutSection>
// ))}
