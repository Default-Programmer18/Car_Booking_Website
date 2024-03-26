import React from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,

} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-300/50 via-white to-green-200/35 mt-4 mx-auto">
      <footer className=" flex flex-col pt-10">
        <div className="grid md:grid-cols-2  grid-cols-1   justify-items-center">
          <div className=" mx-3">
            <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
              Stay up-to-date with our latest blog posts and news.
            </p>
            <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
              <li>
                <a href="/">
                  <AiOutlineTwitter className="w-6 h-auto text-cyan-700" />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillYoutube className="w-6 h-auto text-red-600" />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillInstagram className="w-6 h-auto text-rose-500" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaFacebook className="w-6 h-auto text-blue-500" />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsTelegram className="w-6 h-auto text-violet-500" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 md:mt-0 mt-4 sm:gap-10 gap-5 md:mx-0 mx-4">
            <div className="">
              <h3 className="text-slate-800 font-bold md:text-lg">Explore</h3>
              <ul className="text-slate-600 text-sm mt-5 space-y-4 md:text-base">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-slate-800 font-bold md:text-lg">Legal</h3>
              <ul className="text-slate-600 text-sm mt-5 space-y-4 md:text-base">
                <li>
                  <a href="/">Terms of Service</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-slate-800 font-bold md:text-lg">Connect</h3>
              <ul className="text-slate-600 text-sm mt-5 space-y-4 md:text-base">
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" py-4  text-center">
          <p className="font-bold italic text-dark-light">
            © {new Date().getFullYear()}{" "}
            <span className="font-extrabold bg-gradient-to-b from-indigo-800 via-purple-700 to-rose-700 text-transparent bg-clip-text">
              {" "}
              Driver.{" "}
            </span>
            Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default FooterComponent;
