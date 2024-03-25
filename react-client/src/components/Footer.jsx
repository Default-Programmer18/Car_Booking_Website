import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

const  FooterComponent = () => {
  return (
    <Footer container className="border border-t-4 border-teal-500 md:mt-4 mt-10">
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5 '>
          <Link to={"/"} className='self-center whitespace-nowrap text-xl sm:text-2xl font-semibold dark:text-white font-mono'>
            Drive.
            <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '>Hub</span>
            
        </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4   gap:8 sm:gap-2 mt-4">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  to="/about"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  About the Website
                </Footer.Link>
                <Footer.Link to="#">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link to="#">Linkdln</Footer.Link>
                <Footer.Link to="#">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="LEGAL"  className="mt-4 sm:mt-0"/>
              <Footer.LinkGroup col>
                <Footer.Link to="#">Privacy Policy</Footer.Link>
                <Footer.Link to="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="w-full"/>
<div className=" flex justify-center items-center flex-col sm:flex-row sm:gap-0 gap-4 sm:justify-between ">
      
        <Footer.Copyright href="#" by="Blogspace" year={new Date().getFullYear()}/> 
       
        <div className="flex gap-4">
          <Footer.Icon href="#" icon={BsFacebook}/>
          <Footer.Icon href="#" icon={BsInstagram}/>
          <Footer.Icon href="#" icon={BsTwitter}/>
          <Footer.Icon href="#" icon={BsGithub}/>
          </div>
        </div>  
         </div>

     
    </Footer>
  );
};

export default FooterComponent;
