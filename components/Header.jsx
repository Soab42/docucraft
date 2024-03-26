import Image from "next/image";
import React from "react";
import Nav from "./Nav";

export default function Header({ docs }) {
  return (
    <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
      {/* <!-- Logo  --> */}
      <div className="hidden lg:flex">
        <a aria-label="Home" href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Protocol"
            height={100}
            width={100}
            className="h-6 w-auto"
          />
        </a>
      </div>
      {/* <!-- Logo Ends --> */}
      {/* <!-- Header --> */}
      <div className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
        <div className="container flex h-14 items-center justify-between gap-12">
          <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

          <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
            <button
              type="button"
              className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
            >
              <Image
                src="/assets/icons/search.svg"
                className="h-5 w-5"
                height={100}
                alt="search"
                width={100}
              />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 focus:border-none focus:outline-none"
              />
              <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
                <kbd className="font-sans">Ctrl </kbd>
                <kbd className="font-sans">K</kbd>
              </kbd>
            </button>
            {/* <!-- result card --> */}
            <div className="absolute left-0 top-12 z-[999] hidden w-full rounded-md bg-white p-4 shadow">
              <p className="!text-lg">
                Showing results for
                <span className="font-semibold">"keyword":</span>
              </p>
              <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
                <li className="">
                  <a className="transition-all hover:text-emerald-600" href="#">
                    How to create a new component in Vue.js
                  </a>
                </li>
                <li className="">
                  <a className="transition-all hover:text-emerald-600" href="#">
                    How to create a new component in React.js
                  </a>
                </li>
                <li className="">
                  <a className="transition-all hover:text-emerald-600" href="#">
                    Next.js Routing
                  </a>
                </li>
                <li className="">
                  <a className="transition-all hover:text-emerald-600" href="#">
                    SSR - What is it?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Mobile Responsive Header Starts --> */}
          <div className="flex items-center gap-5 lg:hidden">
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
              aria-label="Toggle navigation"
            >
              <Image
                src="./assets/icons/hamburger.svg"
                alt="Menu"
                height={100}
                width={100}
                className="w-2.5 stroke-zinc-900 dark:stroke-white"
              />
            </button>
            <a aria-label="Home" href="/">
              <Image
                src="./assets/icons/logo.svg"
                alt="Protocol"
                height={100}
                width={100}
                className="h-6"
              />
            </a>
          </div>
          {/* <!-- Mobile Responsive Header Ends --> */}

          <div className="flex items-center gap-5">
            <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
            <div className="flex gap-4">
              <div className="contents lg:hidden">
                <button
                  type="button"
                  className="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                  aria-label="Find something..."
                >
                  <Image
                    src="./assets/icons/search.svg"
                    alt="Search"
                    className="h-5 w-5"
                    height={100}
                    width={100}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Ends --> */}

      {/* <!-- sidebar nav --> */}
      <Nav docs={docs} />
      {/* <!-- Sidebar nav ends --> */}
    </header>
  );
}
