import React from "react";
import Link from "next/link";

const BlogsDynamicRouting = () => {
  return (
    <div className="space-x-2 mt-2">
      <h1 className="text-3xl font-bold mb-2">Dynamic Routes Demo</h1>
      <Link
        href="/blogs/reactjs"
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        React JS
      </Link>
      <Link
        href="/blogs/nextjs"
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Next JS
      </Link>
      <Link
        href="/blogs/mongodb"
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Mongodb
      </Link>
    </div>
  );
};

export default BlogsDynamicRouting;
