import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      className="
        bg-gradient-to-br
        from-[#f3e8ff] 
        via-[#e8d6ff] 
        to-[#f0e6ff]
        py-24
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#471d7d] mb-4">Contact Us</h1>
          <p className="text-[#3a1667] text-lg">
            Have questions or feedback? We’ll get back to you quickly.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {[
            {
              icon: MapPin,
              title: "Address",
              desc: `Near Prathmik Vidyalaya 523,
Padari Allipur Near Vidyalaya,
Lakhimpur Kheri, Uttar Pradesh, 261501`,
            },
            {
              icon: Mail,
              title: "Email",
              desc: "yarapay@zohomail.in",
            },
            {
              icon: Phone,
              title: "Phone",
              desc: "+91 8887990055",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="
                  flex flex-col items-center 
                  p-6 
                  rounded-3xl 
                  bg-white
                  shadow-lg
                  border border-[#ead6ff]
                  hover:shadow-2xl 
                  hover:-translate-y-1
                  transition
                  cursor-pointer
                "
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#471d7d] to-[#7c3aed] rounded-full mb-4 shadow">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-[#471d7d] font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#3a1667] text-center text-sm whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div
          className="
            max-w-3xl mx-auto 
            p-10 
            rounded-3xl 
            bg-white 
            shadow-xl 
            border border-[#ead6ff]
          "
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-[#471d7d] font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="
                  w-full px-4 py-3 rounded-xl 
                  border border-gray-300 
                  focus:outline-none 
                  focus:ring-2 focus:ring-[#7c3aed]
                "
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#471d7d] font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="
                  w-full px-4 py-3 rounded-xl 
                  border border-gray-300 
                  focus:outline-none 
                  focus:ring-2 focus:ring-[#7c3aed]
                "
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[#471d7d] font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="
                  w-full px-4 py-3 rounded-xl 
                  border border-gray-300 
                  focus:outline-none 
                  focus:ring-2 focus:ring-[#7c3aed]
                "
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`
                w-full py-3 rounded-xl font-semibold 
                shadow-lg transition
                ${
                  status === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#471d7d] to-[#7c3aed] text-white hover:scale-[1.02]"
                }
              `}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-4 font-medium">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4 font-medium">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
