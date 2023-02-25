/** @format */

import React from 'react';
import AboutImg from '../assets/logo.png';

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-brown-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Marketing has become my unexpected passion, and I have grown to love
            the field. My expertise in communication, photography, and video
            editing has led me to my dream job as a Marketing Coordinator.
          </p>
          <p className="pb-5">
            As a coordinator, I help small businesses by managing and creating
            compelling social media profiles, which guide them on the best ways
            to use social media and connect with more clients.
          </p>

          <p>
            With my skills, I provide clarity and make social media
            approachable, so that small businesses can focus on what they do
            best.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
