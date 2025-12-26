// This is JSON-like data (API-style data)
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

// parsing JSON

const blogData = blogs.forEach((blog) => {
  console.log(`Blog title: ${blog.title}, Blogs View: ${blog.views}`);
});
