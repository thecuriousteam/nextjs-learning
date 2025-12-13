import React from "react";

// import Link component from next js
import Link from "next/link";
import HelloCard from "../day-1/HelloCard";

const LinkPages = () => {
  return (
    // Main page container
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>

      {/* Navigation Link */}
      <Link
        href="/about"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to About Page
      </Link>

      {/* Another Navigation Link */}
      <Link
        href="/contact"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Go to Contact Page
      </Link>

      <HelloCard name={"Nandan"} age={24} />
    </main>
  );
};
export default LinkPages;
