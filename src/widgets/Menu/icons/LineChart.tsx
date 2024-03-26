import React from "react";
import styled, { useTheme } from "styled-components";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import getThemeValue from "../../../util/getThemeValue";

const StyledSvg = styled(Svg)`
  fill: none !important;
`;

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();

  return (
    <StyledSvg
      // xmlns="http://www.w3.org/2000/svg"
      // width="800"
      // height="800"
      {...props}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={getThemeValue(`colors.textSubtle`, theme.colors.textSubtle)(theme)}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C3 20.24 3 19.96 3 19.4V3m18 4l-5.434 5.434c-.198.198-.297.297-.412.334a.499.499 0 01-.309 0c-.114-.037-.213-.136-.41-.334l-1.87-1.868c-.197-.198-.296-.297-.41-.334a.499.499 0 00-.31 0c-.114.037-.213.136-.41.334L7 15m14-8h-4m4 0v4"
      />
    </StyledSvg>
  );
};

export default Icon;
