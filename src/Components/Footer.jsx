import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0A4D9C] via-[#0C6EDB] to-[#0A4D9C] text-white">
      <div className="mx-auto px-6 lg:px-24 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Address */}
        <div>
          <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Link to="/">
            <img className="rounded-full w-24 h-24 object-cover" src={logo} alt="Footer Logo" />
            </Link>
          </div>

          <p className="text-sm leading-6 text-blue-100">
            <strong>Head Office</strong><br />
            Mouchak Center Point Shopping Mall<br />
            92, Circular Road, Siddeshwari, Dhaka<br />
            Room No: 42,43 (4th Floor, Lift-3)
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Details</h3>

          <ul className="space-y-3 text-sm text-blue-100">
            <li>📞 Tel: 01-9513188</li>
            <li>📞 01750-408926</li>
            <li>📞 01932276749</li>
            <li>✉️ asokfoundation@gmail.com</li>
            <li>✉️ shandhabani@gmail.com</li>
            <li>🌐 https://asokfoundationbd.com/</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>

          <ul className="space-y-4 text-sm text-blue-100 leading-6">
            <li className="hover:text-yellow-300 cursor-pointer transition">
              About ASOK Foundation
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Legal Aid Services
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Human Rights Activities
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Membership Information
            </li>
          </ul>
        </div>

        {/* Social & Support */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>

          <div className="flex gap-3 mb-6">
            {["f", "📷", "▶", "💬"].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-white text-[#0A4D9C] flex items-center justify-center rounded shadow hover:bg-yellow-300 transition cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>

          <p className="text-sm text-blue-100">
            Working for legal aid & human rights across Bangladesh.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-blue-100">
        © {new Date().getFullYear()} Ain Sohayota Kendro (ASOK) Foundation. All rights reserved.
      </div>
    </footer>
  );
}
