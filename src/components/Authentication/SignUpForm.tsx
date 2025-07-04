import React from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { Input } from "../Input";

export const SignUpForm: React.FC = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          className="flex flex-col items-center justify-center gap-3 w-full"
          action=""
          method="post"
        >
          <Input
            type="text"
            id="firstName"
            placeholder="First Name"
            style="p-2 bg-background-500 dark:bg-main-300 rounded-md text-main-100 w-full"
          />
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            style="p-2 bg-background-500 dark:bg-main-300 rounded-md text-main-100 w-full"
          />
          <Input
            type="email"
            id="email"
            placeholder="Email"
            style="p-2 bg-background-500 dark:bg-main-300 rounded-md text-main-100 w-full"
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            style="p-2 bg-background-500 dark:bg-main-300 rounded-md text-main-100 w-full"
          />
          <button
            className="px-2 py-1 bg-blue-500 rounded-md text-main-100 w-full cursor-pointer"
            type="submit"
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </form>
      </FormProvider>
    </>
  );
};
