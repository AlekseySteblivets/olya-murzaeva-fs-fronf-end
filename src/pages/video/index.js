import Head from "next/head";

import Container from "../../components/Container";
import VideoPortpholio from "../../components/VideoPortpholio";
import LayoutSection from "../../views/LayoutSection";

import styles from "../../styles/Video.module.scss";

export default function Video() {
  return (
    <>
      <Head>
        <title>Video</title>
      </Head>
      <LayoutSection id="VideoPage" classNameProps={styles.videoPage}>
        <Container>
          <VideoPortpholio />
        </Container>
      </LayoutSection>
    </>
  );
}
