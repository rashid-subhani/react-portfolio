import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-500">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

