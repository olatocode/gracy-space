/** @format */

import React from 'react';
import votevoice from '../assets/votevoice.webp';
import googleui from '../assets/googleui.webp';

const Projects = () => {
  const projects = [
    {
      img: votevoice,
      title: 'VoteVoice',
      desc: ' An Election App. Built with ReactNative, Html & Css',
      live: 'https://play.google.com/store/apps/details?id=com.votevoice',
      code: 'https://github.com/olatocode',
    },
    {
      img: googleui,
      title: 'GoogleUI',
      desc: 'A simple Google UI Design using Html and Css',
      live: 'https://olatocode.github.io/googleui/',
      code: 'https://github.com/olatocode/googleui',
    },
   
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-brown-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {/* {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })} */}
        <p className="pb-5">Coming Soon...</p>
      </div>
    </section>
  );
};

export default Projects;
