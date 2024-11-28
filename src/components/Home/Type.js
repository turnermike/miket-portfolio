import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "a Full Stack Web Developer",
          "a Freelancer",
          "a Wordpress Developer",
          "a Contractor",
          "a Technology Enthusiast",
          "a PHP Developer",
          "a Father",
          "a Front-end Developer",
          "an Outdoorsman",
          "a Back-end Developer",
          "a Nerd",
          "a Raspberry Pi Hobbyst",
          "a Cook",
          "a Typescript Wannabe",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
