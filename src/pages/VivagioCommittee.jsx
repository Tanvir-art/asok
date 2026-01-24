import { useState, useEffect } from "react";
import axios from "axios";
import chairManImage from "../assets/helal.jpeg";
import founder from "../assets/samsul.jpeg";
import ceo from "../assets/nazmun.jpeg";

/* ===== MEMBER CARD ===== */
function MemberCard({ m }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group h-fit">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={`https://asokfoundationbd.com/${m.image}`}
          alt={m.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center">
        <h4 className="font-bold text-xl text-gray-800 mb-2">{m.name}</h4>
        <p className="text-sm text-blue-600 font-semibold mb-1">{m.position}</p>
        <p className="text-xs text-gray-500">{m.location} বিভাগ</p>
        <p className="text-xs text-gray-400 mt-1">{m.address}</p>
      </div>
    </div>
  );
}

/* ===== MAIN COMPONENT ===== */
export default function VivagioCommittee() {
  const [committees, setCommittees] = useState([]);
  const [filteredCommittees, setFilteredCommittees] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("সব");
  const [divisions, setDivisions] = useState(["সব"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommittees();
  }, []);

  useEffect(() => {
    filterCommittees();
  }, [selectedDivision, committees]);

  const fetchCommittees = async () => {
    try {
      const response = await axios.get('https://asokfoundationbd.com/backend/api/committees?type=vivag');
      setCommittees(response.data.data);
      
      // Extract unique divisions
      const uniqueDivisions = [...new Set(response.data.data.map(c => c.location))];
      setDivisions(["সব", ...uniqueDivisions]);
    } catch (error) {
      console.error('Error fetching committees:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterCommittees = () => {
    if (selectedDivision === "সব") {
      setFilteredCommittees(committees);
    } else {
      setFilteredCommittees(committees.filter(c => c.location === selectedDivision));
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
        বিভাগীয় কমিটি
      </h2>

      {/* ===== FILTER BUTTONS ===== */}
      <div className="mx-auto px-16 lg:px-24 mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {divisions.map((division) => (
            <button
              key={division}
              onClick={() => setSelectedDivision(division)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedDivision === division
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 shadow-md"
              }`}
            >
              {division}
            </button>
          ))}
        </div>
      </div>

      {/* ===== MEMBER CARDS ===== */}
      <div className="mx-auto px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCommittees.map((m, i) => (
              <MemberCard key={i} m={m} />
            ))}
          </div>

          {filteredCommittees.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">কোন কমিটি সদস্য পাওয়া যায়নি</p>
            </div>
          )}
        </div>

        {/* ===== RIGHT : ASIDE ===== */}
    
      </div>
    </section>
  );
}
