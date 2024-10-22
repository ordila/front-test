import React from "react";

type ButtonPrimaryProps = {
  isDisabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  arrow?: boolean;
  type?: "submit" | "reset" | "button";
};

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  isDisabled = false,
  onClick,
  children,

  type,
}) => {
  return (
    <button
      type={type}
      className={`px-6 py-2 font-black uppercase w-full  bg-flash-green
        ${isDisabled && "bg-light-grey cursor-not-allowed text-dark-gray"}

      `}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
