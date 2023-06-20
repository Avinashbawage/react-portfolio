import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          Hi, I am Avinash Bawage, a web developer and digital marketer working
          as a freelancer. I have over 2 years of experience in web development,
          starting from March 28, 2021, to till the Current Date. My skills
          include HTML, CSS, JavaScript, Bootstrap, React.js (frontend web
          development), Node.js (backend development), and MySQL (database).
        </p>

        <br />

        <p className="text-xl">
          I am excited to improve my skills and learn new technologies. I enjoy
          coding projects from scratch and turning ideas into reality. Feel free
          to connect with me to get your project done.
        </p>
      </div>
    </div>
  );
};

export default About;
