function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-4">
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
