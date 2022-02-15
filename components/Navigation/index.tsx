import { useTheme } from "next-themes";

function Navigation() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between pt-8 pb-32">
      <ul className="flex space-x-4">
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
    </div>
  );
}

export default Navigation;
