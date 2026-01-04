export default function NoticeBar() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden border-l-4 border-blue-600">
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
          নোটিশ
        </span>

        <div className="relative overflow-hidden w-full">
          <p className="whitespace-nowrap animate-marquee text-gray-700 font-medium">
            জাতীয় আইনগত সহায়তা দিবস উপলক্ষে বিশেষ ঘোষণা | নতুন কমিটি অনুমোদন |
            অভিযোগ গ্রহণ কার্যক্রম চলমান
          </p>
        </div>
      </div>
    </div>
  );
}
