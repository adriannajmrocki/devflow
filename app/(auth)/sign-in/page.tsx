"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import React from "react";

const SignIn = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={defaultValues}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignIn;
