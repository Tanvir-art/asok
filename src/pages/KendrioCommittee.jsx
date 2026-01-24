import { useState, useEffect } from "react";
import axios from "axios";
import chairManImage from "../assets/helal.jpeg";
import founder from "../assets/samsul.jpeg";
import ceo from "../assets/nazmun.jpeg";

/* ===== MEMBER CARD ===== */
function MemberCard({ m }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition h-fit">
      {/* IMAGE */}
      <img
        src={`https://asokfoundationbd.com/${m.image}`}
        alt={m.name}
        className="w-full h-56 object-cover"
      />

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h4 className="font-bold text-lg">{m.name}</h4>
        <p className="text-sm text-gray-600">{m.position}</p>
        <p className="text-xs text-gray-500 mt-1">{m.address}</p>
      </div>
    </div>
  );
}

/* ===== MAIN COMPONENT ===== */
export default function KendrioCommittee() {
  const [committees, setCommittees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommittees();
  }, []);

  const fetchCommittees = async () => {
    try {
      const response = await axios.get('https://asokfoundationbd.com/backend/api/committees?type=kendrio');
      setCommittees(response.data.data);
    } catch (error) {
      console.error('Error fetching committees:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-50 py-10 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <h2 className="text-3xl font-bold text-center text-[#0A4D9C] mb-10">
        কেন্দ্রীয় কমিটি
      </h2>

      {/* ===== LAYOUT ===== */}
      <div className="mx-auto px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ===== LEFT : MEMBER CARDS ===== */}
        <div className="lg:col-span-4 grid sm:grid-cols-1 md:grid-cols-4 gap-6">
          {committees.map((m, i) => (
            <MemberCard key={i} m={m} />
          ))}
        </div>

        {/* ===== RIGHT : ASIDE ===== */}
 

      </div>
    </section>
  );
}
