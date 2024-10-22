import { FC } from "react";

import { Input } from "@mui/material";

type FormInputProps = {
  label: string;
  type?: string;
  autoComplete?: string;
  children?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput: FC<FormInputProps> = ({
  label,
  type = "text",
  autoComplete = "on",
  children,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-[15px] font-medium tracking-widest uppercase">
        {label}
      </label>
      {children ? (
        children
      ) : (
        <Input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full"
          autoComplete={autoComplete}
        />
      )}
    </div>
  );
};
