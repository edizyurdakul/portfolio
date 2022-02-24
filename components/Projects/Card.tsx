import NextLink from "next/link";

type Project = {
  project: {
    id: number;
    name: string;
    stack: string[];
    description: string;
    live: string;
    github: string;
  };
};

function Card({ project }: Project) {
  return (
    <div className="py-2 border-b-zinc-700 border-b-[1px] transition-all ease-in-out hover:scale-[101%]">
      <h3 className="text-lg font-medium mb-2">{project.name}</h3>
      <p className="font-normal text-zinc-700  dark:text-zinc-400">
        {project.description}
      </p>
      <div className="flex space-x-2 mt-2">
        {project.github != "" ? (
          <a
            rel="noopener noreferrer"
            className="px-2 py-1 dark:text-zinc-50 dark:bg-zinc-800 dark:border-zinc-900 hover:dark:border-zinc-50 transition-all ease-in-out text-zinc-900 hover:border-zinc-900 border border-zinc-200 bg-zinc-200 rounded-[4px] min-w-[120px] w-fit flex justify-center"
            target="_blank"
            href={project.github}
          >
            GitHub
          </a>
        ) : null}
        {project.live != "" ? (
          <a
            rel="noopener noreferrer"
            className="px-2 py-1 dark:text-zinc-50 dark:bg-zinc-800 dark:border-zinc-900 hover:dark:border-zinc-50 transition-all ease-in-out text-zinc-900 hover:border-zinc-900 border border-zinc-200 bg-zinc-200 rounded-[4px] min-w-[120px] w-fit flex justify-center"
            target="_blank"
            href={project.live}
          >
            Live
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
