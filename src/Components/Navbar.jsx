import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";
import TopHeader from "./TopHeader";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition ${
      isActive
        ? "bg-white text-[#0A4D9C] font-semibold"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="w-full bg-gradient-to-r from-[#0A4D9C] via-[#0C6EDB] to-[#0A4D9C] shadow-lg border-b border-white/10">
        <div className="mx-auto px-16 lg:px-24 py-3 flex items-center justify-between">
          <div className="flex items-center w-full">
            <span className="text-white/70 text-sm font-medium">
              International Organization Portal
            </span>

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

      {/* ===== TOP HEADER ===== */}
      <div >
        <TopHeader />
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <header className="w-full bg-gradient-to-r from-[#0A4D9C] via-[#0C6EDB] to-[#0A4D9C] shadow-lg border-b border-white/10 relative">
  <div className="mx-auto px-16 lg:px-24 py-3 flex justify-center items-center relative">

    {/* Desktop Menu */}
    <nav className="hidden md:flex gap-2 font-medium">
      <NavLink to="/" className={navLinkClass}>প্রচ্ছদ</NavLink>
      <NavLink to="/news" className={navLinkClass}>আসক নিউজ</NavLink>
      <NavLink to="/committee" className={navLinkClass}>কমিটি</NavLink>
      <NavLink to="/documents" className={navLinkClass}>তথ্য পত্র</NavLink>
      <NavLink to="/governance" className={navLinkClass}>গঠনতন্ত্র</NavLink>
      <NavLink to="/membership" className={navLinkClass}>সদস্য ফর্ম</NavLink>
      <NavLink to="/family" className={navLinkClass}>পরিবার</NavLink>
      <NavLink to="/gallery" className={navLinkClass}>ছবি ও ভিডিও</NavLink>
    </nav>

    {/* Mobile Button */}
    <button
      onClick={() => setOpen(true)}
      className="md:hidden text-white text-3xl absolute right-6"
    >
      ☰
    </button>
  </div>

  {/* ===== MOBILE OVERLAY ===== */}
  <div
    className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
      open ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    onClick={() => setOpen(false)}
  />

  {/* ===== MOBILE SLIDE MENU ===== */}
  <div
    className={`fixed top-0 right-0 h-full w-72 bg-[#0A4D9C] z-50 transform transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"}`}
  >
    <div className="p-4 flex justify-between items-center border-b border-white/20">
      <span className="text-white font-bold text-lg">Menu</span>
      <button
        onClick={() => setOpen(false)}
        className="text-white text-2xl"
      >
        ✕
      </button>
    </div>

    <nav className="flex flex-col gap-2 p-4 font-medium">
      <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>প্রচ্ছদ</NavLink>
      <NavLink to="/news" onClick={() => setOpen(false)} className={navLinkClass}>আসক নিউজ</NavLink>
      <NavLink to="/committee" onClick={() => setOpen(false)} className={navLinkClass}>কমিটি</NavLink>
      <NavLink to="/documents" onClick={() => setOpen(false)} className={navLinkClass}>তথ্য পত্র</NavLink>
      <NavLink to="/governance" onClick={() => setOpen(false)} className={navLinkClass}>গঠনতন্ত্র</NavLink>
      <NavLink to="/membership" onClick={() => setOpen(false)} className={navLinkClass}>সদস্য ফর্ম</NavLink>
      <NavLink to="/family" onClick={() => setOpen(false)} className={navLinkClass}>পরিবার</NavLink>
      <NavLink to="/gallery" onClick={() => setOpen(false)} className={navLinkClass}>ছবি ও ভিডিও</NavLink>
    </nav>
  </div>
</header>

    </>
  );
}
