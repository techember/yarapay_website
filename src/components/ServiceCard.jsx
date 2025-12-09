import { motion } from "framer-motion";

export default function ServiceCard({ Icon, title, description }) {
  return (
    <motion.div
      className="
        p-6 
        rounded-2xl 
        bg-white 
        border border-[#ead6ff] 
        shadow-lg 
        hover:shadow-2xl
        hover:-translate-y-1
        transition 
        cursor-pointer
      "
      whileHover={{ y: -5 }}
    >
      {/* Icon Bubble */}
      <div className="w-12 h-12 mb-4 bg-gradient-to-br from-[#471d7d] to-[#7c3aed] rounded-full flex items-center justify-center shadow-md">
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#471d7d]">{title}</h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-[#3a1667] mt-2 font-medium leading-snug">
          {description}
        </p>
      )}
    </motion.div>
  );
}
