import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Info from "@/assets/icons/info.svg";
import {
  ButtonPrimary,
  FormInput,
  PasswordInput,
} from "@/ui-kit/base-components";
import { useAuthModal, useLogin } from "@/hooks/auth";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { closeModal } = useAuthModal();

  const { mutate: login, isError, isPending, isSuccess, error } = useLogin();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    login({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

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

      {/* Кнопка логіну */}
      <ButtonPrimary
        type="submit"
        isDisabled={!isFormValid || isPending} // Дизейблимо кнопку, якщо форма не валідна або йде логін
      >
        {isPending ? "Logging in..." : "Sign in"}
      </ButtonPrimary>

      {/* Обробка помилки */}
      {isError && (
        <div className="text-red-500 mt-2">
          {error instanceof Error ? error.message : "Login failed"}
        </div>
      )}

      {/* Повідомлення про успіх */}
      {isSuccess && (
        <div className="text-green-500 mt-2">
          Login successful! Redirecting...
        </div>
      )}

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
