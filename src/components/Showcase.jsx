import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Showcase() {
  return (
    <section
      className="
        py-20 
        bg-gradient-to-br 
        from-[#f3e8ff] 
        via-[#e8d6ff] 
        to-[#f0e6ff]
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">

        {/* Left: App Mockup */}
        <motion.div
          className="flex-1 mb-12 md:mb-0 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="yarapaynewlogo.png"
            alt="App"
            className="
              w-[280px] md:w-[340px] lg:w-[380px] 
              rounded-3xl 
              shadow-2xl 
              shadow-[#caa5ff]/40
            "
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-[#471d7d]">
            Everything You Need in One App
          </h2>

          <p className="text-lg text-[#3a1667] mb-6 leading-relaxed">
            From mobile recharge, DTH, travel bookings — YaraPay is your
            all-in-one solution for seamless and secure digital payments.
          </p>

          <Link
            to="/about"
            className="
              inline-block 
              px-6 py-3 
              rounded-full 
              bg-gradient-to-r from-[#471d7d] to-[#7c3aed] 
              text-white font-semibold 
              shadow-lg 
              hover:scale-[1.03]
              transition
            "
          >
            Learn More
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
