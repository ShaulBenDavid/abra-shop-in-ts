import React, { ReactNode } from "react";
import { StyledButton } from "./style";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  otherprops?: any;
  disabled?: boolean;
  onClick?: () => void;
  type?: string;
}

const Button = ({ className, children, ...otherprops }: ButtonProps) => {
  return (
    <StyledButton {...otherprops} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
