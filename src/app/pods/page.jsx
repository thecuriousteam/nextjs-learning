import React from "react";

const PodsPageSSR = () => {
  // Simulated API data (JSON)
  const pods = [
    {
      title: "Technology Pod",
      slug: "technology",
      views: 120,
      description:
        "Learn modern technology concepts in simple words. " +
        "Covers coding, software, AI, and real-world tech skills.",
    },
    {
      title: "Spirituality Pod",
      slug: "spirituality",
      views: 200,
      description:
        "Explore inner peace, mindfulness, and life purpose. " +
        "Focuses on clarity, discipline, and mental strength.",
    },
    {
      title: "Wellness Pod",
      slug: "wellness",
      views: 90,
      description:
        "Improve your physical and mental health step by step. " +
        "Includes fitness, nutrition, habits, and self-care.",
    },
    {
      title: "Business Pod",
      slug: "business",
      views: 90,
      description:
        "Understand business fundamentals in a practical way. " +
        "Covers startups, finance, marketing, and decision-making.",
    },
  ];

  return (
    <div className="min-h-screen bg-violet-300 p-7">
      {/* page title */}
      <h1 className="text-4xl font-bold mb-6 text-center">Pods</h1>

      <div className="grid gap-4 max-w-xl mx-auto">
        {/* inside card */}
        {pods.map((pod) => {
          return (
            <div
              key={pod.slug}
              className="border-2 rounded-xl p-2 bg-gray-50 shadow hover:shadow-orange-50"
            >
              <h2>{pod.title}</h2>
              <p>{pod.description}</p>
              <p>Views: {pod.views}</p>
              <button className="bg-purple-400 p-1 rounded">Join Now → </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PodsPageSSR;
