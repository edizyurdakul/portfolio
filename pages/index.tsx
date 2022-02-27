import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Works from "../components/Works";
import Projects from "../components/Projects";
import { hero, details, about, experience } from "../data";
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

      <main id="#content" className="py-32">
        <section>
          <h1 className="font-bold text-5xl">{title}</h1>
          <p className="font-normal">{subTitle}</p>
          <p className="font-normal text-zinc-900  dark:text-zinc-300 pt-4 sm:w-[55ch] w-[100%] mb-4">
            {description}
          </p>
          <NextLink href="/resume.pdf">
            <a className="mt-8">
              <span className="button text-zinc-50">
                <span className="button-background"></span>
                <span className="button-text transition-all ease-in-out border border-zinc-900 hover:border hover:border-zinc-50">
                  Resume
                </span>
              </span>
            </a>
          </NextLink>
        </section>
        <section id="about" className="pt-32">
          <h2 className="font-bold text-3xl mb-4">{about.title}</h2>
          <p className="font-normal mb-2">{about.first_paragraph}</p>
          <p className="font-normal">{about.second_paragraph}</p>
        </section>
        <section id="work" className="pt-32">
          <h2 className="font-bold text-3xl mb-4 ">Featured Work</h2>
          <Works />
        </section>
        <section id="projects" className="pt-32">
          <h2 className="font-bold text-3xl mb-4 ">Projects</h2>
          <Projects />
        </section>
        <section id="experience" className="pt-32">
          <h2 className="font-bold text-3xl mb-4 ">Experience</h2>
          {experience.map((exp, i) => (
            <div key={i}>
              <div className="flex justify-between">
                <h3 className="text-lg">{exp.company}</h3>
                <p className="text-sm font-normal text-zinc-700  dark:text-zinc-400">
                  {exp.date}
                </p>
              </div>
              <p className="text-sm font-normal text-zinc-700  dark:text-zinc-400">
                {exp.job_title}
              </p>
            </div>
          ))}
        </section>
        <section id="skills" className="pt-32">
          <h2 className="font-bold text-3xl mb-4 ">Skills</h2>
          {details.skills.length <= 0 ? null : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {details.skills.map((skill, i) => (
                <div key={i}>
                  <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
                  <div>
                    {skill?.frameworks?.map((framework, index) => (
                      <p
                        className="font-normal text-zinc-700  dark:text-zinc-400"
                        key={index}
                      >
                        {framework}
                      </p>
                    ))}
                    {skill?.languages?.map((framework, index) => (
                      <p
                        className="font-normal text-zinc-700  dark:text-zinc-400"
                        key={index}
                      >
                        {framework}
                      </p>
                    ))}
                    {skill?.tools?.map((framework, index) => (
                      <p
                        className="font-normal text-zinc-700  dark:text-zinc-400"
                        key={index}
                      >
                        {framework}
                      </p>
                    ))}
                    {skill?.design?.map((framework, index) => (
                      <p
                        className="font-normal text-zinc-700  dark:text-zinc-400"
                        key={index}
                      >
                        {framework}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="contact" className="pt-32">
          <h2 className="font-bold text-3xl mb-4 ">Contact</h2>
          <p className="mb-4">
            I’m currently looking for any new opportunities
          </p>
          <a
            rel="noopener noreferrer"
            className="px-2 py-1 dark:text-zinc-50 dark:bg-zinc-800 dark:border-zinc-900 hover:dark:border-zinc-50 transition-all ease-in-out text-zinc-900 hover:border-zinc-900 border border-zinc-200 bg-zinc-200 rounded-[4px] min-w-[120px] w-fit flex justify-center"
            href="mailto:edizyurdakul@gmail.com"
          >
            Contact
          </a>
        </section>
      </main>
    </>
  );
};

export default Home;
