import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { hero, details } from "../data";
import NextHead from "next/head";

const Home: NextPage = () => {
  const { title, subTitle, description } = hero;
  const { name } = details;

  return (
    <>
      <NextHead>
        <title>
          {title} - {subTitle}
        </title>
        <meta name="description" content={description} />
        <meta name="author" content={name} />
      </NextHead>
      <Header />
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="font-light">{subTitle}</p>
      <p className="font-light text-zinc-300 pt-4 sm:w-[55ch] w-[100%]">
        {description}
      </p>
      <Footer />
    </>
  );
};

export default Home;
