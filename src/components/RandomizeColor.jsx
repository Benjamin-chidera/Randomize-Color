import React from "react";
import { Title } from "./Title";

export const RandomizeColor = () => {
  const handleClick = (e) => {
    getRandomColor();

    let body = document.querySelector("body");
    body.style.backgroundColor = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();                                                                                                                                                                                                             
  };

  const getRandomColor = () => {
    let letters = "01234567ABCDEF";
    let color = "#";                                                                                                                                                                                                                                                     
                                                                         
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];                                             
    }

    return color;
  };

  return (
    <div>
      <Title text={"Randomize Color"} />
      <div className=" space-x-3">
        <button
          className="bg-red-600 py-1 px-5 rounded-md text-white"
          onClick={handleClick}
        >
          Click me
        </button>
        <button
          className="bg-green-600 py-1 px-5 rounded-md text-white"
          onClick={handleClick}
        >
          Click me
        </button>
        <button
          className="bg-blue-600 py-1 px-5 rounded-md text-white"
          onClick={handleClick}
        >
          Click me
        </button>
        <button
          className="bg-yellow-400 py-1 px-5 rounded-md text-white"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>
    </div>
  );
};
