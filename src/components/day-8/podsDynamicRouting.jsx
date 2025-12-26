import React from "react";
import Link from "next/link";
const PodsDynamicRoutingEntery = () => {
  return (
    <div className="space-x-2 mt-2">
      <h1 className="text-3xl font-bold mb-2">Revamp Dynamic Routes</h1>

      <Link
        href="/pods/technology"
        className="
      px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Technology Pod
      </Link>

      <Link
        href="/pods/spirituality"
        className="
      px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Spirituality Pod
      </Link>
      <Link
        href="/pods/wellness"
        className="
      px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Wellness Pod
      </Link>

      <Link
        href="/pods/business"
        className="
      px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Business Pod
      </Link>
    </div>
  );
};

export default PodsDynamicRoutingEntery;
