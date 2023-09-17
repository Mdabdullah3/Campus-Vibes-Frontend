import RootLayout from '@/components/layout/RootLayout';
import Head from 'next/head';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="Home" content="this page in created by next js" />
      </Head>

    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
