import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          TaskTracker
        </Link>
        <Link
          to="/add"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
        >
          Add Task
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;