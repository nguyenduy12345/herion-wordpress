import React from "react";
import styles from './NavBar.module.css'
const NavBar = ({isNavBar, setIsNavBar}) => {
  return (
    <div className={`w-full h-screen flex justify-end absolute top-[3.5rem] ${isNavBar ? styles['navbar_slideIn'] : styles['navbar_slideOut']} `}>
      <i 
        onClick={() => setIsNavBar(!isNavBar)}
        className={`fa-solid fa-xmark absolute right-[2rem] top-[1.5rem] text-[1.5rem] cursor-pointer`}></i>
      <ul className={`w-[90%] md:w-[60%] h-full flex flex-col lg:gap-[1rem]  bg-white ${styles['navlink']}`}>
        <li className="flex justify-between w-[80%] cursor-pointer ">
          <a href=""
            className="font-[400] lg:font-[600] text-[1.5rem] md:text-[2.2rem]"
          >Home</a>
          <i className="fa-solid fa-angle-down"></i>
        </li>
        <li className="flex justify-between w-[80%] cursor-pointer ">
          <a href=""
            className="font-[400] lg:font-[600] text-[1.5rem] md:text-[2.2rem]"
          >Discography</a>
          <i className="fa-solid fa-angle-down"></i>
        </li>
        <li className="flex justify-between w-[80%] cursor-pointer ">
          <a href=""
            className="font-[400] lg:font-[600] text-[1.5rem] md:text-[2.2rem]"
          >Artists</a>
          <i className="fa-solid fa-angle-down"></i>
        </li>
        <li className="flex justify-between w-[80%] cursor-pointer ">
          <a href=""
            className="font-[400] lg:font-[600] text-[1.5rem] md:text-[2.2rem]"
          >Videos</a>
          <i className="fa-solid fa-angle-down"></i>
        </li>
        <li className="flex justify-between w-[80%] cursor-pointer ">
          <a href=""
            className="font-[400] lg:font-[600] text-[1.5rem] md:text-[2.2rem]"
          >Blog</a>
          <i className="fa-solid fa-angle-down"></i>
        </li>
        <li className="flex justify-between w-[80%] cursor-pointer ">
          <a href=""
            className="font-[400] lg:font-[600] text-[1.5rem] md:text-[2.2rem]"
          >Pages</a>
          <i className="fa-solid fa-angle-down"></i>
        </li>
        <li className="flex justify-between w-[80%] cursor-pointer ">
          <a href=""
            className="font-[400] lg:font-[600] text-[1.5rem] md:text-[2.2rem]"
          >Shop</a>
          <i className="fa-solid fa-angle-down"></i>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
