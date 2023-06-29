import React from "react";
import "./nav.css";
import wlogo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";
import cross from "../../assets/images/icon-menu-close.svg"

const toggleMenu = ()=>{
    document.querySelector(".menu").style.display="none";
    document.querySelector(".cross").style.display="block";
    document.querySelector(".container").classList.add("hide");
    
}
const toggleCross = () =>{
    document.querySelector(".cross").style.display="none";
    document.querySelector(".menu").style.display="block";
    document.querySelector(".container").classList.remove("hide");
    // console.log("hii")
}

const nav = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={wlogo} alt="logo"/>
          <div className="ham_btn">
          <img onClick={toggleMenu} className="menu" src={menu} alt="menulogo" />
          <img onClick={toggleCross} className="cross" src={cross} alt="crosslogo" />
       </div>
          </div>
        <div className="container">
            <ul className="inner_links">
           <li>  Home</li>
           <li>  New</li>
           <li>  Popular</li>
          <li>  Trending</li>
          <li>  Categories</li>
           </ul>
        </div>
      </nav>
    </header>
    
  );
};

export default nav;
