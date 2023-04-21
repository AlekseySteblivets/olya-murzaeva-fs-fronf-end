import Head from "next/head";

import Layout from "../components/Layout";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    {/* <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Delius&family=Inter&family=Signika:wght@300;400;500;600&family=Source+Sans+Pro:wght@400;700&family=Source+Serif+Pro:wght@700&display=swap"
        rel="stylesheet"
      ></link>
    </Head> */}
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
