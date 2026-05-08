import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Globe, Mail } from "lucide-react";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

// ✅ MOVE OUTSIDE COMPONENT
const roles = [
  "🚀 Full Stack Web Developer",
  "📱 Mobile App Developer (Flutter & Android)",
  "⚡ React.js Frontend Specialist",
  "🎯 Building Scalable & Modern Applications"
];

export default function Hero() {

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {

    if (forward) {

      if (subIndex < roles[index].length) {

        setTimeout(() => setSubIndex(subIndex + 1), 70);

      } else {

        setTimeout(() => setForward(false), 1200);

      }

    } else {

      if (subIndex > 0) {

        setTimeout(() => setSubIndex(subIndex - 1), 40);

      } else {

        setForward(true);
        setIndex((prev) => (prev + 1) % roles.length);

      }
    }

    setText(roles[index].substring(0, subIndex));

  }, [subIndex, index, forward]);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-white via-blue-50 to-gray-100 px-6 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">

        <div className="w-72 h-72 bg-blue-300 opacity-20 blur-3xl rounded-full absolute top-10 left-10"></div>

        <div className="w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full absolute bottom-10 right-10"></div>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Animated Roles */}
          <p className="text-blue-600 font-semibold mb-4 h-6 tracking-wide">
            {text}
            <span className="animate-pulse">|</span>
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-600">
              Nisha
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-xl mb-8 text-lg leading-relaxed">

            I am a passionate developer who transforms ideas into modern digital experiences.
            Skilled in React, Flutter, Kotlin, and Java, I build scalable web and mobile
            applications with clean UI, smooth performance, and user-focused design.

          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap mb-8">

            <a href="#contact">
              <button className="bg-blue-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
                Hire Me
              </button>
            </a>

            <a href="#projects">
              <button className="border-2 border-blue-600 text-blue-600 px-7 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                View Work
              </button>
            </a>

            <a href={resume} download>
              <button className="bg-white border border-gray-300 px-7 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300">
                Download Resume
              </button>
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/tandelnisha2810-creator"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition duration-300 cursor-pointer">
                <Globe />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tandel-nisha-238881405/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-100 hover:scale-110 transition duration-300 cursor-pointer">
                <Globe />
              </div>
            </a>

            {/* Email */}
            <a href="mailto:tandelnisha2810@gmail.com">
              <div className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-100 hover:scale-110 transition duration-300 cursor-pointer">
                <Mail />
              </div>
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>

            {/* Profile Image */}
            <motion.img
              src={profile}
              alt="profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl relative"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}