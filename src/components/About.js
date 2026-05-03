import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-gray-100 via-white to-blue-50 px-4"
    >

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="text-blue-600">My Journey</span>
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto backdrop-blur-lg bg-white/80 border border-gray-200 p-10 rounded-3xl shadow-xl text-gray-700 leading-relaxed"
      >
        <p className="mb-6 text-lg">
          My journey in development started with curiosity—exploring how mobile apps and websites work.
          What began with Android development using Java evolved into a strong passion for building
          modern, user-friendly digital experiences.
        </p>

        <p className="mb-6 text-lg">
          I specialize in <span className="text-blue-600 font-semibold">Mobile App Development</span> using Java and Flutter,
          and build modern web applications using React and Tailwind CSS.
          I love creating solutions that are both functional and visually appealing.
        </p>

        <p className="text-lg">
          As a fresher developer, I bring fresh ideas, strong problem-solving skills, and a continuous learning mindset.
          My goal is to grow into a full-stack developer while mastering mobile-first development.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-blue-300 transition"
        >
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="font-bold text-lg">Passionate Learner</h3>
          <p className="text-gray-500 text-sm mt-2">
            Always exploring new technologies in mobile & web development
          </p>
        </motion.div>

        {/* Card 2 (Highlight Blue Gradient) */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-2xl shadow-lg text-center"
        >
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="font-bold text-lg">Problem Solver</h3>
          <p className="text-sm mt-2">
            Turning real-world problems into efficient digital solutions
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-blue-300 transition"
        >
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="font-bold text-lg">Fast Implementor</h3>
          <p className="text-gray-500 text-sm mt-2">
            Quickly converting ideas into real working applications
          </p>
        </motion.div>

      </div>

    </section>
  );
} 