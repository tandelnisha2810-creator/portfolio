import { motion } from "framer-motion";

// fallback image (agar koi image load fail ho)
const fallback =
  "https://via.placeholder.com/800x500?text=Project+Image";

// ================= PROJECT DATA =================

const projects = [
  {
    title: "Eye Care App",
    desc: "Android mobile application built using Java for eye health tracking and reminders.",
    tech: ["Java", "Android", "SQLite"],
    img: "https://images.unsplash.com/photo-1581091870627-3c9f6f7b5d63?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Recipe Finder",
    desc: "API-based application to search recipes with modern UI and fast results.",
    tech: ["React", "API", "Tailwind CSS"],
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Chat App",
    desc: "Real-time chatbot using AI with clean UI and fast response system.",
    tech: ["React", "Node.js", "OpenAI"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Weather Dashboard",
    desc: "Weather app showing real-time data using APIs with responsive UI.",
    tech: ["React", "Weather API", "Chart.js"],
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React and Tailwind with modern UI.",
    tech: ["React", "Tailwind", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Student Management App",
    desc: "Mobile app to manage student records built with Kotlin & SQLite.",
    tech: ["Kotlin", "Android", "SQLite"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
];

// ================= CARD =================

function ProjectCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-blue-200 transition duration-300"
    >
      {/* IMAGE */}
      <div className="overflow-hidden relative">
        <img
          src={p.img}
          alt={p.title}
          onError={(e) => (e.target.src = fallback)} // 🔥 important fix
          className="h-52 w-full object-cover transition duration-500 hover:scale-110"
        />

        {/* hover overlay */}
        <div className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/10 transition"></div>
      </div>

      {/* CONTENT */}
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {p.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {p.desc}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ================= MAIN =================

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-r from-white via-blue-50 to-gray-100"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold">
          Featured <span className="text-blue-600">Projects</span>
        </h2>

        <p className="text-gray-600 mt-4">
          A selection of projects that demonstrate my skills and passion.
        </p>

        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} i={i} />
        ))}
      </div>

      {/* BUTTON */}
      <div className="text-center mt-16">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-lg">
          View All Projects →
        </button>
      </div>
    </section>
  );
}