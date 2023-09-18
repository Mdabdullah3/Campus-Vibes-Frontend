import Banner from '@/components/Ui/Banner';
import Swap from '@/components/Ui/Swap';
import RootLayout from '@/components/layout/RootLayout';
import Head from 'next/head';
import React from 'react';
import About from './About';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="Home" content="this page in created by next js" />
      </Head>
      <Banner />
      <About />

    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
