import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>

      {/* Top Purple Strip */}
      <div className="bg-[#471d7d] text-white py-0.5"></div>

      {/* Main Footer */}
      <div className="bg-white text-[#3a1667] py-6 text-center text-sm border-t border-[#ead6ff]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#471d7d] mb-4">YaraPay - Recharge App</h2>
            <p className="text-[#3a1667] font-medium leading-relaxed">
              Our user-friendly interface allows you to easily recharge your mobile phones, 
              DTH services, and book travel — all from one secure app.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-2xl font-bold text-[#471d7d] mb-4">Important Links</h2>
            <ul className="space-y-2 text-[#3a1667] font-medium">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#7c3aed] transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#7c3aed] transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-[#7c3aed] transition"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-[#471d7d] mb-4">Contact Details</h2>
            <div className="space-y-2 text-[#3a1667] font-medium">

              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-[#7c3aed]" />
                <span className="w-[160px]">Uttar Pradesh, 261501</span>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-[#7c3aed]" />
                <span className="w-[150px]">yarapay@zohomail.in</span>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-[#7c3aed]" />
                <span className="w-[150px]">+91 8887990055</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#471d7d] text-white py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} YaraPay. All Rights Reserved.</p>
      </div>

    </footer>
  );
}
