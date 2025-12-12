import HelloCard from "@/components/day-1/HelloCard";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <HelloCard name={"Nandan"} age={24} />
    </main>
  );
}
