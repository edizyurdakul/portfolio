import type { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <h1 className="font-bold text-4xl flex justify-center">Hello World</h1>{" "}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        toggle
      </button>
    </>
  );
};

export default Home;
