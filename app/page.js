"use client";
import React, { useState, useEffect } from "react";
import { SpinnerDotted } from "spinners-react";
import Canvas from "./components/Canvas";
import MainImage from "./content/mainImage";
import Details from "./content/details";
import Projects from "./content/projects";
import SocialMedia from "./content/socialmedia";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-black h-screen w-screen flex items-center justify-center">
          <SpinnerDotted size="20%" color="#f70c0c" speed="100" />
        </div>
      ) : (
        <>
          <div className="relative text-white">
            <div className="absolute bg-white bg-opacity-50 left-1/3 p-10">
              <div className="h-screen overflow-y-scroll p-40 scroll-smooth">
                {/* main content of the portfolio web site */}
                <Details />
                {/* <Projects /> */}
                {/* <MainImage
                  imagURL={"/Giff.gif"}
                  imageSize={500}
                  imageName={"Intro image"}
                  border={"rounded-3xl"}
                /> */}
                <br />
                <SocialMedia />
              </div>
            </div>
            <Canvas />
          </div>
        </>
      )}
    </>
  );
}
