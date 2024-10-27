
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

type Props = {};

const SignInButton = (props: Props) => {
  return (
    <p
      className="text-black font-medium text-[14px]"
      onClick={() => {
        signIn("google");
      }}
    >
      Sign In
    </p>
  );
};

export default SignInButton;
