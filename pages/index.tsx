import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Header />
      <h1 className="font-bold text-4xl">Ediz Yurdakul</h1>
      <p className="font-extralight">Frontend Web Developer</p>
      <p className="font-extralight pt-4 sm:w-[55ch] w-[100%]">
        Hello! I’m a front-end developer based in Cape Town, South Africa. I
        spend most of my time learning more to develop my skills.
      </p>
      <Footer />
    </>
  );
};

export default Home;
