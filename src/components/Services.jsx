import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Services = () => {
  // Define the services data
  const servicesData = [
    {
      icon: "fab fa-accusoft",
      title: "Web Design",
      description:
        "A website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.",
    },
    {
      icon: "fas fa-blender-phone",
      title: "Mobile App Design",
      description:
        "A mobile application, also referred to as a mobile app or simply an app, is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Digital Marketing",
      description:
        "Digital Marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. Using these online media.",
    },
  ];

  return (
    <div
      name=" "
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <section className="section theme" id="services">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              My Services
            </p>
            <br />
            <br />
            <p>Services I offer for Cilents</p>
          </div>
          <div className="services-center container">
            {servicesData.map((service, index) => (
              <div
                className="service"
                key={index}
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <span>
                  <i className={service.icon}></i>
                </span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
