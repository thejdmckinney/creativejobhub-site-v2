import { useState, useEffect } from 'react';

interface MobileScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

interface MobilePhoneCarouselProps {
  screenshots: MobileScreenshot[];
  autoPlayInterval?: number;
}

export default function MobilePhoneCarousel({ screenshots, autoPlayInterval = 4000 }: MobilePhoneCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || screenshots.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, screenshots.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    setIsAutoPlaying(false);
  };

  if (screenshots.length === 0) return null;

  return (
    <div className="flex flex-col items-center">
      {/* Mobile Phone Frame */}
      <div className="relative">
        {/* Phone Outer Frame with Shadow */}
        <div className="relative w-[320px] h-[640px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] shadow-2xl p-3">
          {/* Phone Inner Frame */}
          <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20 flex items-center justify-center">
              <div className="w-16 h-4 bg-gray-950 rounded-full"></div>
            </div>

            {/* Screen Content Area */}
            <div className="relative w-full h-full bg-white">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-50 to-transparent z-10 flex items-center justify-between px-6 pt-2">
                <span className="text-xs font-semibold text-gray-900">9:41</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <svg className="w-5 h-3 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="4" y="8" width="14" height="8" fill="currentColor"/>
                    <rect x="20" y="9" width="2" height="6" rx="1" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Screenshot Carousel */}
              <div className="relative w-full h-full">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Caption Overlay */}
              {screenshots[currentIndex].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pb-8">
                  <p className="text-white text-sm font-medium text-center">
                    {screenshots[currentIndex].caption}
                  </p>
                </div>
              )}
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20"></div>
          </div>

          {/* Side Buttons */}
          <div className="absolute -left-1 top-24 w-1 h-8 bg-gray-900 rounded-l"></div>
          <div className="absolute -left-1 top-36 w-1 h-12 bg-gray-900 rounded-l"></div>
          <div className="absolute -left-1 top-52 w-1 h-12 bg-gray-900 rounded-l"></div>
          <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-900 rounded-r"></div>
        </div>

        {/* Navigation Arrows - Outside Phone */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white hover:bg-blue-50 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group z-30"
              aria-label="Previous screenshot"
            >
              <svg
                className="w-6 h-6 text-gray-800 group-hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white hover:bg-blue-50 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group z-30"
              aria-label="Next screenshot"
            >
              <svg
                className="w-6 h-6 text-gray-800 group-hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dot Indicators */}
      {screenshots.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-blue-600'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-600 font-medium">
          {currentIndex + 1} / {screenshots.length}
        </span>
      </div>
    </div>
  );
}
