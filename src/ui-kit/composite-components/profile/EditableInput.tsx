import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

interface EditableInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?: (value: string) => void;
}

const EditableInput: React.FC<EditableInputProps> = ({
  label,
  placeholder = "Enter",
  value = "",
  leftIcon = <EditIcon fontSize="small" sx={{ color: "#D1D1D1" }} />,
  rightIcon,
  onChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex flex-col w-full space-y-1">
      <label className="text-sm font-bold uppercase">{label}</label>
      <div className="flex items-center border-b border-[#D1D1D1] h-[40px]">
        <span className="mr-2">{leftIcon}</span>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full focus:outline-none text-sm text-gray-800"
        />
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </div>
    </div>
  );
};

export default EditableInput;
