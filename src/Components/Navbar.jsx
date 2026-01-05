import { Link } from "react-router-dom";
import topheader from "../assets/topheader.png";
export default function Navbar() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#0A4D9C] via-[#0C6EDB] to-[#0A4D9C] shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center w-full">

            {/* Text - Left */}
            <span className="text-white/70 text-sm font-medium">
              International Organization Portal
            </span>

            {/* Dropdown - Right */}
            <select
              className="ml-auto bg-transparent text-white text-sm border border-white/40 rounded px-2 py-1 focus:outline-none"
              defaultValue="en"
            >
              <option value="en" className="text-black">English</option>
              <option value="bn" className="text-black">বাংলা</option>
            </select>

          </div>
        </div>


      </div>
      <div className="max-w-7xl mx-auto px-4 py-1">
        <img src={topheader} alt="Logo" className="h-full w-full " />
      </div>
      <header className="w-full bg-gradient-to-r from-[#0A4D9C] via-[#0C6EDB] to-[#0A4D9C] shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#0A4D9C] font-extrabold text-lg">AS</span>
            </div>
            <div>
              <h1 className="text-white text-lg sm:text-xl font-bold leading-tight">
                AIN SOHEYATA KENDRO ASOK<br />
                <span className="text-blue-100 text-sm">
                  O MANABADHIKAR FOUNDATION
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-white font-medium">
            <Link to="/" className="hover:text-yellow-300 transition">প্রচ্ছদ</Link>
            <Link to="/news" className="hover:text-yellow-300 transition">আসক নিউজ</Link>
            <Link to="/committee" className="hover:text-yellow-300 transition">কমিটি</Link>
            <Link to="/documents" className="hover:text-yellow-300 transition">তথ্য পত্র</Link>
            <Link to="/governance" className="hover:text-yellow-300 transition">গঠনন্তু</Link>
            <Link to="/membership" className="hover:text-yellow-300 transition">সদস্য</Link>
            <Link to="/family" className="hover:text-yellow-300 transition">পরিবার</Link>
            <Link to="/gallery" className="hover:text-yellow-300 transition">ছবি ও ভিডিও</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-3xl">
            ☰
          </button>
        </div>
      </header>
    </>
  );
}
