import { LoginProps, RegisterProps } from "@/lib/interface";

const baseURL: string = "http://localhost:1337"

export async function registerService(userData: RegisterProps) {
  const url = new URL("/api/auth/local/register", baseURL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({... userData})
    })

    return response.json()

  } catch (error) {
    console.log(error);
  }
}

export async function loginService(userData: LoginProps) {
  const url = new URL("/api/auth/local", baseURL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({... userData})
    })

    return response.json()

  } catch (error) {
    console.log(error);
  }
}