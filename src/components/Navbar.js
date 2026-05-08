import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(0);

  const navLinks = [
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Experience", link: "experience" },
    { name: "Education", link: "education" },
    { name: "Services", link: "services" },
    { name: "Contact", link: "contact" },
  ];

  // 🔥 Scroll logic
  useEffect(() => {

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);

      setScrolled(scrollTop > 20);

      navLinks.forEach((section) => {
        const el = document.getElementById(section.link);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;

          if (scrollTop >= top && scrollTop < top + height) {
            setActive(section.link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  },[navLinks]);

  // 🌙 Dark mode
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      {/* 🔥 SCROLL PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500 z-[9999]"
        style={{ width: `${progress}%` }}
      ></div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-white/40 backdrop-blur-md"
        }`}
      >

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* 🔥 Gradient Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Nisha.dev
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((item, i) => (
              <a
                key={i}
                href={`#${item.link}`}
                className={`relative transition duration-300
                ${active === item.link
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"}
                group`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                  ${active === item.link ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </a>
            ))}

            {/* 🌙 Dark Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

          </div>

          {/* BUTTON */}
          <a href="#contact">
            <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 hover:scale-105 transition">
              Get In Touch
            </button>
          </a>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-3">

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-gray-100"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {open ? (
              <X onClick={() => setOpen(false)} />
            ) : (
              <Menu onClick={() => setOpen(true)} />
            )}
          </div>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white shadow-md border-t">
            <div className="flex flex-col items-center gap-6 py-6">

              {navLinks.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.link}`}
                  onClick={() => setOpen(false)}
                  className={`text-lg
                  ${active === item.link
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"}`}
                >
                  {item.name}
                </a>
              ))}

              <a href="#contact">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                  Get In Touch
                </button>
              </a>

            </div>
          </div>
        )}

      </nav>
    </>
  );
}