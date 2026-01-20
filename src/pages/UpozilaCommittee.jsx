import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import chairManImage from "../assets/helal.jpeg";
import founder from "../assets/samsul.jpeg";
import ceo from "../assets/nazmun.jpeg";

/* ===== MEMBER CARD ===== */
function MemberCard({ m }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={`https://asokfoundationbd.com/${m.image}`}
          alt={m.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h4 className="font-bold text-lg text-gray-800 mb-1">{m.name}</h4>
        <p className="text-sm text-blue-600 font-semibold mb-1">{m.position}</p>
        <p className="text-xs text-gray-500">{m.location} উপজেলা</p>
        <p className="text-xs text-gray-400 mt-1">{m.address}</p>
      </div>
    </div>
  );
}

/* ===== MAIN COMPONENT ===== */
export default function UpozilaCommittee() {
  const [committees, setCommittees] = useState([]);
  const [filteredCommittees, setFilteredCommittees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommittees();
  }, []);

  useEffect(() => {
    filterCommittees();
  }, [searchTerm, committees]);

  const fetchCommittees = async () => {
    try {
      const response = await axios.get('https://asokfoundationbd.com/api/committees?type=upozila');
      setCommittees(response.data.data);
      setFilteredCommittees(response.data.data);
    } catch (error) {
      console.error('Error fetching committees:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterCommittees = () => {
    if (!searchTerm) {
      setFilteredCommittees(committees);
    } else {
      setFilteredCommittees(
        committees.filter(c => 
          c.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
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
        উপজেলা কমিটি
      </h2>

      {/* ===== SEARCH BAR ===== */}
      <div className="max-w-md mx-auto mb-10 px-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="উপজেলার নাম অথবা সদস্যের নাম লিখুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
        </div>
      </div>

      {/* ===== MEMBER CARDS ===== */}
      <div className="mx-auto px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCommittees.map((m, i) => (
              <MemberCard key={i} m={m} />
            ))}
          </div>

          {filteredCommittees.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                {searchTerm ? `"${searchTerm}" এর জন্য কোন ফলাফল পাওয়া যায়নি` : "কোন কমিটি সদস্য পাওয়া যায়নি"}
              </p>
            </div>
          )}
        </div>

        {/* ===== RIGHT : ASIDE ===== */}
        <aside className="space-y-6 sticky top-24 h-fit">
          {/* Chairman */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-4">
            <img
              src={chairManImage}
              alt="Chairman"
              className="w-full rounded-lg object-cover"
            />

            <button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold transition">
              চেয়ারম্যান
            </button>

            <h3 className="mt-4 text-center font-bold text-lg text-gray-800">
              অ্যাডভোকেট মোঃ হেলাল উদ্দিন পাটোয়ারী
            </h3>

            <p className="text-center text-sm text-gray-600 mt-1">
              চেয়ারম্যান <br />
              আইন সহায়তা কেন্দ্র (আসক) ফাউন্ডেশন
            </p>
          </div>

          {/* Founder */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-4">
            <img
              src={founder}
              alt="Founder"
              className="w-full rounded-lg object-cover"
            />

            <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition">
              প্রতিষ্ঠাতা
            </button>

            <h3 className="mt-4 text-center font-bold text-lg text-gray-800">
              মোঃ শামসুল হক
            </h3>

            <p className="text-center text-sm text-gray-600 mt-1">
              প্রতিষ্ঠাতা <br />
              আইন সহায়তা কেন্দ্র (আসক) ফাউন্ডেশন
            </p>
          </div>

          {/* Executive Director */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-4">
            <img
              src={ceo}
              alt="Executive Director"
              className="w-full rounded-lg object-cover"
            />

            <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold transition">
              নির্বাহী পরিচালক
            </button>

            <h3 className="mt-4 text-center font-bold text-lg text-gray-800">
              নাজমুন নাহার
            </h3>

            <p className="text-center text-sm text-gray-600 mt-1">
              নির্বাহী পরিচালক <br />
              আইন সহায়তা কেন্দ্র (আসক) ফাউন্ডেশন
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
