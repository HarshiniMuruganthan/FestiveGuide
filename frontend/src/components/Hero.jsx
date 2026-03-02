import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center px-6 pt-28 pb-32">
      
      {/* Glow Background */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Badge */}
      <span className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm backdrop-blur">
        ✨ Discover festivals near you
      </span>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
        Your Gateway to <br />
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Unforgettable Festival Experiences
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-gray-400 text-lg">
        Explore nearby festivals, book tickets instantly, and get confirmations
        delivered straight to your inbox.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          to="/explore"
          className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
        >
          Start Exploring →
        </Link>

        <Link
          to="/login"
          className="px-8 py-3 rounded-full border border-white/20 hover:border-white/40 transition backdrop-blur"
        >
          Sign In
        </Link>
      </div>
    </section>
  );
}
