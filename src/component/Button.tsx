import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ButtonCompo: React.FC<ButtonProps> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>;
};

export default ButtonCompo;
