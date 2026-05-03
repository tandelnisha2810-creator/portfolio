import { motion } from "framer-motion";
import { Briefcase, Code } from "lucide-react";

export default function Experience() {

  const timeline = [
    {
      type: "WORK",
      icon: <Briefcase size={18} />,
      title: "Mobile & Web Developer",
      subtitle: "Personal Projects",
      year: "2023 - Present",
      desc: "Building Android apps using Java, Kotlin & Flutter and developing modern web applications using React and Node.js.",
      skills: ["React", "Node.js", "Flutter", "Kotlin", "Java"],
    },
    {
      type: "LEARNING",
      icon: <Code size={18} />,
      title: "Full Stack Development",
      subtitle: "Self Learning",
      year: "2022 - Present",
      desc: "Learning frontend, backend, APIs and databases with hands-on projects.",
      skills: ["React", "APIs", "MongoDB", "MySQL"],
    },
    {
      type: "PROJECT",
      icon: <Code size={18} />,
      title: "SmartTrip – AI Tourism Guide",
      subtitle: "Major Project",
      year: "2024",
      desc: "Developed AI-based tourism guide generating personalized travel plans.",
      skills: ["React", "Node.js", "AI"],
    },
    {
      type: "PROJECT",
      icon: <Code size={18} />,
      title: "Spam Email Detection",
      subtitle: "Machine Learning",
      year: "2024",
      desc: "Built spam detection using NLP & machine learning algorithms.",
      skills: ["Python", "NLP", "ML"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-r from-white via-blue-50 to-gray-100"
    >

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold">
          My <span className="text-blue-600">Journey</span>
        </h2>

        <p className="text-gray-600 mt-3">
          Milestones and experiences that shaped my career
        </p>

        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div>

        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`mb-16 flex ${isLeft ? "justify-start" : "justify-end"}`}
            >

              {/* CARD */}
              <div className="w-full md:w-1/2 relative">

                <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-blue-200 transition">

                  {/* ICON */}
                  <div className={`absolute top-6 ${isLeft ? "-right-6" : "-left-6"} 
                    bg-blue-600 text-white p-3 rounded-full shadow-lg`}>
                    {item.icon}
                  </div>

                  <p className="text-sm text-blue-600 font-semibold">
                    {item.type}
                  </p>

                  <h3 className="text-xl font-bold mt-1 text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-blue-500 text-sm">
                    {item.subtitle}
                  </p>

                  <p className="text-gray-400 text-sm mb-2">
                    {item.year}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}