import { useState } from "react";
import { Checkbox } from "@mui/material";

import {
  ButtonPrimary,
  FormInput,
  PasswordInput,
} from "@/ui-kit/base-components";

import { useAuthModal, useRegister } from "@/hooks/auth";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { closeModal } = useAuthModal();
  const { mutate: register, isPending } = useRegister();

  const isFormValid =
    email.trim() !== "" &&
    password.trim() !== "" &&
    repeatPassword.trim() !== "" &&
    password === repeatPassword &&
    termsAccepted;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setErrorMessage(null);

    register(
      { email, password },
      {
        onSuccess: () => {
          closeModal();
        },
        onError: (error: any) => {
          setErrorMessage(
            error?.response?.data?.message ||
              "Registration failed. Please try again."
          );
        },
      }
    );
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
      <FormInput label="* Enter password">
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormInput>
      <FormInput label="* Repeat password">
        <PasswordInput
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </FormInput>
      <div>
        <Checkbox
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          sx={{
            padding: 0,
            color: "#717171",
            "&.Mui-checked": {
              color: "#CDFF3A",
            },
          }}
        />
        <label htmlFor="agree" className="ml-2 text-sm uppercase">
          I accept the terms of the license agreement
        </label>
      </div>

      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

      <ButtonPrimary type="submit" isDisabled={!isFormValid || isPending}>
        {isPending ? "Signing up..." : "Sign up"}
      </ButtonPrimary>
    </form>
  );
};
