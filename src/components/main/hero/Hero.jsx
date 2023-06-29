import React from "react";
import "./hero.css";
import desktop from "../../../assets/images/image-web-3-desktop.jpg";
import mobile from "../../../assets/images/image-web-3-mobile.jpg";

const Hero = () => {
  return (
    
    <div className="top_content b">
      <div className="left_component">
        <picture>
          <source media="(max-width:640px)" srcSet={mobile} />
          <img src={desktop} class="img-fluid" alt="image desc" />
        </picture>
        <div className="left_component_bottom">
          <div className="bright">
            <h1> The Bright Future of Web 3.0?</h1>
          </div>
          <div className="Read_more">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
      <div className="right_compoennt b">
        <div className="right_compoennt_content">
        <h1>New</h1>
        <h2>Hydrogen VS Electric Cars</h2>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <div className="line">

        </div>
        <h2>The Downsides of AI Artistry</h2>
        <p>
      
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <div className="line">

        </div>

        <h2>Is VC Funding Drying Up? </h2>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
        </div>
    
      </div>
    </div>

  );
};

export default Hero;
