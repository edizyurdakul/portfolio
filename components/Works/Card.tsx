import NextLink from "next/link";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

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
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-zinc-900"
                >
                  This repository is private
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-zinc-500">
                    Due to client NDA, this repo is private, on request only.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="px-2 py-1 dark:text-zinc-50 dark:bg-zinc-900 dark:border-zinc-900 hover:dark:border-zinc-50 transition-all ease-in-out text-zinc-900 hover:border-zinc-900 border border-zinc-200 bg-zinc-200 rounded-[4px] min-w-[120px] w-fit flex justify-center"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <h3 className="text-xl font-medium">{work.name}</h3>
      <p className="font-light my-2">{work.description}</p>
      <div className="flex space-x-2 mt-2">
        {work.github !== "" && work.github !== "private" ? (
          <a
            rel="noopener noreferrer"
            className="px-2 py-1 dark:text-zinc-50 dark:bg-zinc-900 dark:border-zinc-900 hover:dark:border-zinc-50 transition-all ease-in-out text-zinc-900 hover:border-zinc-900 border border-zinc-200 bg-zinc-200 rounded-[4px] min-w-[120px] w-fit flex justify-center"
            target="_blank"
            href={work.github}
          >
            GitHub
          </a>
        ) : (
          <>
            <div
              onClick={openModal}
              className="px-2 py-1 cursor-pointer dark:text-zinc-50 dark:bg-zinc-900 dark:border-zinc-900 hover:dark:border-zinc-50 transition-all ease-in-out text-zinc-900 hover:border-zinc-900 border border-zinc-200 bg-zinc-200 rounded-[4px] min-w-[120px] w-fit flex justify-center"
            >
              GitHub
            </div>
          </>
        )}
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
