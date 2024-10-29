"use client";
import { useState } from "react";
import Image from "next/image";

import SignIn from "@/assets/images/sign_in.png";
import SignUp from "@/assets/images/sign_up.png";
import Close from "@/assets/icons/close.svg";

import { FormHeader } from "./FormHeader";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

import { useAuthModal } from "@/hooks/auth";

export const AuthModal = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const { isModalOpen, closeModal } = useAuthModal();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-[25px] py-[60px]">
      <div className="bg-white w-full max-w-[1024px]  rounded-lg flex flex-col md:flex-row relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 hover:scale-125 smooth-scale"
        >
          <Image src={Close} alt="Close icon" />
        </button>

        {/* Form Section */}
        <div className="py-[60px] w-full md:w-1/2 p-4 flex flex-col justify-top items-center pb-[24px]">
          <div className="w-full max-w-[340px]">
            <FormHeader isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
            <h4 className="text-h5 uppercase text-center my-10">
              {isSignIn ? "Welcome back!" : "Create an account"}
            </h4>

            {isSignIn ? <SignInForm /> : <SignUpForm />}
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block w-1/2">
          <Image
            src={isSignIn ? SignIn : SignUp}
            alt="Auth"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
