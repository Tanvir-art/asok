import { useState } from "react";
import chairManImage from "../assets/b.jpg";

/* ===== DIVISIONS ===== */
const divisions = [
  "সব",
  "ঢাকা",
  "চট্টগ্রাম",
  "রাজশাহী",
  "খুলনা",
  "বরিশাল",
  "সিলেট",
  "রংপুর",
  "ময়মনসিংহ",
];

/* ===== DATA ===== */
const vibagioCommittee = [
  {
    name: "মোঃ শামসুল আলম",
    title: "চেয়ারম্যান",
    address: "ঢাকা",
     image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "মোঃ আব্দুল করিম",
    title: "মহাসচিব",
    address: "চট্টগ্রাম",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "মোঃ রাশেদ মাহমুদ",
    title: "সহ-সভাপতি",
    address: "রাজশাহী",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=500&q=80",
  },
];

/* ===== MEMBER CARD ===== */
function MemberCard({ m }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group h-fit">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={m.image}
          alt={m.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h4 className="font-bold text-lg">{m.name}</h4>
        <p className="text-sm text-[#0A4D9C] font-semibold">{m.title}</p>
        <p className="text-xs text-gray-500 mt-1">
          {m.address} বিভাগ
        </p>
      </div>
    </div>
  );
}


export default function VibagioCommittee() {
  const [activeDivision, setActiveDivision] = useState("ঢাকা");

  const filteredMembers =
    activeDivision === "সব"
      ? vibagioCommittee
      : vibagioCommittee.filter(
          (m) => m.address === activeDivision
        );

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <h2 className="text-3xl font-bold text-center text-[#0A4D9C] mb-10">
        বিভাগীয় কমিটি
      </h2>

      {/* ===== LAYOUT ===== */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

        {/* ===== LEFT : FILTER + MEMBERS ===== */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* ===== DIVISION FILTER (TOP LEFT) ===== */}
          <div className="flex flex-wrap gap-3">
            {divisions.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDivision(d)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition
                  ${
                    activeDivision === d
                      ? "bg-[#0A4D9C] text-white"
                      : "bg-white text-gray-700 shadow hover:bg-[#0A4D9C]/10"
                  }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* ===== MEMBERS GRID ===== */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredMembers.map((m, i) => (
              <MemberCard key={i} m={m} />
            ))}
          </div>
        </div>

        {/* ===== RIGHT : ASIDE (UNCHANGED) ===== */}
        <aside className="space-y-6 sticky top-24 h-fit">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-4 text-center"
            >
              <img
                src={chairManImage}
                alt="Chairman"
                className="w-full h-60 object-cover rounded-lg"
              />

              <button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold transition">
                চেয়ারম্যান
              </button>

              <h3 className="mt-4 font-bold text-lg text-gray-800">
                মোঃ শামসুল আলম
              </h3>

              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                আন্তর্জাতিক মানবাধিকার সংস্থা <br />
                আইন সহায়তা কেন্দ্র ও মানবাধিকার ফাউন্ডেশন
              </p>
            </div>
          ))}
        </aside>

      </div>
    </section>
  );
}

