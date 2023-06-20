import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import cutshort from "../assets/cutshort.jpg";
import reactjsedyoda from "../assets/reactjsedyoda.jpg";
import webdev from "../assets/webdev.jpg";
import attendancecer from "../assets/attendancecer.jpg";
import dmarketing from "../assets/dmarketing.jpg";
import reactjsattendce from "../assets/reactjsattendce.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Certificates.css"; // Import a CSS file to define custom styles for the carousel

const Certificates = () => {
  const certificateData = [
    {
      id: 1,
      pic: cutshort,
      title: "React Js",
      link: "",
    },
    {
      id: 2,
      pic: reactjsedyoda,
      title: "React Js",
      link: "",
    },
    {
      id: 3,
      pic: webdev,
      title: "Web development Js",
      link: "",
    },
    {
      id: 4,
      pic: attendancecer,
      title: "Web development Js",
      link: "",
    },
    {
      id: 5,
      pic: dmarketing,
      title: "Web development Js",
      link: "",
    },
    {
      id: 6,
      pic: reactjsattendce,
      title: "Web development Js",
      link: "",
    },
  ];

  return (
    <div
      name=""
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <section className="section theme" id="services">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Certificates
            </p>
            <br />
            <br />
            <p>I have got Completion certificates</p>
          </div>
          <div className="">
            <Carousel
              showThumbs={false}
              autoPlay
              interval={2000}
              infiniteLoop
              stopOnHover={true}
              showStatus={true}
              showIndicators={true}
              swipeable
              showArrows={true}
              emulateTouch
              centerMode
              centerSlidePercentage={33.33}
            >
              {certificateData.map(({ id, pic, link }) => (
                <div key={id} className="carousel-card">
                  <img src={pic} alt="projects" className="carousel-image" />
                  <br />
                  <div className="flex items-center justify-center">
                    <button
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      onClick={() => window.open(link, "_blank")}
                    >
                      Demo
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certificates;
