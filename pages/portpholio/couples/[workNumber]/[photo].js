import Head from "next/head";
import Image from "next/image";

import Container from "@/components/Container/Container";
import LayoutSection from "@/views/LayoutSection/LayoutSection";

import someFoto from "../../../../public/img/hero414.jpg";

export default function Photo() {
  return (
    <>
      <Head>
        <title> Photo couples </title>
      </Head>

      <LayoutSection id="couples">
        <Container>
          <Image
            src={someFoto}
            width={200}
            height={200}
            placeholder="blur"
            alt="some foto"
          />
        </Container>
      </LayoutSection>
    </>
  );
}
