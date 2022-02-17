import { useTheme } from "next-themes";
import NextLink from "next/link";
import { useRouter } from "next/router";

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <li className="dark:text-zinc-400 w-fit text-zinc-600 p-2 transition-all ease-in-out rounded-md dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900">
      <NextLink href={href} passHref>
        <a>{text}</a>
      </NextLink>
    </li>
  );
}
function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <hr className="pb-8 border-zinc-700" />
      <footer className="flex space-x-8">
        <ul className="flex flex-col space-y-4">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/contact" text="Contact" />
        </ul>
        <ul className="flex flex-col space-y-4">
          <li className="dark:text-zinc-400 w-fit text-zinc-600 p-2 transition-all ease-in-out rounded-md dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900">
            <NextLink href="https://github.com" passHref>
              <a>GitHub</a>
            </NextLink>
          </li>
          <li className="dark:text-zinc-400 w-fit text-zinc-600 p-2 transition-all ease-in-out rounded-md dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900">
            <NextLink href="https://github.com" passHref>
              <a>LinkedIn</a>
            </NextLink>
          </li>
          <li className="dark:text-zinc-400 w-fit text-zinc-600 p-2 transition-all ease-in-out rounded-md dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900">
            <NextLink href="https://github.com" passHref>
              <a>Twitter</a>
            </NextLink>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
