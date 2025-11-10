function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-3">
        <ul className="flex justify-center gap-6 text-sm md:text-base font-medium text-slate-100">
          <li>
            <a href="#about" className="hover:text-indigo-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
