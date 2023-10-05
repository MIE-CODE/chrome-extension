import React from "react";

function nav() {
  return (
    <div className="h-[64px]  flex    justify-center items-center ">
      <ul className="flex  w-full justify-between m-40 gap-[32px]">
        <li className=" font-body  text-hngblack hover:text-hc select-none transition duration-400 ease-in-out text-base font-normal">
          All Categories
        </li>
        <li className=" font-body text-hngblack hover:text-hc select-none transition duration-400 ease-in-out text-base font-normal">
          Design & Graphics
        </li>
        <li className=" font-body text-hngblack hover:text-hc select-none transition duration-400 ease-in-out text-base font-normal">
          Development & Programming
        </li>
        <li className=" font-body text-hngblack hover:text-hc select-none transition duration-400 ease-in-out text-base font-normal">
          Content Creation
        </li>
        <li className=" font-body text-hngblack hover:text-hc select-none transition duration-400 ease-in-out text-base font-normal">
          Digital Arts & Media
        </li>
        <li className=" font-body text-hngblack hover:text-hc select-none transition duration-400 ease-in-out text-base font-normal">
          Audio & Sound
        </li>
        <li className=" font-body text-hngblack hover:text-hc select-none transition duration-400 ease-in-out text-base font-normal">
          Photography
        </li>
        <li className=" font-body text-hngblack hover:text-hc select-none  transition duration-400 ease-in-out text-base font-normal ">
          More...
        </li>
      </ul>
    </div>
  );
}

export default nav;
