import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Works from "../components/Works";
import { hero, details } from "../data";
import NextHead from "next/head";
import NextLink from "next/link";

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
      <main className="py-32">
        <section>
          <h1 className="font-bold text-5xl">{title}</h1>
          <p className="font-normal">{subTitle}</p>
          <p className="font-normal text-zinc-900  dark:text-zinc-300 pt-4 sm:w-[55ch] w-[100%] mb-4">
            {description}
          </p>
          <NextLink href="/resume">
            <a className="mt-8">
              <span className="button text-zinc-50 ">
                <span className="button-background"></span>
                <span className="button-text transition-all ease-in-out border border-zinc-900 hover:border hover:border-zinc-50">
                  Resume
                </span>
              </span>
            </a>
          </NextLink>
        </section>
        <section className="pt-32">
          <h2 className="font-bold text-3xl mb-4">About Me</h2>
          <p className="font-normal mb-2">
            Hello! I’m a frontend developer based in Cape Town, South Africa
            specialized in front end development, using modern technologies such
            as React, Next.JS , Gatsby.JS, and more.
          </p>
          <p className="font-normal">
            Proficient in a wide range of development and testing tools as well
            as version control tools. A continuous learner, keeping up with new
            technologies and changes to languages and frameworks such as React
            18, Next. JS 12.
          </p>
        </section>
        <section className="pt-32">
          <h2 className="font-bold text-3xl mb-4 ">Featured Work</h2>
          <Works />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
