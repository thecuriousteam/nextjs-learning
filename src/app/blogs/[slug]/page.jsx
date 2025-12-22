// dynamic routing concept
// params contains route parameters like id
// Mark the component as async because params is async
export default async function BlogPage({ params }) {
  // Wait for params to resolve before using it
  const { slug } = await params;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100">
      {/* Now slug WILL print correctly */}
      <h1 className="text-4xl font-bold text-purple-700">Blog Slug: {slug}</h1>

      <p className="mt-4 text-lg text-gray-700 text-center">
        This page is dynamically generated based on the URL.
      </p>
    </div>
  );
}
