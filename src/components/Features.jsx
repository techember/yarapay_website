import { Gift, Headphones, Shield, Zap } from "lucide-react";

const features = [
  { icon: Shield, title: "Secure Payments", desc: "Your transactions are protected with bank-grade encryption." },
  { icon: Zap, title: "Lightning Fast", desc: "Instant recharges, bookings, and payments in seconds." },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help, whenever you need assistance." },
  { icon: Gift, title: "Exclusive Rewards", desc: "Earn cashback, discounts, and exciting offers on every payment." },
];

export default function Features() {
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
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-12 text-[#471d7d]">
          Why Choose YaraPay?
        </h2>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="
                p-6 
                rounded-2xl 
                bg-white 
                shadow-lg 
                border border-[#ead6ff]
                hover:shadow-2xl 
                hover:-translate-y-1
                transition 
                cursor-pointer
              "
            >
              {/* Icon bubble */}
              <div
                className="
                  w-14 h-14 
                  rounded-full 
                  bg-[#471d7d]/15 
                  flex items-center justify-center 
                  mx-auto mb-4
                "
              >
                <f.icon className="w-7 h-7 text-[#7c3aed]" />
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2 text-[#471d7d]">
                {f.title}
              </h3>

              {/* Description */}
              <p className="font-medium text-[#3a1667] text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
