import { motion } from "framer-motion";
import { Code, Palette, Zap, Rocket, Target, Lightbulb } from "lucide-react";

export default function Services() {

  const services = [
    {
      icon: <Code size={22} />,
      title: "Web Development",
      desc: "Building modern, responsive and fast web apps using React & Tailwind.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Palette size={22} />,
      title: "UI/UX Design",
      desc: "Designing clean, user-friendly and attractive interfaces.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Zap size={22} />,
      title: "Performance Optimization",
      desc: "Improving speed, performance and user experience.",
      color: "from-sky-500 to-blue-400",
    },
  ];

  const goals = [
    {
      icon: <Target />,
      year: "2024-2025",
      title: "Full Stack Developer",
      desc: "Master frontend + backend with real-world projects.",
    },
    {
      icon: <Rocket />,
      year: "2025",
      title: "Build SaaS",
      desc: "Launch my own product with real users.",
    },
    {
      icon: <Lightbulb />,
      year: "2025-2026",
      title: "Open Source",
      desc: "Contribute & grow in developer community.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-r from-white via-blue-50 to-gray-100"
    >

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold">
          Services I <span className="text-blue-600">Offer</span>
        </h2>
        <p className="text-gray-600 mt-3">
          Turning ideas into modern digital experiences
        </p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </div>

      {/* SERVICES */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mb-24">

        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.07, rotateY: 5 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 p-8 rounded-3xl shadow-xl hover:shadow-blue-200 transition duration-300"
          >

            {/* ICON */}
            <div className={`w-14 h-14 flex items-center justify-center text-white rounded-xl bg-gradient-to-r ${item.color}`}>
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mt-6 text-gray-800">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

      {/* GOALS */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          My <span className="text-blue-600">Vision & Goals</span>
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mb-24">

        {goals.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.08 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 p-8 rounded-3xl shadow-lg hover:shadow-blue-200 transition text-center"
          >

            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              {item.year}
            </span>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-14 h-14 flex items-center justify-center rounded-full mx-auto mt-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-bold mt-4 text-gray-800">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              {item.desc}
            </p>

            {/* Animated Progress */}
            <div className="w-full h-2 bg-gray-200 rounded-full mt-5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                transition={{ duration: 1 }}
                className="h-2 bg-blue-500 rounded-full"
              />
            </div>

          </motion.div>
        ))}

      </div>

      {/* LONG VISION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg border border-gray-200 p-10 rounded-3xl shadow-xl text-center"
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          My Long-term Vision
        </h3>

        <p className="text-gray-600 leading-relaxed">
          I aim to become a skilled full-stack developer and build impactful applications.
          My goal is to create solutions that solve real-world problems while continuously learning and growing.
        </p>
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">
          Let's <span className="text-blue-600">Connect</span>
        </h2>

        <p className="text-gray-600 mt-2">
          Have an idea or project? Let’s build something amazing together.
        </p>

        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg">
          Get In Touch
        </button>
      </div>

    </section>
  );
}