import Image from "next/image";

export default function Home() {
  return (
   <section className="min-h-screen  bg-gradient-to-r from-gray-50 to-sky-50 text-white py-24 px-6 flex items-center justify-center">
  <div className="text-center max-w-3xl">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-black">Welcome to My Blog</h1>
    <p className="text-lg md:text-xl text-black">
      Explore inspiring stories, daily insights, and the latest updates — a new blog every day!
    </p>
    <button className="mt-8 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition">
      Read Latest Posts
    </button>
  </div>
</section>


  );
}
