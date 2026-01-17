import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [visible, setVisible] = useState(12);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/news');
      setNews(response.data.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setVisible((prev) => prev + 6);
  };

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  if (loading) {
    return (
      <section className="bg-slate-50 py-16 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto px-16 lg:px-24">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A4D9C] mb-10 text-center">
          আসক নিউজ
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, visible).map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer"
              onClick={() => handleNewsClick(item._id)}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={`http://localhost:4000/${item.image}`}
                  alt={item.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 leading-snug mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  🗓 {new Date(item.createdAt).toLocaleDateString('bn-BD')}
                </p>

                <span className="inline-block text-sm font-semibold text-[#0C6EDB] hover:text-[#0A4D9C]">
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visible < news.length && (
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

        {news.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">কোন নিউজ পাওয়া যায়নি</p>
          </div>
        )}
      </div>
    </section>
  );
}
