export default function CTA() {
  return (
    <section
      className="
        w-full 
        py-20 
        bg-gradient-to-br 
        from-[#f3e8ff] 
        via-[#e8d6ff] 
        to-[#f0e6ff] 
        text-center
      "
    >
      <div className="max-w-3xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#471d7d]">
          Download YaraPay Today
        </h2>

        <p className="mb-8 text-lg text-[#3a1667]">
          Experience fast, secure, and rewarding payments.  
          Join millions of users already using YaraPay.
        </p>

        <div className="space-x-4 flex justify-center">
          <button
            aria-label="Get on Google Play"
            className="
              px-8 py-3 
              rounded-full 
              bg-gradient-to-r 
              from-[#471d7d] 
              to-[#7c3aed] 
              text-white 
              font-bold 
              shadow-lg 
              transform hover:-translate-y-0.5 hover:scale-[1.01] 
              transition 
              duration-200
            "
          >
            Get on Google Play
          </button>
        </div>

      </div>
    </section>
  );
}
