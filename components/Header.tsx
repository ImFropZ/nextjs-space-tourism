import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative flex items-center justify-between p-10">
      <Image src="/assets/shared/logo.svg" alt="Logo" width={48} height={48} />
      {isMenuOpen ? (
        <Image
          src="/assets/shared/icon-close.svg"
          alt="Close Icon"
          width={20}
          height={21}
          className="z-20 h-7 w-7"
          onClick={handleMenu}
        />
      ) : (
        <Image
          src="/assets/shared/icon-hamburger.svg"
          alt="Hamburger Icon"
          width={24}
          height={21}
          className="h-6 w-8"
          onClick={handleMenu}
        />
      )}

      <nav
        className={`${
          isMenuOpen ? "fixed" : "hidden"
        } top-0 bottom-0 right-0 z-10 w-[65%] bg-[rgba(255,255,255,0.04)] text-white backdrop-blur-[40.7742px]`}
      >
        <div className="mt-32 flex flex-col gap-5 pl-10 font-barlowCondensed uppercase tracking-[2.7px]">
          <div
            className={
              router.pathname === "/"
                ? "after:content relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-1 after:bg-white"
                : ""
            }
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Link href="/">
              <span className="font-bold tracking-widest">00</span> Home
            </Link>
          </div>
          <div
            className={
              router.pathname.startsWith("/destination")
                ? "after:content relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-1 after:bg-white"
                : ""
            }
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Link href="/destination">
              <span className="font-bold tracking-widest">01</span> Destination
            </Link>
          </div>
          <div
            className={
              router.pathname.startsWith("/crew")
                ? "after:content relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-1 after:bg-white"
                : ""
            }
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Link href="/crew">
              <span className="font-bold tracking-widest">02</span> Crew
            </Link>
          </div>
          <div
            className={
              router.pathname.startsWith("/technology")
                ? "after:content relative after:absolute after:top-0 after:bottom-0 after:right-0 after:w-1 after:bg-white"
                : ""
            }
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Link href="/technology">
              <span className="font-bold tracking-widest">03</span> Technology
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
