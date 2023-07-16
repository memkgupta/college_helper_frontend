import React, { Suspense, lazy, useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import robot_hand from "../images/robot_hand.png";
import PYP from "../images/PYP.png";
import tutorial from "../images/tutorial.png"
import online_lectures from "../images/online_lectures.png"
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import chat_room from "../images/chat_room.png"

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme === "dark" ? "dark:bg-black" : "");
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className={` bg-white ${theme === "dark" ? "dark:bg-dark" : ""} ${
          theme === "dark" ? "text-white" : ""
        }`}
      >
        <div style={{ height: "70vh" }} className="grid  content-center">
          <div className="flex justify-between items-stretch">
            <div className="mt-4 ml-8  ...">
              <p
                className={`p-3 space-y-5 text-4xl antialiased font-bold ${
                  theme === "dark" ? "dark:text-white" : "dark:text-dark"
                }`}
              >
                Welcome {} , <br />
                To the Best Platform For Learning <br />
                <span className="space-y-5">
                  Collaboratively With Friends And Classmates
                </span>
              </p>
            </div>
            <div>
              
              <LazyLoadImage  effect="blur"
                style={{
                  filter:
                    "drop-shadow( 30px 10px 330px rgba(146, 242, 252, 0.4))",
                }}
                src={robot_hand}
                alt="Image"
              />
            </div>
          </div>
        </div>
        <div className="container  flex justify-center">
          <button
            className={`rounded-full text-white p-3 hover:${
              theme == "dark" ? "bg-white text-dark" : "bg-dark"
            } bg-${theme === "dark" ? "transparent" : "dark"}`}
          >
            Get Started
          </button>
        </div>
        {/* PYP */}
        <div className="mt-14 flex justify-center">
          <h2 className="text-3xl font-bold">Previous Year Papers</h2>
        </div>
        <div className="mt-8 container p-14 flex  justify-around">
          <div className="image-container" style={{ width: "500px" }}>
            <LazyLoadImage  effect="blur" src={PYP}></LazyLoadImage >
          </div>
          <div className="mt-8" style={{ width: "500px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            consequuntur excepturi dolor voluptas hic soluta necessitatibus enim
            cum, quod dolore. Totam necessitatibus voluptatum sit eum omnis
            atque alias quaerat reprehenderit! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nam ut esse expedita cupiditate! Culpa
            aut voluptatibus a suscipit eos, ullam ipsum ratione quas, explicabo
            fuga, quae ab aliquid eveniet accusantium?
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <button className={`rounded-xl w-48 h-14 ${theme==='dark'?'bg-transparent border-2 border-blue hover:bg-blue':'bg-dark'} ${theme==='dark'?'text-white':'text-white'}`}>View</button>
        </div>
        {/* Tutorials */}
        <div className="mt-14 flex justify-center">
          <h2 className="text-3xl font-bold">Programming Lectures Sorted For You</h2>
        </div>
        <div className="mt-8 container p-14 flex flex-row-reverse justify-around">
          <div className="image-container" style={{ width: "500px" }}>
            <LazyLoadImage  effect="blur" src={tutorial}></LazyLoadImage >
          </div>
          <div className="mt-8" style={{ width: "500px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            consequuntur excepturi dolor voluptas hic soluta necessitatibus enim
            cum, quod dolore. Totam necessitatibus voluptatum sit eum omnis
            atque alias quaerat reprehenderit! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nam ut esse expedita cupiditate! Culpa
            aut voluptatibus a suscipit eos, ullam ipsum ratione quas, explicabo
            fuga, quae ab aliquid eveniet accusantium?
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <button className={`rounded-xl w-48 h-14 ${theme==='dark'?'bg-transparent border-2 border-blue hover:bg-blue':'bg-dark'} ${theme==='dark'?'text-white':'text-white'}`}>View</button>
        </div>
        {/* Lectures  */}
        <div className="mt-14 flex justify-center">
          <h2 className="text-3xl font-bold">Engineering Lectures For Your Exams</h2>
        </div>
        <div className="mt-8 container p-14 flex  justify-around">
          <div className="image-container" style={{ width: "500px" }}>
            <LazyLoadImage  effect="blur" src={online_lectures}></LazyLoadImage >
          </div>
          <div className="mt-8" style={{ width: "500px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            consequuntur excepturi dolor voluptas hic soluta necessitatibus enim
            cum, quod dolore. Totam necessitatibus voluptatum sit eum omnis
            atque alias quaerat reprehenderit! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nam ut esse expedita cupiditate! Culpa
            aut voluptatibus a suscipit eos, ullam ipsum ratione quas, explicabo
            fuga, quae ab aliquid eveniet accusantium?
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <button className={`rounded-xl w-48 h-14 ${theme==='dark'?'bg-transparent border-2 border-blue hover:bg-blue':'bg-dark'} ${theme==='dark'?'text-white':'text-white'}`}>View</button>
        </div>
        {/* Discussion */}
        <div className="mt-14 flex justify-center">
          <h2 className="text-3xl font-bold">Discuss With Your Friends</h2>
        </div>
        <div className="mt-8 container p-14 flex flex-row-reverse justify-around">

          <div className="image-container" style={{ width: "500px" }}>
          
            <LazyLoadImage  effect="blur" src={chat_room} ></LazyLoadImage>
          
  
          </div>
   
          <div className="mt-8" style={{ width: "500px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            consequuntur excepturi dolor voluptas hic soluta necessitatibus enim
            cum, quod dolore. Totam necessitatibus voluptatum sit eum omnis
            atque alias quaerat reprehenderit! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nam ut esse expedita cupiditate! Culpa
            aut voluptatibus a suscipit eos, ullam ipsum ratione quas, explicabo
            fuga, quae ab aliquid eveniet accusantium?
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <button className={`rounded-xl w-48 h-14 ${theme==='dark'?'bg-transparent border-2 border-blue hover:bg-blue':'bg-dark'} ${theme==='dark'?'text-white':'text-white'}`}>View</button>
        </div>
      </div>
    </>
  );
}

export default Home;
