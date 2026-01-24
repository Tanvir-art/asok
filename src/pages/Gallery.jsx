import { useState, useEffect } from "react";
import axios from "axios";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [activeVideo, setActiveVideo] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE = 'https://asokfoundationbd.com/backend/api';

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE}/gallery`);
      const galleryData = response.data.data || [];
      
      setPhotos(galleryData.filter(item => item.type === 'photos'));
      setVideos(galleryData.filter(item => item.type === 'videos'));
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  return (
    <section className="mx-auto px-16 lg:px-24 py-10">
      
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("photos")}
          className={`px-6 py-2 rounded-full font-semibold transition
            ${
              activeTab === "photos"
                ? "bg-[#0C6EDB] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          Photos ({photos.length})
        </button>

        <button
          onClick={() => setActiveTab("videos")}
          className={`px-6 py-2 rounded-full font-semibold transition
            ${
              activeTab === "videos"
                ? "bg-[#0C6EDB] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          Videos ({videos.length})
        </button>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      ) : (
        <>
          {/* Photos */}
          {activeTab === "photos" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {photos.map((photo) => (
                <div key={photo._id} className="group">
                  <img
                    src={`https://asokfoundationbd.com/backend/uploads/${photo.image}`}
                    alt={photo.title}
                    className="rounded-xl shadow hover:shadow-lg transition cursor-pointer object-cover h-48 w-full"
                  />
                  <p className="mt-2 text-sm text-center text-gray-700 font-medium">
                    {photo.title}
                  </p>
                </div>
              ))}
              {photos.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No photos available</p>
                </div>
              )}
            </div>
          )}

          {/* Videos */}
          {activeTab === "videos" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {videos.map((video) => (
                <div
                  key={video._id}
                  onClick={() => setActiveVideo(video)}
                  className="relative cursor-pointer group"
                >
                  <img
                    src={getYouTubeThumbnail(video.videoLink) || 'https://via.placeholder.com/400x300?text=Video'}
                    alt={video.title}
                    className="rounded-xl shadow object-cover h-48 w-full"
                  />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-white rounded-full p-4">
                      ▶
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-center text-gray-700 font-medium">
                    {video.title}
                  </p>
                </div>
              ))}
              {videos.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No videos available</p>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl w-full max-w-3xl relative overflow-hidden">
            
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-red-500 z-10"
            >
              ✕
            </button>

            <div className="aspect-video">
              <iframe
                src={getYouTubeEmbedUrl(activeVideo.videoLink)}
                title={activeVideo.title}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>

            <div className="p-4 text-center font-semibold">
              {activeVideo.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
