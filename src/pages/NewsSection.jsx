import { useState } from "react";

const newsData = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  title:
    "আইন সহায়তা কেন্দ্র আসক ও মানবাধিকার ফাউন্ডেশনের গুরুত্বপূর্ণ সভা অনুষ্ঠিত",
  date: "সেপ্টেম্বর 30, 2025",
  image: `https://picsum.photos/600/400?random=${i + 1}`,
}));

export default function NewsSection() {
  const [visible, setVisible] = useState(12);

  const loadMore = () => {
    setVisible((prev) => prev + 6);
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A4D9C] mb-10 text-center">
          আসক নিউজ
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.slice(0, visible).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 leading-snug mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  🗓 {item.date}
                </p>

                <a
                  href="#"
                  className="inline-block text-sm font-semibold text-[#0C6EDB] hover:text-[#0A4D9C]"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visible < newsData.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-[#0A4D9C] via-[#0C6EDB] to-[#0A4D9C]
              hover:opacity-90 transition shadow-lg"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
