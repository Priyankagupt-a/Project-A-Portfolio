import React from "react";
import video1 from "../assets/video1.mp4"; // Replace with actual project video
import video2 from "../assets/video2.mp4"; // Replace with another project video

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Main heading */}
      <h1>
        <div className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Building Modern Web Applications with
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}React.js & JavaScript
          </span>
        </div>
      </h1>
      {/* Subheading */}
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        I specialize in creating responsive, dynamic, and interactive user interfaces using React.js, JavaScript, and modern frontend technologies.
      </p>
      {/* Call to Action Buttons */}
      <div className="flex justify-center my-10">
        <a
          href="/projects"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          View My Projects
        </a>
        <a
          href="mailto:priyanka1workemail@gmail.com"
          className="py-3 px-4 mx-3 rounded-md border"
        >
          Get in Touch
        </a>
      </div>
      {/* Video section showcasing portfolio work */}
      <div className="flex mt-10 justify-center">
        {/* First video representing a project */}
        <video autoPlay loop muted className="rounded-lg w-1/2">
          <source src={video1} type="video/mp4" />
          Your browser does not support video
        </video>
        {/* Second video representing another project */}
        <video autoPlay loop muted className="rounded-lg w-1/2 ml-4">
          <source src={video2} type="video/mp4" />
          Your browser does not support video
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
