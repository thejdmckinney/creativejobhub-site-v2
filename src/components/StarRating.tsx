export default function StarRating() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center gap-1">
        {/* 5 stars */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
          </svg>
        ))}
      </div>
      <span className="text-gray-700 font-semibold">4.8</span>
      <span className="text-gray-500">({433} reviews)</span>
    </div>
  );
}
