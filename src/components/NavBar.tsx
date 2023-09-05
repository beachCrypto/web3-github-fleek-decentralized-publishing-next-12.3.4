import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="rounded-lg flex items-center flex-wrap bg-gray-400 p-3 ">
        <div className="font-Literata">
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <button
            className=" inline-flex p-3 hover:bg-gray-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link href="/chapter_1">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white ">
                  Chapter 1
                </a>
              </Link>
              <Link href="/chapter_2">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white">
                  Chapter 2
                </a>
              </Link>
              <Link href="/chapter_3">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-800 hover:text-white">
                  Chapter 3
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
