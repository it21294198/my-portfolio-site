"use client";
import React from "react";
import { fuggles, inter } from "../util/fonts";
import { saveAs } from "file-saver";

const Details = () => {
  const saveFile = () => {
    saveAs("./RusiraThamuditha.pdf", "RusiraThamudithCV.pdf");
  };

  return (
    <>
      {/* <div className={fuggles.className}>Test font</div> */}
      <div className={`text-white text-8xl ${fuggles.className}`}>
        Hello world
      </div>
      <div className={`text-black text-8xl ${inter.className}`}>
        Reaching for 10x developing experience
      </div>
      <div>
        <span>
          <button
            onClick={saveFile}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Download My CV
            </span>
          </button>
        </span>
        <span>
          <a href="https://github.com/it21294198">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View my GitHub
              </span>
            </button>
          </a>
        </span>
      </div>
    </>
  );
};

export default Details;
