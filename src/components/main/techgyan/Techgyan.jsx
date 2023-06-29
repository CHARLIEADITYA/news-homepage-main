import React from "react";
import "./techgyan.css";
import pc from "../../../assets/images/image-retro-pcs.jpg";
import laptop from "../../../assets/images/image-top-laptops.jpg";
import gamingjone from "../../../assets/images/image-gaming-growth.jpg";
import Box from "./Box";

const Techgyan = () => {
  return (
    <div className="design">
      <Box image={pc} heading="01" heading2="Reviving Retro PCs " para="What happens when old PCs are given modern
    upgrades?" />
      <Box image={laptop} heading="02" heading2="Top 10 Laptops of 2022" para="Our best picks for various needs and budgets" />
      <Box image={gamingjone} heading="03" heading2="The Growth of Gaming" para="How the pandemic has sparked fresh
  opportunities." />
    </div>
  );
};

export default Techgyan;
