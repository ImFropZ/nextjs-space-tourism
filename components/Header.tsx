import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(true);
  const router = useRouter();

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative flex items-center justify-between p-10 sm:mb-10 sm:p-0 sm:pl-10">
      <Image src="/assets/shared/logo.svg" alt="Logo" width={48} height={48} />
      <div className="hidden lg:block lg:w-full lg:translate-x-20 lg:z-20 bg-white/25 lg:h-[1px]" />
      <div className="sm:hidden">
        {isMenuOpen ? (
          <Image
            src="/assets/shared/icon-close.svg"
            alt="Close Icon"
            width={20}
            height={21}
            className="z-20"
            onClick={handleMenu}
          />
        ) : (
          <Image
            src="/assets/shared/icon-hamburger.svg"
            alt="Hamburger Icon"
            width={24}
            height={21}
            onClick={handleMenu}
          />
        )}
      </div>

      <nav
        className={`${
          !isMenuOpen ? "hidden" : ""
        } sm:after:content fixed top-0 bottom-0 right-0 z-10 w-[65%] bg-black/[0.04] py-10 text-white backdrop-blur-[40.7742px] sm:static sm:block sm:bg-transparent sm:w-auto sm:after:absolute sm:after:inset-0 sm:after:-z-10 sm:after:bg-white/[0.04] sm:after:blur-[40.7742px] lg:my-10 lg:pr-72 lg:pl-32`}
      >
        <div className="mt-32 flex flex-col gap-5 pl-10 font-barlowCondensed uppercase tracking-[2.7px] sm:mr-5 sm:mt-0 sm:flex-row sm:justify-end sm:gap-10">
          <Link
            href="/"
            className={`${
              router.pathname === "/"
                ? "after:content relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[4px] after:bg-white sm:after:left-0 sm:after:top-auto sm:after:-bottom-10 sm:after:h-[3px] sm:after:w-full"
                : ""
            } lg:flex
            `}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <span className="font-bold tracking-widest sm:hidden lg:inline lg:mr-3">
              00
            </span>{" "}
            Home
          </Link>
          <Link
            href="/destination"
            className={`${
              router.pathname.startsWith("/destination")
                ? "after:content relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[4px] after:bg-white sm:after:left-0 sm:after:top-auto sm:after:-bottom-10 sm:after:h-[3px] sm:after:w-full"
                : ""
            } lg:flex
            `}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <span className="font-bold tracking-widest sm:hidden lg:inline lg:mr-3">
              01
            </span>{" "}
            Destination
          </Link>
          <Link
            href="/crew"
            className={`${
              router.pathname.startsWith("/crew")
                ? "after:content relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[4px] after:bg-white sm:after:left-0 sm:after:top-auto sm:after:-bottom-10 sm:after:h-[3px] sm:after:w-full"
                : ""
            } lg:flex
            `}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <span className="font-bold tracking-widest sm:hidden lg:inline lg:mr-3">
              02
            </span>{" "}
            Crew
          </Link>
          <Link
            href="/technology"
            className={`${
              router.pathname.startsWith("/technology")
                ? "after:content relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[4px] after:bg-white sm:after:left-0 sm:after:top-auto sm:after:-bottom-10 sm:after:h-[3px] sm:after:w-full"
                : ""
            } lg:flex
            `}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <span className="font-bold tracking-widest sm:hidden lg:inline lg:mr-3">
              03
            </span>{" "}
            Technology
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
