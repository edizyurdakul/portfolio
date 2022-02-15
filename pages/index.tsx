import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Navigation />

      <h1 className="font-bold text-4xl">Hello World</h1>
    </>
  );
};

export default Home;
