export default function InfoCard({ title, image, items }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h2 className="text-lg font-bold text-gray-800">
          {title}
        </h2>
      </div>

      <ul className="mt-4 space-y-2 text-gray-700 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">▶</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
