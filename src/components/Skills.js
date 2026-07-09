import { motion } from "framer-motion";
import {
  Code,
  Database,
  Palette,
  Settings,
  Smartphone,
  Server,
} from "lucide-react";
// ================= DATA =================

const frontend = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },

];

const mobile = [
  { name: "Java (Android)", level: 90 },
  { name: "Kotlin", level: 90 },
  { name: "Flutter", level: 90 },
  { name: "React Native (Expo)", level: 80 },
  { name: "Firebase", level: 85 },
];

const backend = [
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 80 },
  { name: "REST APIs", level: 85 },
];

const database = [
  { name: "MongoDB", level: 80 },
  { name: "MySQL", level: 85 },
  { name: "SQLite", level: 90 },
];

const uiux = [
  { name: "Figma", level: 80 },
  { name: "Responsive Design", level: 90 },
  { name: "UI Principles", level: 85 },
  { name: "Framer Motion", level: 88 },
];

const tools = [
  { name: "Git/GitHub", level: 88 },
  { name: "VS Code", level: 95 },
  { name: "Postman", level: 85 },
  { name: "Android Studio", level: 90 },
];

// ================= SKILL BAR =================

function SkillBar({ skill }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">{skill.name}</span>
        <span className="text-blue-600 font-semibold">{skill.level}%</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden transition-colors duration-300">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

// ================= CARD =================

function Card({ title, icon, data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.04 }}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-xl hover:shadow-blue-200 transition transition-colors"
    >
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 text-white rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      {/* SKILLS */}
      <div className="space-y-5">
        {data.map((s, i) => (
          <SkillBar key={i} skill={s} />
        ))}
      </div>
    </motion.div>
  );
}

// ================= MAIN =================

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-r from-white via-blue-50 to-gray-100 dark:bg-gray-950 dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-900/80 transition-colors duration-300"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Skills & <span className="text-blue-600">Expertise</span>
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          A mix of modern mobile & web technologies
        </p>

        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">

  <Card
    title="Frontend Development"
    icon={<Code />}
    data={frontend}
  />

  <Card
    title="Mobile Development"
    icon={<Smartphone />}
    data={mobile}
  />

  <Card
    title="Backend Development"
    icon={<Server />}
    data={backend}
  />

  <Card
    title="Database"
    icon={<Database />}
    data={database}
  />

  <Card
    title="UI/UX Design"
    icon={<Palette />}
    data={uiux}
  />

  <Card
    title="Tools & Technologies"
    icon={<Settings />}
    data={tools}
  />

</div>
      {/* TAGS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 text-center"
      >
        <h3 className="text-lg font-semibold mb-8 text-gray-700 dark:text-gray-200 transition-colors duration-300">
          Quick Skills Overview
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {
         [
  "Java",
  "Kotlin",
  "Flutter",
  "React.js",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "SQLite",
  "Firebase",
  "REST APIs",
  "Git",
  "GitHub",
  "Android Studio",
  "VS Code",
]
          .map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2 rounded-full text-white text-sm 
              bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md cursor-pointer"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}