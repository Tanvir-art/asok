import chairManImage from "../assets/b.jpg";

/* ===== DATA ===== */
const centralCommittee = [
  {
    name: "মোঃ শামসুল আলম",
    title: "চেয়ারম্যান",
    address: "ঢাকা",
    image: chairManImage,
  },
  {
    name: "মোঃ আব্দুল করিম",
    title: "মহাসচিব",
    address: "গাজীপুর",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "মোঃ রাশেদ মাহমুদ",
    title: "সহ-সভাপতি",
    address: "নারায়ণগঞ্জ",
    image: "https://i.pravatar.cc/300?img=15",
  },
];

/* ===== MEMBER CARD ===== */
function MemberCard({ m }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition h-fit">
      {/* IMAGE */}
      <img
        src={m.image}
        alt={m.name}
        className="w-full h-56 object-cover"
      />

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h4 className="font-bold text-lg">{m.name}</h4>
        <p className="text-sm text-gray-600">{m.title}</p>
        <p className="text-xs text-gray-500 mt-1">{m.address}</p>
      </div>
    </div>
  );
}

/* ===== MAIN COMPONENT ===== */
export default function KendrioCommittee() {
  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <h2 className="text-3xl font-bold text-center text-[#0A4D9C] mb-10">
        কেন্দ্রীয় কমিটি
      </h2>

      {/* ===== LAYOUT ===== */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ===== LEFT : MEMBER CARDS ===== */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {centralCommittee.map((m, i) => (
            <MemberCard key={i} m={m} />
          ))}
        </div>

        {/* ===== RIGHT : ASIDE ===== */}
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
