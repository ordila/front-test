import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Info from "@/assets/icons/info.svg";

import {
  ButtonPrimary,
  FormInput,
  PasswordInput,
} from "@/ui-kit/base-components";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Вхід виконано!");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <FormInput
        label="* Enter email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput label="* Password">
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormInput>

      <ButtonPrimary
        onClick={() => console.log("Button clicked!")}
        isDisabled={!isFormValid}
      >
        Sign in
      </ButtonPrimary>

      <div className="mt-[42px] flex items-center gap-2">
        <Image src={Info} alt="Info" />
        <Link
          href="#"
          className="text-[14px] flex items-center gap-2 uppercase"
        >
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};
