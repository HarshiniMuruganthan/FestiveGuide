export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="text-xl font-bold text-primary">✨ Festive Guide</h1>
      <div className="space-x-6">
        <a href="/login">Sign In</a>
        <a className="bg-primary px-5 py-2 rounded-full" href="/register">
          Get Started
        </a>
      </div>
    </nav>
  );
}
