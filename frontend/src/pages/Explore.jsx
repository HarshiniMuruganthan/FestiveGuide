import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Explore() {
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const res = await axios.get("/api/festivals");
        setFestivals(res.data);
      } catch (err) {
        setError("Unable to fetch festivals");
      } finally {
        setLoading(false);
      }
    };

    fetchFestivals();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#12061f] to-black text-white">
      <Navbar />

      <div className="px-8 md:px-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center gap-2">
          🎉 Explore Festivals
        </h1>
        <p className="text-gray-400 mb-12">
          Festivals added by admin, ready to be explored and booked.
        </p>

        {loading && (
          <p className="text-purple-400 text-lg animate-pulse">
            Loading festivals...
          </p>
        )}

        {error && (
          <p className="text-red-400 text-lg">{error}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {festivals.map((festival) => (
            <div
              key={festival._id}
              className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500 transition"
            >
              <h2 className="text-2xl font-semibold mb-3">
                {festival.name}
              </h2>

              <div className="text-sm text-gray-400 space-y-1 mb-4">
                <p>📍 {festival.location}</p>
                <p>📅 {new Date(festival.date).toDateString()}</p>
              </div>

              <p className="text-gray-300 mb-6 line-clamp-3">
                {festival.description}
              </p>

              <button
                onClick={() =>
                  navigate(`/book/${festival._id}`)
                }
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:opacity-90 transition"
              >
                Book Tickets
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
