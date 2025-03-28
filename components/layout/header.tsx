import React from "react";
import GlassMagnifyingIcon from "../icons/magnifying-glass";
import Link from "next/link";
import Heart from "../icons/heart";
import Cart from "../icons/Cart";
import Image from "next/image";
import HeaderLink from "../ui/Header-Link";
import { getMe } from "@/services/get.me";
import { logoutButton } from "@/data/auth-actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = async () => {
  const user = await getMe();

  

  return (
    <header className="bg-gray-200">
      <div className="py-4 flex xl:gap-15 gap-8 container mx-auto   ">
        <Link href="/" className="flex items-center">
          <Image
            src="/img/Logo.svg"
            alt="Logo"
            width={128}
            height={128}
            className="object-contain max-w-none"
            priority
          />
        </Link>

        <form
          action=""
          className="flex justify-center items-center w-full px-5 p-3 gap-3 bg-stone-800 rounded-3xl "
        >
          <label htmlFor="Search" className="cursor-pointer">
            <GlassMagnifyingIcon size={24} />
          </label>
          <input
            type="text"
            placeholder="Search..."
            id="Search"
            className="flex w-full items-center justify-center font-medium p-1 outline-none text-md bg-zinc-200 rounded-3xl px-4"
          />
        </form>

        <HeaderLink />

        <div className="hidden lg:flex items-center justify-center xl:gap-10 gap-5">
          <div className="flex gap-5">
            <Link href="/favorites" className="icon-header">
              <Heart size={32} fill="black" />
            </Link>
            <Link href="/cart" className="icon-header">
              <Cart size={32} />
            </Link>
          </div>

          {!user?.ok && (
            <Link
              href="/login"
              className="py-2 px-4 border-2 border-stone-800  text-stone-800 hover:outline-none hover:bg-stone-800 hover:text-zinc-300 rounded-xl font-medium text-lg text-nowrap transition-all duration-400"
            >
              <h1 className="uppercase">Sign in</h1>
            </Link>
          )}
          {user?.data && (
            <div className="flex gap-2 items-center">
              {user.data.username}
              <form action={logoutButton}>
                <button className="cursor-pointer bg-red-400 p-3 px-5 text-zinc-200 rounded-full">
                  Logout
                </button>
              </form>
            </div>
          )}
        </div>

        <button className="block lg:hidden">
          <FontAwesomeIcon icon={faBars} className="text-5xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
