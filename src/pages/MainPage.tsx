import firstImg from "../assets/thebracnh.png";
import secondImg from "../assets/secondIntro.png";
import thirdImg from "../assets/thirdIntro.png";
import { useEffect, useState } from "react";

export default function MainPage() {
  const slides = [
    firstImg,
    secondImg,
    thirdImg,
    firstImg,
  ];

  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (current === slides.length - 1) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setCurrent(0);

        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [current, slides.length]);

  return (
    <div className="overflow-hidden">
      <div
        className={`flex ${
          transition
            ? "transition-transform duration-1000"
            : ""
        }`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt=""
            className="w-full shrink-0"
          />
        ))}
      </div>
    </div>
  );
}