import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#clip0_2197_2017)">
        <path
          d="M15.416 8.33333L10.416 13.3333L5.41602 8.33333"
          stroke="#E9E9E9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2197_2017">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
