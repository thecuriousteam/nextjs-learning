import BlogsDynamicRouting from "../day-7/blogsDynamicRouting";

export default function HelloCard({ name, age }) {
  return (
    <div className="p-4 bg-blue-600 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Hello, {name}! 👋</h1>
      <p className="mt-2 text-sm">Age: {age}</p>
      <p className="mt-1 text-sm">
        Welcome to learning Next.js with JavaScript!
      </p>

      {/* dynamic routing */}
      <BlogsDynamicRouting />
    </div>
  );
}
