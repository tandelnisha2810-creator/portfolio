import { motion } from "framer-motion";

// fallback image (agar koi image load fail ho)
const fallback =
  "https://via.placeholder.com/800x500?text=Project+Image";

// ================= PROJECT DATA =================

const projects = [
  {
    title: "Eye Care App",
    desc: "Android application developed using Java to help users maintain eye health with reminders, exercises, and daily tracking.",
    tech: ["Java", "Android Studio", "SQLite"],
    img: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  {
    title: "Recipe Finder",
    desc: "Responsive web application that allows users to search recipes using a public API with a clean and modern user interface.",
    tech: ["React", "API", "Tailwind CSS"],
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  {
    title: "Smart MP3 Cutter",
    desc: "Flutter-based mobile application that allows users to trim MP3 files, merge audio, preview music, and manage audio files with a clean modern interface.",
    tech: ["Flutter", "Dart", "FFmpeg", "Hive", "Firebase"],
    img: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  {
    title: "SmartTrip AI",
    desc: "AI-powered travel planner that generates complete travel itineraries using Gemini AI with maps, destination recommendations, budgeting, and trip management.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Gemini AI",
      "Express",
      "Tailwind CSS",
    ],
    img: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  {
    title: "StudyGenie AI",
    desc: "AI Study Assistant that helps students generate notes, summaries, quizzes, flashcards, and answers using Gemini AI with Firebase authentication.",
    tech: [
      "React Native",
      "Expo",
      "Firebase",
      "MongoDB",
      "Gemini AI",
      "Node.js",
    ],
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  {
    title: "InstaMate Pro",
    desc: "Instagram toolkit that allows users to download Instagram posts, reels, stories, profile images, hashtags, and media information with a modern dashboard.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "REST API",
    ],
    img: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-blue-200 transition duration-300 transition-colors"
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
<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
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
      className="py-24 bg-gradient-to-r from-white via-blue-50 to-gray-100 dark:bg-gray-950 dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-900/80 transition-colors duration-300"
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