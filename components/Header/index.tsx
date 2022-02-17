import { Fragment } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <a
        className={
          isActive
            ? "dark:text-zinc-50 text-zinc-900 p-2 transition-all ease-in-out rounded-md dark:hover:bg-zinc-800 dark:hover:text-zinc-50 hover:bg-zinc-200"
            : "dark:text-zinc-400 text-zinc-600 p-2 transition-all ease-in-out rounded-md dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900"
        }
      >
        {text}
      </a>
    </NextLink>
  );
}

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* inspired by lee rob */}
      <a
        href="#content"
        aria-label="Skip to content"
        className="p-2 absolute top-[-25%] transition-all ease-in-out focus:top-[10%]"
      >
        Skip to content
      </a>
      {/* inspired by lee rob */}
      <header className="flex justify-between items-center pt-8">
        <div className="md:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                aria-label="Mobile menu"
                className="inline-flex justify-center p-2 text-zinc-900 bg-zinc-200 dark:text-zinc-50 dark:bg-zinc-800 rounded-md transition-all ease-in-out hover:ring-2 hover:ring-zinc-400 dark:hover:ring-2 dark:hover:ring-zinc-700"
              >
                <GiHamburgerMenu className="text-xl" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 origin-top-right bg-zinc-200 dark:text-zinc-50 dark:bg-zinc-800 rounded-md py-1">
                <div aria-label="Navigate to home page" className="px-1">
                  <Menu.Item as={"a"}>
                    {({ active }) => (
                      <NextLink href="/" passHref>
                        <a>
                          <button
                            className={`${
                              active
                                ? "bg-zinc-300 dark:bg-zinc-600 dark:text-zinc-50 text-zinc-900"
                                : "dark:text-zinc-400 text-zinc-500"
                            }   rounded-md px-2 py-2 w-[100%]`}
                          >
                            Home
                          </button>
                        </a>
                      </NextLink>
                    )}
                  </Menu.Item>
                </div>
                <div aria-label="Navigate to about page" className="px-1">
                  <Menu.Item as={"a"}>
                    {({ active }) => (
                      <NextLink href="/about" passHref>
                        <a>
                          <button
                            className={`${
                              active
                                ? "bg-zinc-300 dark:bg-zinc-600 dark:text-zinc-50 text-zinc-900"
                                : "dark:text-zinc-400 text-zinc-500"
                            }   rounded-md px-2 py-2 w-[100%]`}
                          >
                            About
                          </button>
                        </a>
                      </NextLink>
                    )}
                  </Menu.Item>
                </div>
                <div aria-label="Navigate to projects page" className="px-1">
                  <Menu.Item as={"a"}>
                    {({ active }) => (
                      <NextLink href="/projects" passHref>
                        <a>
                          <button
                            className={`${
                              active
                                ? "bg-zinc-300 dark:bg-zinc-600 dark:text-zinc-50 text-zinc-900"
                                : "dark:text-zinc-400 text-zinc-500"
                            }   rounded-md px-2 py-2 w-[100%]`}
                          >
                            Projects
                          </button>
                        </a>
                      </NextLink>
                    )}
                  </Menu.Item>
                </div>
                <div aria-label="Navigate to contact page" className="px-1">
                  <Menu.Item as={"a"}>
                    {({ active }) => (
                      <NextLink href="/contact" passHref>
                        <a>
                          <button
                            className={`${
                              active
                                ? "bg-zinc-300 dark:bg-zinc-600 dark:text-zinc-50 text-zinc-900"
                                : "dark:text-zinc-400 text-zinc-500"
                            }   rounded-md px-2 py-2 w-[100%]`}
                          >
                            Contact
                          </button>
                        </a>
                      </NextLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <NavItem href="/" text="Home" />
          </li>
          <li>
            <NavItem href="/about" text="About" />
          </li>
          <li>
            <NavItem href="/projects" text="Projects" />
          </li>
          <li>
            <NavItem href="/contact" text="Contact" />
          </li>
        </ul>
        <button
          className="bg-zinc-200 dark:bg-zinc-800 text-xl p-2 rounded-md transition-all ease-in-out hover:ring-2 hover:ring-zinc-400 dark:hover:ring-2 dark:hover:ring-zinc-700"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? <MdModeNight /> : <MdLightMode />}
        </button>
      </header>
    </>
  );
}

export default Header;
