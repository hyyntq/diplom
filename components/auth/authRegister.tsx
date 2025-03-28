"use client";

import React, { useActionState } from "react";
import SubmitButton from "./SubmitButton";
import { registerAction } from "@/data/auth-actions";
import FormLink from "../ui/FormLink";

const INITIAL_STATE = {
  username: null,
  password: null,
  email: null
};

const AuthRegister = () => {
  const [formState, formAction] = useActionState(registerAction, INITIAL_STATE);

  return (
    <div className="max-w-md w-full bg-stone-800 py-12 px-13 text-zinc-300 rounded-xl shadow-xl">
      <form action={formAction} className="flex flex-col gap-10 ">
        <FormLink />

        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="username" className="auth-label">
              Username
            </label>
            <input
              type="text"
              className="input"
              placeholder="username"
              id="username"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="email" className="auth-label">
              Email
            </label>
            <input
              type="email"
              className="input"
              placeholder="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="auth-label">
              Password
            </label>
            <input
              type="password"
              className="input"
              placeholder="password"
              id="password"
              name="password"
            />
          </div>
        </div>

        <div className="divider" />

        <div className="text-center p-3 rounded-xl cursor-pointer transition  bg-stone-400 text-stone-200 hover:opacity-80 duration-300">
          <SubmitButton
            text="Register"
            className="cursor-pointer uppercase font-bold text-xl rounded-xl w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AuthRegister;
