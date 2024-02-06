import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState("hidden");

  return (
    <header className="sticky top-0 z-50 border-b-2 bg-beige">
      <section
        className={`${toggleMobileMenu == "hidden" ? "flex" : "hidden"} mx-auto max-w-4xl items-center justify-between p-6 md:flex`}
      >
        <a href=".">
          <img
            className="max-w-12 xs:max-w-20"
            src="src/assets/logo.png"
            alt="Our logo"
            srcSet=""
          />
        </a>
        <h1 className="xs:text-xl md:hidden">Keep Your Yard Clean</h1>
        <button
          id="hamburger-button"
          className=" cursor-pointer text-3xl md:hidden"
          onClick={() => setToggleMobileMenu("flex")}
        >
          &#9776;
        </button>
        <nav
          className="hidden h-12 content-center justify-center space-x-8 text-center text-xl hover:child:text-2xl hover:child:underline hover:child:opacity-90 md:flex"
          aria-label="main"
        >
          <a href="/">Home</a>
          {/* <a href="./pages/about">About</a> */}
          <a href="/services">Services</a>
          <a href="/services#faq">FAQ</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
        <Link
          reloadDocument
          to="/contact-us"
        >
          <button className="hidden rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:underline hover:opacity-90 md:block">
            Do Your Doody Duty!
          </button>
        </Link>
      </section>
      <section
        id="mobile-menu"
        className={`${toggleMobileMenu} absolute top-0 flex w-full origin-top animate-open-menu flex-col content-center justify-center bg-beige text-5xl text-off-black dark:bg-off-black dark:text-off-white`}
        onClick={() => setToggleMobileMenu("hidden")}
        role="button"
        tabIndex={0}
        onKeyUp={() => setToggleMobileMenu("hidden")}
      >
        <button className="self-end px-6 text-8xl">&times;</button>
        <nav
          className={`${toggleMobileMenu} min-h-screen w-full flex-col items-center space-y-16 py-8 text-center hover:child:text-6xl hover:child:underline hover:child:opacity-90`}
          aria-label="mobile"
        >
          {}
          <a href="/">Home</a>
          {/* <a href="./pages/about">About</a> */}
          <a href="/services">Services</a>
          <a href="/services#faq">FAQ</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
      </section>
    </header>
  );
}
