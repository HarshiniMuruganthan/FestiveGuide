import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Festivals() {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    api.get("/festivals").then(res => setFestivals(res.data));
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {festivals.map(f => (
        <div key={f._id} className="bg-royal p-6 rounded-xl">
          <h3 className="text-xl text-gold">{f.name}</h3>
          <p>{f.location}</p>
          <p>{new Date(f.date).toDateString()}</p>
          <Link to="/book" className="text-gold mt-3 inline-block">
            Book Now →
          </Link>
        </div>
      ))}
    </div>
  );
}
