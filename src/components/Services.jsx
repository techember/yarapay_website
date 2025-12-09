import { CreditCard, Plane, Smartphone, Tv, TrendingUp, HandHeart } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
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
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ServiceCard
            Icon={Smartphone}
            title="Mobile Recharge"
            description="Quick and secure mobile top-ups for all major operators."
          />
          <ServiceCard
            Icon={Tv}
            title="DTH Recharge"
            description="Instant DTH recharges with flexible plans and offers."
          />
          <ServiceCard
            Icon={Plane}
            title="Travel Booking"
            description="Book flights, buses, and hotels at the best prices."
          />
          <ServiceCard
            Icon={HandHeart}
            title="Insurance"
            description="You can buy bike, car, health, life insurance."
          />
        </div>
      </div>
    </section>
  );
}
