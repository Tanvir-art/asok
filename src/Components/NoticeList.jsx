export default function NoticeList({ notices = [] }) {
  return (
    <div className="bg-[#F2F2F2] rounded-lg p-4 space-y-2">
      {notices.map((notice, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-transparent border-b border-gray-400 last:border-none py-2 cursor-pointer hover:text-blue-700 transition"
        >
          {/* Arrow */}
          <span className="text-blue-600 text-lg">◀</span>

          {/* Text */}
          <p className="text-lg md:text-base text-gray-800 hover:underline">
            <span className="font-semibold">
              নোটিশ নং-{notice.no} ::
            </span>{" "}
            {notice.title}
          </p>
        </div>
      ))}
    </div>
  );
}
