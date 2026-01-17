import { useState } from "react";
// data/galleryData.js
export const photos = [
  { id: 1, src: "https://picsum.photos/600/400?1" },
  { id: 2, src: "https://picsum.photos/600/400?2" },
  { id: 3, src: "https://picsum.photos/600/400?3" },
  { id: 4, src: "https://picsum.photos/600/400?4" },
  { id: 5, src: "https://picsum.photos/600/400?5" },
];

export const videos = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Awareness Program",
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/9bZkp7q19f0",
    title: "Seminar Video",
  },
];


export default function Gallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [activeVideo, setActiveVideo] = useState(null);

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
          Photos
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
          Videos
        </button>
      </div>

      {/* Photos */}
      {activeTab === "photos" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.src}
              alt=""
              className="rounded-xl shadow hover:shadow-lg transition cursor-pointer object-cover h-48 w-full"
            />
          ))}
        </div>
      )}

      {/* Videos */}
      {activeTab === "videos" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="relative cursor-pointer group"
            >
              <img
                src={video.thumbnail}
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
        </div>
      )}

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl w-full max-w-3xl relative overflow-hidden">
            
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-red-500"
            >
              ✕
            </button>

            <div className="aspect-video">
              <iframe
                src={activeVideo.url}
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
