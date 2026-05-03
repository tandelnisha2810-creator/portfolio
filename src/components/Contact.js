import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-white via-blue-50 to-gray-100"
    >

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold">
          Let's <span className="text-blue-600">Connect</span>
        </h2>

        <p className="text-gray-600 mt-3">
          Have a project in mind? I'd love to hear from you!
        </p>

        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >

          {/* CARD ITEM */}
          {[
            {
              icon: <Mail />,
              title: "Email",
              value: "tandelnisha2810@gmail.com",
            },
            {
              icon: <Phone />,
              title: "Phone",
              value: "+91 9999999999",
            },
            {
              icon: <MapPin />,
              title: "Location",
              value: "India",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-md hover:shadow-blue-200 transition"
            >
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                {item.icon}
              </div>

              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className="font-semibold text-gray-800">
                  {item.value}
                </p>
              </div>
            </div>
          ))}

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 bg-blue-500 rounded-full hover:scale-110 transition"></div>
            <div className="w-10 h-10 bg-gray-800 rounded-full hover:scale-110 transition"></div>
            <div className="w-10 h-10 bg-cyan-500 rounded-full hover:scale-110 transition"></div>
            <div className="w-10 h-10 bg-red-500 rounded-full hover:scale-110 transition"></div>
          </div>

          <p className="text-gray-600 mt-6 text-sm leading-relaxed">
            I'm always open to new opportunities. Feel free to reach out anytime!
          </p>

        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200"
        >

          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full mb-4 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg">
            <Send size={18} />
            Send Message
          </button>

        </motion.div>

      </div>
    </section>
  );
}