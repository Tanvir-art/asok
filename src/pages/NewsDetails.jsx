import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import axios from "axios";

export default function NewsDetails() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchNewsDetails();
  }, [id]);

  const fetchNewsDetails = async () => {
    try {
      const response = await axios.get(`https://asokfoundationbd.com/backend/api/news/${id}`);
      setNews(response.data.data);
    } catch (error) {
      console.error('Error fetching news details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">নিউজ পাওয়া যায়নি</h2>
          <button
            onClick={() => navigate('/news')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            নিউজ পেজে ফিরে যান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto px-16 lg:px-24">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>

        {/* News Article */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={`https://asokfoundationbd.com/${news.image}`}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {news.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{new Date(news.createdAt).toLocaleDateString('bn-BD', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>আসক নিউজ</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: news.content || news.description }}
              />
            </div>
          </div>
        </article>

        {/* Related News or Back to News */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/news')}
            className="px-8 py-3 bg-gradient-to-r from-[#0A4D9C] via-[#0C6EDB] to-[#0A4D9C] text-white rounded-full font-semibold hover:opacity-90 transition shadow-lg"
          >
            আরো নিউজ দেখুন
          </button>
        </div>
      </div>
    </div>
  );
}
