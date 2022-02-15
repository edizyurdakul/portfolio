import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Header />

      <h1 className="font-bold text-4xl">Hello World</h1>
      <Footer />
    </>
  );
};

export default Home;
