import NextLink from "next/link";

type Work = {
  work: {
    id: number;
    name: string;
    stack: string[];
    description: string;
    live: string;
    github: string;
  };
};

function Card({ work }: Work) {
  return (
    <div className="p-8 dark:bg-zinc-800 rounded-[4px] bg-zinc-100 shadow-sm hover:shadow-lg transition-all ease-in-out hover:scale-[101%]">
      {work.stack.length <= 0 ? null : (
        <div className="flex space-x-2 mb-2 text-zinc-50">
          {work.stack.map((skill, i) => (
            <div className="bg-zinc-900 p-1 text-xs rounded-md" key={i}>
              {skill}
            </div>
          ))}
        </div>
      )}

      <h3 className="text-xl font-medium">{work.name}</h3>
      <p className="font-light my-2">{work.description}</p>
      <div className="flex space-x-2 mt-2">
        {work.github != "" ? (
          <a
            rel="noopener noreferrer"
            className="px-2 py-1 dark:text-zinc-50 dark:bg-zinc-900 dark:border-zinc-900 hover:dark:border-zinc-50 transition-all ease-in-out text-zinc-900 hover:border-zinc-900 border border-zinc-200 bg-zinc-200 rounded-[4px] min-w-[120px] w-fit flex justify-center"
            target="_blank"
            href={work.github}
          >
            GitHub
          </a>
        ) : null}
        {work.live != "" ? (
          <a
            rel="noopener noreferrer"
            className="px-2 py-1 dark:text-zinc-50 dark:bg-zinc-900 dark:border-zinc-900 hover:dark:border-zinc-50 transition-all ease-in-out text-zinc-900 hover:border-zinc-900 border border-zinc-200 bg-zinc-200 rounded-[4px] min-w-[120px] w-fit flex justify-center"
            target="_blank"
            href={work.live}
          >
            Live
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
