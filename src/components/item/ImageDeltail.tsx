import { useState } from "react";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageDetail({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  if (!images.length) {
    return null;
  }

  return (
    <div
      className="relative flex w-full h-2/3 items-center justify-center bg-white
      md:w-fit"
    >
      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            <svg
              width="7"
              height="13"
              viewBox="0 0 7 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 12.1879L6.1871 13L0.22378 7.04294C0.08026 6.89742 0 6.70269 0 6.5C0 6.29731 0.08026 6.10258 0.22378 5.95706L6.1871 0L7 0.812883L1.30738 6.5L7 12.1879Z"
                fill="#737373"
              />
            </svg>
          </button>
          <img
            src={images[currentIndex]}
            alt={`Product image ${currentIndex + 1}`}
            className="max-w-full h-auto object-cover
            md:w-full md:h-full"
          />
          <button type="button" onClick={handleNext} aria-label="Next image">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.06007 6.81212L8.85919 6L14.7214 11.9571C14.8625 12.1026 14.9414 12.2973 14.9414 12.5C14.9414 12.7027 14.8625 12.8974 14.7214 13.0429L8.85918 19L8.06007 18.1871L13.6562 12.5L8.06007 6.81212Z"
                fill="black"
              />
            </svg>
          </button>
        </>
      ) : null}
    </div>
  );
}
