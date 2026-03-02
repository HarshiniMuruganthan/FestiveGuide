import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: name.trim(),
          email: email.trim(),
          password,
          role: "customer", // ✅ must match enum in User model
        }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/explore");

    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0612] via-[#160a2a] to-black text-white">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10">

        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account 🎉
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Join Festive Guide today
        </p>

        {error && (
          <p className="bg-red-500/10 text-red-400 text-sm p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition py-3 rounded-lg font-semibold shadow-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}