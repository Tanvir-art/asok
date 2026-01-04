 import { useState } from "react";
import chairManImage from "../assets/b.jpg";
 

  export const committeeData = [
  {
    division: "ঢাকা বিভাগ",
    districts: [
      { name: "ঢাকা", committeeName: "ঢাকা জেলা কমিটি", members: [{ name: "মোঃ আব্দুল করিম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=1" }] },
      { name: "গাজীপুর", committeeName: "গাজীপুর জেলা কমিটি", members: [{ name: "রাশেদ মাহমুদ", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=2" }] },
      { name: "নারায়ণগঞ্জ", committeeName: "নারায়ণগঞ্জ জেলা কমিটি", members: [{ name: "সাইফুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=3" }] },
      { name: "নরসিংদী", committeeName: "নরসিংদী জেলা কমিটি", members: [{ name: "সুমন দাস", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=4" }] },
      { name: "মানিকগঞ্জ", committeeName: "মানিকগঞ্জ জেলা কমিটি", members: [{ name: "হাবিবুর রহমান", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=5" }] },
      { name: "মুন্সিগঞ্জ", committeeName: "মুন্সিগঞ্জ জেলা কমিটি", members: [{ name: "আতিকুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=6" }] },
      { name: "ফরিদপুর", committeeName: "ফরিদপুর জেলা কমিটি", members: [{ name: "মোস্তাফিজুর রহমান", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=7" }] },
      { name: "রাজবাড়ী", committeeName: "রাজবাড়ী জেলা কমিটি", members: [{ name: "জসিম উদ্দিন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=8" }] },
      { name: "গোপালগঞ্জ", committeeName: "গোপালগঞ্জ জেলা কমিটি", members: [{ name: "মিজানুর রহমান", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=9" }] },
      { name: "মাদারীপুর", committeeName: "মাদারীপুর জেলা কমিটি", members: [{ name: "নাসির উদ্দিন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=10" }] },
      { name: "শরীয়তপুর", committeeName: "শরীয়তপুর জেলা কমিটি", members: [{ name: "ইকবাল হোসেন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=11" }] },
      { name: "টাঙ্গাইল", committeeName: "টাঙ্গাইল জেলা কমিটি", members: [{ name: "আনোয়ার হোসেন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=12" }] },
      { name: "কিশোরগঞ্জ", committeeName: "কিশোরগঞ্জ জেলা কমিটি", members: [{ name: "মাহবুব আলম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=13" }] },
    ],
  },

  {
    division: "চট্টগ্রাম বিভাগ",
    districts: [
      { name: "চট্টগ্রাম", committeeName: "চট্টগ্রাম জেলা কমিটি", members: [{ name: "আফরোজা বেগম", role: "সভানেত্রী", image: "https://i.pravatar.cc/150?img=14" }] },
      { name: "কুমিল্লা", committeeName: "কুমিল্লা জেলা কমিটি", members: [{ name: "মোঃ শফিকুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=15" }] },
      { name: "ফেনী", committeeName: "ফেনী জেলা কমিটি", members: [{ name: "মোঃ কামাল হোসেন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=16" }] },
      { name: "নোয়াখালী", committeeName: "নোয়াখালী জেলা কমিটি", members: [{ name: "আব্দুল কাদের", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=17" }] },
      { name: "কক্সবাজার", committeeName: "কক্সবাজার জেলা কমিটি", members: [{ name: "মোঃ ইলিয়াস", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=18" }] },
      { name: "বান্দরবান", committeeName: "বান্দরবান জেলা কমিটি", members: [{ name: "থানচিং মারমা", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=19" }] },
      { name: "রাঙামাটি", committeeName: "রাঙামাটি জেলা কমিটি", members: [{ name: "মংপ্রু মারমা", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=20" }] },
      { name: "খাগড়াছড়ি", committeeName: "খাগড়াছড়ি জেলা কমিটি", members: [{ name: "সুদীপ চাকমা", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=21" }] },
      { name: "চাঁদপুর", committeeName: "চাঁদপুর জেলা কমিটি", members: [{ name: "রফিকুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=22" }] },
      { name: "লক্ষ্মীপুর", committeeName: "লক্ষ্মীপুর জেলা কমিটি", members: [{ name: "আবু তাহের", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=23" }] },
      { name: "ব্রাহ্মণবাড়িয়া", committeeName: "ব্রাহ্মণবাড়িয়া জেলা কমিটি", members: [{ name: "শহিদুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=24" }] },
    ],
  },

  {
    division: "রাজশাহী বিভাগ",
    districts: [
      { name: "রাজশাহী", committeeName: "রাজশাহী জেলা কমিটি", members: [{ name: "জাহিদুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=25" }] },
      { name: "নাটোর", committeeName: "নাটোর জেলা কমিটি", members: [{ name: "মোঃ নুরুজ্জামান", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=26" }] },
      { name: "নওগাঁ", committeeName: "নওগাঁ জেলা কমিটি", members: [{ name: "আব্দুল জলিল", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=27" }] },
      { name: "চাঁপাইনবাবগঞ্জ", committeeName: "চাঁপাইনবাবগঞ্জ জেলা কমিটি", members: [{ name: "রেজাউল করিম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=28" }] },
      { name: "পাবনা", committeeName: "পাবনা জেলা কমিটি", members: [{ name: "মোস্তাফিজুর রহমান", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=29" }] },
      { name: "সিরাজগঞ্জ", committeeName: "সিরাজগঞ্জ জেলা কমিটি", members: [{ name: "সালাম মিয়া", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=30" }] },
      { name: "বগুড়া", committeeName: "বগুড়া জেলা কমিটি", members: [{ name: "আব্দুল মান্নান", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=31" }] },
      { name: "জয়পুরহাট", committeeName: "জয়পুরহাট জেলা কমিটি", members: [{ name: "রফিকুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=32" }] },
    ],
  },

  {
    division: "খুলনা বিভাগ",
    districts: [
      { name: "খুলনা", committeeName: "খুলনা জেলা কমিটি", members: [{ name: "মোঃ আব্দুল করিম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=33" }] },
      { name: "যশোর", committeeName: "যশোর জেলা কমিটি", members: [{ name: "রফিকুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=34" }] },
      { name: "সাতক্ষীরা", committeeName: "সাতক্ষীরা জেলা কমিটি", members: [{ name: "শহিদুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=35" }] },
      { name: "বাগেরহাট", committeeName: "বাগেরহাট জেলা কমিটি", members: [{ name: "আব্দুস সালাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=36" }] },
      { name: "ঝিনাইদহ", committeeName: "ঝিনাইদহ জেলা কমিটি", members: [{ name: "নাসির উদ্দিন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=37" }] },
      { name: "মাগুরা", committeeName: "মাগুরা জেলা কমিটি", members: [{ name: "আনোয়ার হোসেন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=38" }] },
      { name: "নড়াইল", committeeName: "নড়াইল জেলা কমিটি", members: [{ name: "হাসানুজ্জামান", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=39" }] },
      { name: "চুয়াডাঙ্গা", committeeName: "চুয়াডাঙ্গা জেলা কমিটি", members: [{ name: "সালাউদ্দিন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=40" }] },
      { name: "কুষ্টিয়া", committeeName: "কুষ্টিয়া জেলা কমিটি", members: [{ name: "মোঃ আলমগীর", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=41" }] },
      { name: "মেহেরপুর", committeeName: "মেহেরপুর জেলা কমিটি", members: [{ name: "আব্দুল হক", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=42" }] },
    ],
  },

  {
    division: "বরিশাল বিভাগ",
    districts: [
      { name: "বরিশাল", committeeName: "বরিশাল জেলা কমিটি", members: [{ name: "মোঃ আব্দুল করিম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=43" }] },
      { name: "পটুয়াখালী", committeeName: "পটুয়াখালী জেলা কমিটি", members: [{ name: "নাসির উদ্দিন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=44" }] },
      { name: "ভোলা", committeeName: "ভোলা জেলা কমিটি", members: [{ name: "সালাম মিয়া", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=45" }] },
      { name: "পিরোজপুর", committeeName: "পিরোজপুর জেলা কমিটি", members: [{ name: "হাবিবুর রহমান", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=46" }] },
      { name: "ঝালকাঠি", committeeName: "ঝালকাঠি জেলা কমিটি", members: [{ name: "আব্দুল মালেক", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=47" }] },
      { name: "বরগুনা", committeeName: "বরগুনা জেলা কমিটি", members: [{ name: "মোঃ কামাল", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=48" }] },
    ],
  },

  {
    division: "সিলেট বিভাগ",
    districts: [
      { name: "সিলেট", committeeName: "সিলেট জেলা কমিটি", members: [{ name: "মোঃ আব্দুল করিম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=49" }] },
      { name: "মৌলভীবাজার", committeeName: "মৌলভীবাজার জেলা কমিটি", members: [{ name: "রাশেদ আহমেদ", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=50" }] },
      { name: "হবিগঞ্জ", committeeName: "হবিগঞ্জ জেলা কমিটি", members: [{ name: "মোস্তাক আহমেদ", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=51" }] },
      { name: "সুনামগঞ্জ", committeeName: "সুনামগঞ্জ জেলা কমিটি", members: [{ name: "আনোয়ার হোসেন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=52" }] },
    ],
  },

  {
    division: "ময়মনসিংহ বিভাগ",
    districts: [
      { name: "ময়মনসিংহ", committeeName: "ময়মনসিংহ জেলা কমিটি", members: [{ name: "মোঃ শফিকুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=53" }] },
      { name: "জামালপুর", committeeName: "জামালপুর জেলা কমিটি", members: [{ name: "রফিকুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=54" }] },
      { name: "শেরপুর", committeeName: "শেরপুর জেলা কমিটি", members: [{ name: "নাসির উদ্দিন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=55" }] },
      { name: "নেত্রকোনা", committeeName: "নেত্রকোনা জেলা কমিটি", members: [{ name: "আব্দুল হান্নান", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=56" }] },
    ],
  },

  {
    division: "রংপুর বিভাগ",
    districts: [
      { name: "রংপুর", committeeName: "রংপুর জেলা কমিটি", members: [{ name: "মোঃ আলমগীর", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=57" }] },
      { name: "দিনাজপুর", committeeName: "দিনাজপুর জেলা কমিটি", members: [{ name: "রফিকুল ইসলাম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=58" }] },
      { name: "ঠাকুরগাঁও", committeeName: "ঠাকুরগাঁও জেলা কমিটি", members: [{ name: "মোঃ শহিদুল", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=59" }] },
      { name: "পঞ্চগড়", committeeName: "পঞ্চগড় জেলা কমিটি", members: [{ name: "নাসির উদ্দিন", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=60" }] },
      { name: "নীলফামারী", committeeName: "নীলফামারী জেলা কমিটি", members: [{ name: "আব্দুল করিম", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=61" }] },
      { name: "লালমনিরহাট", committeeName: "লালমনিরহাট জেলা কমিটি", members: [{ name: "মোঃ সাইফুল", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=62" }] },
      { name: "কুড়িগ্রাম", committeeName: "কুড়িগ্রাম জেলা কমিটি", members: [{ name: "রাশেদ মাহমুদ", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=63" }] },
      { name: "গাইবান্ধা", committeeName: "গাইবান্ধা জেলা কমিটি", members: [{ name: "হাসান আলী", role: "সভাপতি", image: "https://i.pravatar.cc/150?img=64" }] },
    ],
  },
];


/* ================= COMPONENT ================= */

export default function Committee() {
  const [activeDivision, setActiveDivision] = useState(null);
  const [activeDistrict, setActiveDistrict] = useState(null);

  return (
    <section className="py-10 bg-slate-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-[#0A4D9C] mb-10">
        কেন্দ্রীয় ও জেলা কমিটি
      </h2>

      {/* ===== MAIN GRID ===== */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ===== LEFT: COMMITTEE ===== */}
        <div className="lg:col-span-3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {committeeData.map((div, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition self-start"
              >
                {/* Division Header */}
                <button
                  onClick={() => {
                    setActiveDivision(activeDivision === i ? null : i);
                    setActiveDistrict(null);
                  }}
                  className="w-full px-6 py-4 flex justify-between items-center"
                >
                  <span className="font-semibold text-lg text-gray-800">
                    {div.division}
                  </span>
                  <span className="text-xl">
                    {activeDivision === i ? "−" : "+"}
                  </span>
                </button>

                {/* District List */}
                {activeDivision === i && (
                  <div className="border-t animate-fadeIn">
                    {div.districts.map((dist, j) => (
                      <div
                        key={j}
                        className="px-6 py-3 border-b last:border-0"
                      >
                        <button
                          onClick={() =>
                            setActiveDistrict(
                              activeDistrict === `${i}-${j}`
                                ? null
                                : `${i}-${j}`
                            )
                          }
                          className="w-full text-left font-medium text-[#0C6EDB]"
                        >
                          {dist.name}
                        </button>

                        {/* Committee Info */}
                        {activeDistrict === `${i}-${j}` && (
                          <div className="mt-4 animate-fadeIn">
                            {dist.committeeName ? (
                              <>
                                <h4 className="font-semibold mb-3 text-gray-700">
                                  {dist.committeeName}
                                </h4>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                  {dist.members.map((m, k) => (
                                    <div
                                      key={k}
                                      className="bg-slate-100 rounded-lg p-3 text-center"
                                    >
                                      <img
                                        src={m.image}
                                        alt={m.name}
                                        className="w-20 h-20 mx-auto rounded-full object-cover mb-2"
                                      />
                                      <h5 className="font-semibold text-sm">
                                        {m.name}
                                      </h5>
                                      <p className="text-xs text-gray-600">
                                        {m.role}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <p className="text-sm text-gray-500">
                                এই জেলায় বর্তমানে কোনো কমিটি নেই
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT: SIDEBAR ===== */}
        <aside className="lg:col-span-1 space-y-8 sticky top-24 h-fit">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-4"
            >
              <img
                src={chairManImage}
                alt="Chairman"
                className="w-full rounded-lg object-cover"
              />

              <button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold transition">
                চেয়ারম্যান
              </button>

              <h3 className="mt-4 text-center font-bold text-lg text-gray-800">
                মোঃ শামসুল আলম
              </h3>

              <p className="text-center text-sm text-gray-600 mt-1">
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
