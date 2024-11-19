import { IoIosSend } from "react-icons/io";
import { assets } from "../assets/assete";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";

export const Footer = () => {
  return (
    <div className="w-full flex  items-center justify-between bg-[#263238] py-11 gap-5 lg:px-28 px-6 font-poppins">
      <div className="flex flex-col gap-8">
        <img src={assets.footerLogo} />
        <p className="text-[#F5F7FA] font-light text-sm">
          Copyright © 2020 Landify UI Kit. <br />
          All rights reserved
        </p>
        <div className=" flex gap-3">
          <p className="p-4 bg-[#3c3d46] rounded-full">
            <FaInstagram className="text-[#fff]" />
          </p>
          <p className="p-4 bg-[#3c3d46] rounded-full">
            <CiBasketball className="text-[#fff] " />
          </p>
          <p className="p-4 bg-[#3c3d46] rounded-full">
            <FaTwitter className="text-[#fff]" />
          </p>
          <p className="p-4 bg-[#3c3d46] rounded-full">
            <FaYoutube className="text-[#fff]" />
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-24">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium text-[#fff]">Company</h3>
          <div>
            <ul className="flex flex-col gap-2 text-sm font-normal text-[#F5F7FA]">
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium text-[#fff]">Support</h3>
          <div>
            <ul className="flex flex-col gap-2 text-sm font-normal text-[#F5F7FA]">
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium text-[#fff]">Stay up to date</h3>
          <div className="flex justify-between bg-[#3c3d46] text-[#D9DBE1] px-3 py-2 rounded-md w-[220px]">
            <input
              type="text"
              placeholder="Your email address"
              className="bg-transparent text-sm outline-none"
            />
            <IoIosSend className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
