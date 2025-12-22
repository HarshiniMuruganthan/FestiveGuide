import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    alert("Login successful");
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-royal p-8 rounded-xl w-96">
        <h2 className="text-2xl mb-4 text-gold">Login</h2>
        <input
          className="w-full mb-3 p-2 text-black"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-4 p-2 text-black"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={submit} className="bg-gold w-full py-2 text-black">
          Login
        </button>
      </div>
    </div>
  );
}
