import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 transition-colors duration-300
      bg-gradient-to-r
      from-gray-100 via-white to-blue-50
      dark:from-gray-950 dark:via-gray-900 dark:to-black"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          About <span className="text-blue-600">My Journey</span>
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Get to know more about my journey and passion for technology.
        </p>

        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="
        max-w-5xl
        mx-auto
        backdrop-blur-lg
        bg-white/80
        dark:bg-gray-900/80
        border
        border-gray-200
        dark:border-gray-700
        p-10
        rounded-3xl
        shadow-xl
        transition-all
        duration-300"
      >
        <p className="mb-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
          My journey in development started with curiosity—exploring how
          mobile applications and websites work. What began with Android
          development using Java has grown into a strong passion for creating
          modern, user-friendly, and scalable digital experiences.
        </p>

        <p className="mb-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
          I specialize in{" "}
          <span className="text-blue-600 font-semibold">
            Mobile App Development
          </span>{" "}
          using Java, Kotlin and Flutter, while also building modern web
          applications using React.js, Node.js and Tailwind CSS. I enjoy
          creating applications that combine beautiful UI with excellent
          performance.
        </p>

        <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
          As an MCA student and fresher developer, I constantly learn new
          technologies and improve my problem-solving skills. My goal is to
          become a professional Full Stack & Mobile Application Developer who
          builds innovative products that create real-world impact.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

        {/* Card 1 */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -8,
          }}
          className="
          bg-white
          dark:bg-gray-900
          border
          border-gray-200
          dark:border-gray-700
          p-8
          rounded-2xl
          shadow-lg
          text-center
          transition-all
          duration-300"
        >
          <div className="text-5xl mb-5">🧠</div>

          <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
            Passionate Learner
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            Continuously learning modern technologies in Mobile App
            Development, Full Stack Development and Artificial Intelligence.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -8,
          }}
          className="
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          text-white
          p-8
          rounded-2xl
          shadow-2xl
          text-center"
        >
          <div className="text-5xl mb-5">🚀</div>

          <h3 className="font-bold text-xl mb-3">
            Problem Solver
          </h3>

          <p>
            I enjoy solving real-world challenges by building efficient,
            scalable and user-friendly software solutions.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -8,
          }}
          className="
          bg-white
          dark:bg-gray-900
          border
          border-gray-200
          dark:border-gray-700
          p-8
          rounded-2xl
          shadow-lg
          text-center
          transition-all
          duration-300"
        >
          <div className="text-5xl mb-5">⚡</div>

          <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
            Fast Implementer
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            Transforming ideas into responsive, high-quality web and mobile
            applications with clean code and modern UI.
          </p>
        </motion.div>

      </div>
    </section>
  );
}