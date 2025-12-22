import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-navy border-b border-royal px-8 py-4 flex justify-between">
      <h1 className="text-xl font-bold text-gold">Festive Guide</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gold">Home</Link>
        <Link to="/festivals" className="hover:text-gold">Festivals</Link>
        <Link to="/login" className="hover:text-gold">Login</Link>
        <Link to="/register" className="hover:text-gold">Register</Link>
      </div>
    </nav>
  );
}
