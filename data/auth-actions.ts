"use server";
import { prevStateLogin, prevStateRegister } from "@/lib/interface";
import { loginService, registerService } from "@/services/auth-service";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { z } from "zod";

const cookieConfig = {
  maxAge: 14 * 24 * 3600,
  path: "/",
  domain: "localhost",
  httpOnly: true,
  secure: false,
};

const messageUsername = "Имя должно содержать от 3 до 20 символов";
const messagePassword = "Пароль должен содержать от 6 до 100 символов";
const messageEmail = "введите корректный Email";
const messageIdentifier =
  "Имя пользователя должно содержать не менее 3 символов";

const schemaRegister = z.object({
  username: z
    .string()
    .min(3, {
      message: messageUsername,
    })
    .max(20, {
      message: messageUsername,
    }),

  email: z.string().email({
    message: messageEmail,
  }),

  password: z
    .string()
    .min(6, {
      message: messagePassword,
    })
    .max(100, {
      message: messagePassword,
    }),
});

export async function registerAction(
  prevState: prevStateRegister,
  formData: FormData
) {
  const authData = schemaRegister.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!authData.success) {
    return {
      ...prevState,
      ZodError: authData.error.flatten().fieldErrors,
      strapiError: null
    };
  }

  const response = await registerService(authData.data);

  if (!response) {
    return {
      ...prevState,
      ZodError: null,
      strapiError: null,
      message: "Что-то пошло не так",
    };
  }

  if (response.error) {
    return {
      ...prevState,
      ZodError: null,
      strapiError: response.error,
      message: "Что-то пошло не так",
    };
  }

  const cookieStore = await cookies();
  cookieStore.set("jwt", response.jwt, cookieConfig);
  redirect("/");
}

//LOGIN

const schemaLogin = z.object({
  identifier: z.string().min(3, {
    message: messageIdentifier,
  }),

  password: z
    .string()
    .min(6, {
      message: messagePassword,
    })
    .max(100, {
      message: messagePassword,
    }),
});

export async function loginAction(
  prevState: prevStateLogin,
  formData: FormData
) {
  const authData = schemaLogin.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  if (!authData.success) {
    return {
      ...prevState,
      ZodError: authData?.error?.flatten(),
      strapiError: null,
    };
  }

  const response = await loginService(authData.data);

  if (!response) {
    return {
      ...prevState,
      ZodError: null,
      strapiError: null,
      message: "Что-то пошло не так",
    };
  }
  if (response.error) {
    return {
      ...prevState,
      ZodError: null,
      strapiError: response.error,
      message: null,
    };
  }
  
  
  const cookieStore = await cookies()
  cookieStore.set('jwt', response.jwt, cookieConfig)

  redirect("/")
}

export async function logoutButton() {
  const cookieStore = await cookies()
  cookieStore.delete('jwt');
  redirect('/')
}
