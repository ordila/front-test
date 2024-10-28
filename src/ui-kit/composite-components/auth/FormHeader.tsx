import { FC } from "react";

type FormHeaderProps = {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
};

export const FormHeader: FC<FormHeaderProps> = ({ isSignIn, setIsSignIn }) => {
  return (
    <div className="flex justify-between">
      <button
        onClick={() => setIsSignIn(true)}
        className={`flex items-center gap-2.5 font-black text-[20px] px-4 py-2 ${
          isSignIn ? "text-black" : "text-gray"
        }`}
      >
        <div
          className={`h-[12px] w-[12px] ${
            isSignIn ? "bg-flash-green" : "bg-gray"
          }`}
        ></div>
        <span>SIGN IN</span>
      </button>
      <button
        onClick={() => setIsSignIn(false)}
        className={`flex items-center gap-2.5 font-black text-[20px] px-4 py-2 ${
          !isSignIn ? "text-black" : "text-gray"
        }`}
      >
        <div
          className={`h-[12px] w-[12px] ${
            !isSignIn ? "bg-flash-green" : "bg-gray"
          }`}
        ></div>
        <span>SIGN UP</span>
      </button>
    </div>
  );
};
