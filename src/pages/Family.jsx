import { useState } from "react";
// import { membersData } from "../data/members";

// data/members.js


const membersData = [
  // ================= Advisor =================
  {
    id: 1,
    name: "মোঃ আব্দুল করিম",
    title: "Advisor",
    role: "Advisor",
    photo: "https://images.unsplash.com/photo-1603415526960-f7e0328b85f0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "ড. মাহবুব রহমান",
    title: "Senior Advisor",
    role: "Advisor",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "প্রফেসর আনোয়ার হোসেন",
    title: "Advisor",
    role: "Advisor",
    photo: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "মোঃ মিজানুর রহমান",
    title: "Legal Advisor",
    role: "Advisor",
    photo: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "ড. শামসুল আলম",
    title: "Policy Advisor",
    role: "Advisor",
    photo: "https://images.unsplash.com/photo-1531891437562-4305f5d1b3f1?auto=format&fit=crop&w=500&q=80",
  },

  // ================= Life Member =================
  {
    id: 6,
    name: "রাশেদ মাহমুদ",
    title: "Life Member",
    role: "Life Member",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "শাহানা পারভীন",
    title: "Life Member",
    role: "Life Member",
    photo: "https://images.unsplash.com/photo-1590080877081-3e5f1d5d9c9a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "মোঃ সেলিম উদ্দিন",
    title: "Life Member",
    role: "Life Member",
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "নাজনীন আক্তার",
    title: "Life Member",
    role: "Life Member",
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "আবুল কালাম আজাদ",
    title: "Life Member",
    role: "Life Member",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
  },

  // ================= Director =================
  {
    id: 11,
    name: "সালমা আক্তার",
    title: "Director",
    role: "Director",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "মোঃ কামরুল ইসলাম",
    title: "Director (Administration)",
    role: "Director",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 13,
    name: "রেহানা বেগম",
    title: "Director (Finance)",
    role: "Director",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "মোঃ তরিকুল ইসলাম",
    title: "Director (Operations)",
    role: "Director",
    photo: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "ফারহানা ইয়াসমিন",
    title: "Director (Programs)",
    role: "Director",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },

  // ================= Deputy Director =================
  {
    id: 16,
    name: "মোঃ জসিম উদ্দিন",
    title: "Deputy Director",
    role: "Deputy Director",
    photo: "https://images.unsplash.com/photo-1603415526960-f7e0328b85f0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "রুবিনা ইয়াসমিন",
    title: "Deputy Director",
    role: "Deputy Director",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "মোঃ রফিকুল ইসলাম",
    title: "Deputy Director",
    role: "Deputy Director",
    photo: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 19,
    name: "সাবিনা আক্তার",
    title: "Deputy Director (HR)",
    role: "Deputy Director",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 20,
    name: "মোঃ নুরুল হক",
    title: "Deputy Director (Field)",
    role: "Deputy Director",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },

  // ================= Co-Director =================
  {
    id: 21,
    name: "মোঃ ফারুক হোসেন",
    title: "Co-Director",
    role: "Co-Director",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 22,
    name: "নাজমুল হাসান",
    title: "Co-Director",
    role: "Co-Director",
    photo: "https://images.unsplash.com/photo-1603415526960-f7e0328b85f0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 23,
    name: "মোঃ লুৎফর রহমান",
    title: "Co-Director (Programs)",
    role: "Co-Director",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 24,
    name: "ফারজানা রহমান",
    title: "Co-Director (Women Affairs)",
    role: "Co-Director",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 25,
    name: "মোঃ হাবিবুর রহমান",
    title: "Co-Director (Monitoring)",
    role: "Co-Director",
    photo: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=80",
  },

  // ================= Coordinator =================
  {
    id: 26,
    name: "ফাতেমা খাতুন",
    title: "Coordinator",
    role: "Coordinator",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 27,
    name: "মোঃ সাইফুল ইসলাম",
    title: "Area Coordinator",
    role: "Coordinator",
    photo: "https://images.unsplash.com/photo-1603415526960-f7e0328b85f0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 28,
    name: "শারমিন আক্তার",
    title: "District Coordinator",
    role: "Coordinator",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 29,
    name: "মোঃ আল আমিন",
    title: "Field Coordinator",
    role: "Coordinator",
    photo: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 30,
    name: "নুসরাত সুলতানা",
    title: "Women Coordinator",
    role: "Coordinator",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
  },

  // ================= Executive Member =================
  {
    id: 31,
    name: "আরিফুল ইসলাম",
    title: "Executive Member",
    role: "Executive Member",
    photo: "https://images.unsplash.com/photo-1603415526960-f7e0328b85f0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 32,
    name: "নুসরাত জাহান",
    title: "Executive Member",
    role: "Executive Member",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 33,
    name: "মোঃ রেজাউল করিম",
    title: "Executive Member",
    role: "Executive Member",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 34,
    name: "ফারিহা ইসলাম",
    title: "Executive Member",
    role: "Executive Member",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 35,
    name: "মোঃ সোহেল রানা",
    title: "Executive Member",
    role: "Executive Member",
    photo: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=80",
  },

  // ================= Legal Assistance Council =================
  {
    id: 36,
    name: "নাসরিন সুলতানা",
    title: "Legal Assistance Council",
    role: "Legal Assistance Council",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 37,
    name: "অ্যাডভোকেট হাসান মাহমুদ",
    title: "Senior Legal Advisor",
    role: "Legal Assistance Council",
    photo: "https://images.unsplash.com/photo-1603415526960-f7e0328b85f0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 38,
    name: "অ্যাডভোকেট রফিকুল ইসলাম",
    title: "Legal Advisor",
    role: "Legal Assistance Council",
    photo: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 39,
    name: "অ্যাডভোকেট সুমাইয়া রহমান",
    title: "Legal Consultant",
    role: "Legal Assistance Council",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 40,
    name: "অ্যাডভোকেট মোস্তাফিজুর রহমান",
    title: "Legal Advisor",
    role: "Legal Assistance Council",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
];




const tabs = [
  "Advisor",
  "Life Member",
  "Director",
  "Deputy Director",
  "Co-Director",
  "Coordinator",
  "Executive Member",
  "Legal Assistance Council",
];

export default function Family() {
  const [activeTab, setActiveTab] = useState("Advisor");

  const filteredMembers = membersData.filter(
    (member) => member.role === activeTab
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
              ${
                activeTab === tab
                  ? "bg-[#0C6EDB] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {member.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredMembers.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          এই ক্যাটাগরিতে কোনো সদস্য পাওয়া যায়নি।
        </p>
      )}
    </section>
  );
}
