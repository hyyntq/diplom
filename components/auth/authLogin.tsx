"use client";

import Link from "next/link";
import React, { useActionState } from "react";
import SubmitButton from "./SubmitButton";
import FormLink from "../ui/FormLink";
import { loginAction } from "@/data/auth-actions";


const AuthLogin = () => {

  const INITIAL_STATE = {
    identifier: null,
    password: null
  }

  const [formState, formAction] = useActionState(loginAction, INITIAL_STATE)


  return (
    <div className="max-w-md w-full bg-stone-800 py-12 px-13 text-zinc-300 rounded-xl shadow-xl">
      <form action={formAction} className="flex flex-col gap-10">
        <FormLink/>
        <div className="flex flex-col gap-6 mt-2">
          <div className="">
            <label htmlFor="identifier" className="auth-label">
              Login
            </label>
            <input
              type="text"
              className="input"
              placeholder="username or email"
              id="identifier"
              name="identifier"
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
            text="Login"
            className="cursor-pointer uppercase font-bold text-xl"
          />
        </div>
      </form>
      <div className="text-end mt-5 ">
        <Link href="/forgotPassword" className="text-primary underline hover:text-stone-400 transition">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default AuthLogin;
