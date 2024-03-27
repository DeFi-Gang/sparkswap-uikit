import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M4.58203 11.6667L9.58203 6.66667L14.582 11.6667"
        stroke="#E9E9E9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
