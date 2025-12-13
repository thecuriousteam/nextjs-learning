import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      {/* NAVBAR visible on all pages */}
      <nav className="w-full bg-blue-600 text-white px-6 py-4 flex gap-6">
        {/* Each Link navigates to a different page */}
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
