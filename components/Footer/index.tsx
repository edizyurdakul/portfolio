import { useTheme } from "next-themes";

function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex justify-start space-x-32 pt-32 pb-8">
      <ul className="flex flex-col space-y-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <ul className="flex flex-col space-y-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          toggle
        </button>
      </div>
    </header>
  );
}

export default Footer;
