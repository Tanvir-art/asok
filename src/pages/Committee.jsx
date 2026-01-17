import { Link } from "react-router-dom";
import { Users, Layers, MapPin, Building2 } from "lucide-react";
import chairManImage from "../assets/helal.jpeg";
import founder from "../assets/samsul.jpeg";
import ceo from "../assets/nazmun.jpeg";

export default function Committee() {
  return (
    <section className="bg-slate-50 min-h-screen py-12">
      <h2 className="text-3xl font-bold text-center text-[#0A4D9C] mb-12">
        কেন্দ্রীয় ও জেলা কমিটি
      </h2>

      {/* ===== MAIN GRID ===== */}
      <div className="mx-auto px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-8">
          <div className="grid sm:grid-cols-2 gap-8">

            {/* CARD */}
            <Link
              to="/committee/kendrio"
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5 group-hover:scale-110 transition">
                  <Users />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  কেন্দ্রীয় কমিটি
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  কেন্দ্রীয় পর্যায়ের নেতৃত্ব ও নীতিনির্ধারকদের তালিকা
                </p>
              </div>

              <span className="mt-6 inline-block text-sm font-semibold text-blue-600 group-hover:underline">
                বিস্তারিত দেখুন →
              </span>
            </Link>

            {/* CARD */}
            <Link
              to="/committee/vivagio"
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 text-green-600 mb-5 group-hover:scale-110 transition">
                  <Layers />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  বিভাগীয় কমিটি
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  বিভাগভিত্তিক সংগঠনের নেতৃত্ব ও কার্যক্রম
                </p>
              </div>

              <span className="mt-6 inline-block text-sm font-semibold text-green-600 group-hover:underline">
                বিস্তারিত দেখুন →
              </span>
            </Link>

            {/* CARD */}
            <Link
              to="/committee/district"
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-red-600 mb-5 group-hover:scale-110 transition">
                  <MapPin />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  জেলা কমিটি
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  জেলা ভিত্তিক কমিটির বিস্তারিত তথ্য ও সদস্য তালিকা
                </p>
              </div>

              <span className="mt-6 inline-block text-sm font-semibold text-red-600 group-hover:underline">
                বিস্তারিত দেখুন →
              </span>
            </Link>

            {/* UPOZILA CARD */}
            <Link
              to="/committee/upozila"
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-5 group-hover:scale-110 transition">
                  <Building2 />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  উপজেলা কমিটি
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  উপজেলা ভিত্তিক কমিটির তথ্য ও সদস্য তালিকা
                </p>
              </div>

              <span className="mt-6 inline-block text-sm font-semibold text-purple-600 group-hover:underline">
                বিস্তারিত দেখুন →
              </span>
            </Link>

          </div>
        </div>

      


        <aside className="lg:col-span-4 space-y-6 sticky top-24 h-fit">
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
