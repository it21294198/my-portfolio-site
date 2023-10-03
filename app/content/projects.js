"use client";
import React from "react";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    // const mainbox = document.querySelectorAll(".mainbox");
    // const boxes = Array.from(document.querySelectorAll(".box"));
    const mainbox = Array.from(document.querySelectorAll(".mainbox"));

    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 2) * 4;
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add("show");
          // } else {
          // box.classList.remove("show");
        }
      });
    };

    window.addEventListener("load", checkBoxes);
    // checkBoxes();
  }, []);

  return (
    <>
      <div className="mainbox">
        <div className="box">
          <h1>Hello</h1>
        </div>
        <div className="box">
          <h1>Hello</h1>
        </div>
        <div className="box">
          <h1>Hello</h1>
        </div>
        <div className="box">
          <h1>Hello</h1>
        </div>
        <div className="box">
          <h1>Hello</h1>
        </div>
        <div className="box">
          <h1>Hello</h1>
        </div>
        <div className="box">
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
};

export default Projects;
