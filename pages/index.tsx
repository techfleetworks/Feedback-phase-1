import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useProducersQuery } from '../generated';
import { Navbar, Footer } from '../components';
// import EvaluationFormCheese from '../components/EvaluationFormCheese';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  const { data, error, loading } = useProducersQuery();

  if (loading) return <main className={styles.main}>Loading...</main>;
  if (error) return <main className={styles.main}>{error.message}</main>;

  // From here, { data } can be referenced
  return (
    <div>
      <Head>
        <title>Ruminate Feedback</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div>
        <Hero />
        {/* <div className="text-center">
          <h1>Hello, {data?.producers?.data[0].attributes?.name}</h1>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
