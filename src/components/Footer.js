export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white via-blue-50 to-gray-100 text-gray-600 py-10 border-t">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">
            Nisha<span className="text-gray-800">.dev</span>
          </h2>

          <p className="text-sm mt-2 text-gray-500">
            Building the future, one line of code at a time
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="flex justify-center gap-6">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        {/* RIGHT */}
        <div className="text-center md:text-right text-sm text-gray-500">
          © 2026 Nisha. All rights reserved.
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-sm mt-6 text-gray-400">
        Designed & Built with ❤️ using React & Tailwind CSS
      </div>

    </footer>
  );
}