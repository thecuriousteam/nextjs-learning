// This is the About page component
// Next.js will load this page when user visits: /about
export default function AboutPage() {
  return (
    // A simple container styled with Tailwind CSS
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      {/* Main heading */}
      <h1 className="text-4xl font-bold text-green-700">About Us</h1>

      {/* Paragraph text */}
      <p className="mt-4 text-lg text-gray-700 max-w-md text-center">
        This page is created using Next.js routing. Routing means creating
        different pages for your website, just like rooms in a building.
      </p>
    </div>
  );
}
