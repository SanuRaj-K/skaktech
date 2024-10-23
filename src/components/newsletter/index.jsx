"use client";
import { newsletterList } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const NewsLetter = () => {
  return (
    <div>
      <div className=" px-5 lg:pt-10 xl:pt-0 md:px-10 w-full flex flex-col    xl:flex-row  lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className=" w-full flex justify-center items-center  xl:w-1/2"
        >
          <Image
            src={"/assets/images/newsletter-1.svg"}
            width={680}
            height={400}
            alt="newsletter"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className=" mt-10    px-5"
        >
          <h1 className=" text-center  xl:text-start font-semibold text-[24px] sm:text-[40px] py-3">
            Subscribe to the Newsletter
          </h1>
          <div className="text-[14px] sm:text-[18px]     font-medium text-[#8D8D8D]">
            <h3 className=" ">
              Receive newsletters from Skaktech on a regular basis
            </h3>
            <h4>
              Stay-up-to date with the latest news and updates on our journey.
            </h4>
            <h4 className=" text-black text-[14px] my-1">
              In our newsletter you get the latest :
            </h4>
          </div>

          <ol className="list-disc  list-inside px-5 lg:px-0 my-3 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3">
            {newsletterList.map((item, index) => (
              <li
                className="  flex items-center"
                key={index}
              >
                <span className="w-[4px] h-[4px]   rounded-full  pt-3 lg:mt-0  bg-black "></span>
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ol>

          <div>
            <form className="  " action="">
              <input
                required
                className=" w-full  my-2 border-2 h-[40px] pl-5 rounded-md"
                type="text"
                placeholder="Full Name*"
                name=""
                id=""
              />
              <div className=" w-full my-3 flex flex-col lg:flex-row">
                <input
                  required
                  className=" w-full  xl:w-1/2 h-[40px] mr-4 rounded-md pl-5 border-2  "
                  type="text"
                  placeholder="E-Mail*"
                  name=""
                  id=""
                />
                <input
                  required
                  className="  w-full xl:w-1/2 h-[40px] rounded-md pl-5 border-2  mt-5 2xl:mt-0 2xl:ml-5 "
                  type="text"
                  placeholder="Phone Number*"
                  name=""
                  id=""
                />
              </div>
              <div className=" my-3">
                <input type="checkbox" name="check" id="check" />
                <label
                  className="     text-[14px] ml-2"
                  htmlFor="check"
                  id="check"
                >
                  By checking this box you are agreeing to our Privacy Policy
                  and Skaktech can send me related information
                </label>
              </div>
              <button className=" w-full lg:w-min hover:bg-black hover:text-white hover:font-semibold transition-all duration-200 text-white bg-primary px-16 mt-5 py-2 rounded-md">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
