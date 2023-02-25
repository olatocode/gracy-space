/** @format */

import React from 'react';
import HeroImg from '../assets/grace.png';

import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">G</span>race <br />
            Content Creator
          </h1>

          <p className="py-5">
            I create content on Youtube and also as a Social Media Manager
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.youtube.com/@gracyspace"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineYoutube size={40} />{' '}
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B09056024921&text&type=phone_number&app_absent=0"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineWhatsApp size={40} />{' '}
            </a>

            <a
              href="https://web.facebook.com/grace.awosola.5?mibextid=ZbWKwL&_rdc=1&_rdr"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineFacebook size={40} />{' '}
            </a>
            <a
              href="https://www.instagram.com/gracy_space/?"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineInstagram size={40} />{' '}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#fff] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
