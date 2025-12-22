import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await api.post("/auth/register", form);
    alert("Registered successfully");
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-royal p-8 rounded-xl w-96">
        <h2 className="text-2xl mb-4 text-gold">Register</h2>
        <input className="w-full mb-2 p-2 text-black" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="w-full mb-2 p-2 text-black" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="w-full mb-4 p-2 text-black" type="password" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button onClick={submit} className="bg-gold w-full py-2 text-black">
          Register
        </button>
      </div>
    </div>
  );
}
