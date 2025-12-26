// This page fetches blog data on the server
export default async function BlogsPageSSR() {
  // Simulated API data (JSON)
  const blogs = [
    {
      title: "Learn React",
      slug: "react",
      views: 120,
    },
    {
      title: "Learn Next.js",
      slug: "nextjs",
      views: 200,
    },
    {
      title: "Learn MongoDB",
      slug: "mongodb",
      views: 90,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">Blogs</h1>

      {/* Blog List */}
      <div className="grid gap-4 max-w-xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.slug} className="bg-white p-4 rounded shadow">
            {/* Blog title */}
            <h2 className="text-xl font-semibold">{blog.title}</h2>

            {/* Blog views */}
            <p className="text-gray-600">Views: {blog.views}</p>

            {/* Dynamic link to blog page */}
            <a
              href={`/blogs/${blog.slug}`}
              className="text-blue-600 mt-2 inline-block"
            >
              Read Blog →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
