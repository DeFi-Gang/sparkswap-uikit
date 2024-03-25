import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps } from "./types";

const Toggle: React.FC<ToggleProps> = ({ checked, ...props }) => {
  const isChecked = !!checked;

  return (
    <StyledToggle>
      <Input checked={checked} {...props} type="checkbox" />
      <Handle checked={isChecked}/>
    </StyledToggle>
  );
};

export default Toggle;
