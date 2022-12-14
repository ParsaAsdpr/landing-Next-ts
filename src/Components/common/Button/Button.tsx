import React from "react";

import IButtonPropInterface from "../../../Core/PropInterface/IButtonProps";
const Button: React.FC<IButtonPropInterface> = ({
  onClick,
  children,
  className,
}) => {

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
