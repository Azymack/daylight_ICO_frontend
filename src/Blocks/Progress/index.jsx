import React from "react";
import Option from "./Option";
import "./style.css";

const ProgressSecction = () => {
  return (
    <div className="progress-container ">
      <Option check title="Whitelist Registration" date="25th Jan, 2025" />
      <Option check title="Whitelist Concluded" date="14th May, 3PM UTC" />
      <Option check title="Presale Round 1" date="14th May, 3PM UTC" />
      <Option
        check
        title="Presale Conclusion & Token Distribution"
        date="21st May, 3PM UTC"
      />
      <Option check title="Launch & IDO" date="To Be Announced" />
    </div>
  );
};

export default ProgressSecction;
