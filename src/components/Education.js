import { motion } from "framer-motion";
import { GraduationCap, Target } from "lucide-react";

export default function Education() {

  const education = [
    {
      title: "Master of Computer Applications (MCA)",
      college: "Uka Tarsadia University",
      field: "Full Stack Development",
      year: "2025 - Present",
      gpa: "Pursuing",
      courses: ["React", "Node.js", "Mobile Dev", "Database"],
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      college: "VNSGU",
      field: "Computer Applications",
      year: "2022 - 2025",
      gpa: "CGPA: 8.54",
      courses: ["DSA", "Web Development", "Programming"],
    },
  ];

  const certificates = [
    { title: "React Complete Guide", platform: "Udemy", year: "2023" },
    { title: "JavaScript Mastery", platform: "freeCodeCamp", year: "2023" },
    { title: "Responsive Web Design", platform: "freeCodeCamp", year: "2022" },
    { title: "Full Stack Development", platform: "Coursera", year: "2023" },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-r from-white via-blue-50 to-gray-100"
    >

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold">
          Education &{" "}
          <span className="text-blue-600">Certifications</span>
        </h2>

        <p className="text-gray-600 mt-3">
          My academic journey and professional growth
        </p>

        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </div>

      {/* EDUCATION */}
      <h3 className="text-2xl font-semibold text-center mb-12 text-gray-800">
        Education
      </h3>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-blue-200 transition"
          >

            {/* ICON */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <GraduationCap size={20} />
              </div>

              <p className="text-sm text-blue-600 font-semibold">
                EDUCATION
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              {item.college}
            </p>

            <p className="text-gray-500 text-sm">
              {item.field}
            </p>

            <div className="flex justify-between mt-3 text-sm text-gray-500">
              <span>{item.year}</span>
              <span className="text-blue-600 font-semibold">
                {item.gpa}
              </span>
            </div>

            {/* COURSES */}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.courses.map((course, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
                >
                  {course}
                </span>
              ))}
            </div>

            {/* LINE */}
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mt-5 rounded"></div>

          </motion.div>
        ))}

      </div>

      {/* CERTIFICATIONS */}
      <h3 className="text-2xl font-semibold text-center mt-20 mb-12 text-gray-800">
        Certifications & Badges
      </h3>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

        {certificates.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.08 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-blue-200 transition"
          >

            {/* ICON */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-14 h-14 flex items-center justify-center rounded-full mx-auto">
              <Target />
            </div>

            <h4 className="mt-4 font-semibold text-gray-800">
              {item.title}
            </h4>

            <p className="text-gray-500 text-sm">
              {item.platform}
            </p>

            <p className="text-blue-600 text-sm font-medium">
              {item.year}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}