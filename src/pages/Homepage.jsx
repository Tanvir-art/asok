import InfoCard from "../Components/InfoCard";
import NoticeBar from "../Components/NoticeBar";
import NoticeList from "../Components/NoticeList";
import cardImage from "../assets/a.jpg";
import chairManImage from "../assets/b.jpg";

export default function Home() {

  const notices = [
  {
    no: "২৯",
    title:
      "জাতীয় আইনগত সহায়তা দিবস-২৮ এপ্রিল ২০২৫ উপলক্ষে ঘোষণা প্রেস বিজ্ঞপ্তি",
  },
  {
    no: "৩০",
    title:
      "গ্রাম আদালত ও ইউনিয়ন লিগ্যাল এইড কমিটি সক্রিয়করণ সংক্রান্ত কর্মশালা",
  },
  {
    no: "৩৬",
    title:
      "বাংলাদেশে ভ্রমণে আগ্রহী আফগান-মালয়েশিয়ান নাগরিকদের বিজ্ঞপ্তি",
  },
  {
    no: "৫৫",
    title:
      "অমর একুশে ফেব্রুয়ারি-২০২৫ উপলক্ষে অফিস আদেশ",
  },
  {
    no: "৫৪",
    title:
      "জাতীয় আইনগত সহায়তা প্রদান সংস্থা কর্তৃক বিশেষ বিজ্ঞপ্তি",
  },
];



  return (
    <main className="bg-[#F5F7FB] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Left Content */}
        <div className="lg:col-span-3 space-y-6">

          {/* Notice */}
          <NoticeBar />

          <NoticeList notices={notices} />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              title="আমাদের বিষয়ে"
              image={cardImage}
              items={[
                "ইতিহাস ও কার্যাবলী",
                "জাতীয় পরিচালনা বোর্ড",
                "সেবা প্রদান পদ্ধতি",
              ]}
            />

            <InfoCard
              title="বাজেট"
              image={cardImage}
              items={[
                "বার্ষিক ও উন্নয়ন বাজেট",
                "আর্থিক বিবরণ",
                "পরিকল্পনা / নির্দেশনা",
              ]}
            />

            <InfoCard
              title="তথ্য অধিকার"
              image={cardImage}
              items={[
                "তথ্য প্রদানকারী কর্মকর্তা",
                "আইন ও বিধিমালা",
                "স্বপ্রণোদিত তথ্য প্রকাশ",
              ]}
            />

            <InfoCard
              title="অভিযোগ প্রতিকার ব্যবস্থাপনা"
              image={cardImage}
              items={[
                "প্রক্রিয়া",
                "অভিযোগ নিষ্পত্তি",
                "ফিডব্যাক",
              ]}
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className=" h-fit">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-4">
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

          <div className="flex flex-col items-center mt-8 bg-white rounded-xl shadow-md p-4">
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
        </aside>


      </div>
    </main>
  );
}
