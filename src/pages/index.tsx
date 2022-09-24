import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AlwaysHelp from "../Components/AlwaysHelpSection/AlwaysHelp";

import Header from "../Components/Header/Header";
import HeroSection from "../Components/HeroSection/HeroSection";
import OurWorkSection from "../Components/OurWorkSection/OurWorkSection";
import SpecialitySection from "../Components/SpecialitySection/SpecialitySection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <OurWorkSection />
      <AlwaysHelp />
      <SpecialitySection />
    </div>
  );
};

export default Home;
