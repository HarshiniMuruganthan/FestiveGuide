import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gold">
          Celebrate India, One Festival at a Time
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Discover, book, and experience India’s grandest festivals with ease.
        </p>
        <Link
          to="/festivals"
          className="bg-royal px-8 py-3 rounded-lg text-white hover:bg-gold hover:text-black transition"
        >
          Explore Festivals
        </Link>
      </div>
    </div>
  );
}
