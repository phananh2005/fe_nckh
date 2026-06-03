import { useEffect, useState } from "react";

import heroImg from "../assets/thebracnh.png";
import splitImg from "../assets/secondIntro.png";
import groupImg from "../assets/thirdIntro.png";

import img11 from "../assets/mainpage1-1.png";
import img12 from "../assets/mainpage1-2.png";

import img2 from "../assets/mainpage2.png";

import img31 from "../assets/mainpage3-1.png";
import img32 from "../assets/mainpage3-2.png";

const heroSlides = [heroImg, splitImg, groupImg];
const slides = [...heroSlides, heroSlides[0]];

function MainPage() {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const [voucher, setVoucher] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;

    if (current === slides.length - 1) {
      timer = setTimeout(() => {
        setTransition(false);
        setCurrent(0);
        setTimeout(() => {
          setTransition(true);
          setCurrent(1);
        }, 50);
      }, 1200);
    } else {
      timer = setTimeout(() => {
        setCurrent((prev) => prev + 1);
      }, 1200);
    }

    return () => clearTimeout(timer);
  }, [current]);

  const activeDot = current % heroSlides.length;

  return (
    <>
      {/* voucher */}
      {voucher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-125 h-60 rounded-2xl bg-[#F3F3F3] p-6 text-center shadow-xl">
            <h1
              style={{ fontFamily: "Work Sans" }}
              className="text-[36px] uppercase"
            >
              You Have A Voucher
            </h1>

            <p className="text-[28px]">for your first order!</p>

            <button
              className="
              w-101
              py-2
              mt-6
              bg-[#404040]
              text-white
              text-[14px]
              uppercase
              transition
            "
            >
              Get Your Voucher
            </button>

            <button
              onClick={() => setVoucher(false)}
              className="mt-2 text-[12px] text-black"
            >
              No, I'll buy without voucher
            </button>
          </div>
        </div>
      )}

      {/* Main */}
      <div className="bg-white text-[#1A1A1A]">
        {/* HERO SLIDER */}
        <section>
          <div className="h-217 overflow-hidden">
            <div
              className={`flex h-full ${
                transition
                  ? "transition-transform duration-1200 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {slides.map((img, index) => (
                <div key={`${img}-${index}`} className="min-w-full h-full shrink-0">
                  <img
                    src={img}
                    alt="Hero Banner"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-3">
            {heroSlides.map((_, index) => (
              <span
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  activeDot === index
                    ? "scale-110 bg-[#D18B13]"
                    : "bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="relative mt-14 grid h-200 grid-cols-[46%_28%_26%]">
          <img src={img11} alt="" className="h-full object-cover object-left" />

          <div></div>

          <img
            src={img12}
            alt=""
            className="h-full w-full object-cover object-center"
          />

          {/* Text */}
          <div
            style={{ fontFamily: "Work Sans" }}
            className=" absolute top-1/2 left-[47%] -translate-y-1/2 text-[22px] leading-[1.9] z-10"
          >
            <p className="-ml-2">The world shifts,</p>

            <p className="ml-29">the air stirs,</p>

            <p className="ml-50">and the Earth</p>

            <p className="ml-66">breathes in quiet motion.</p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="relative h-225 ">
          <img src={img2} alt="" className="h-209 w-full object-cover" />

          <h2
            style={{ fontFamily: "Work Sans" }}
            className=" absolute right-[13%] top-[14%] text-[32px] uppercase tracking-[0.08em]"
          >
            solstice
          </h2>

          <div className="absolute  left-[46.5%]  top-[24%]  max-w-108.75  text-[16px]  leading-[1.42]">
            <p>
              The world shifts, the air stirs, and the earth
              <br />
              breathes in quiet motion.
              <br />
              SOLSTICE captures the poetry of movement- <br />
              ment-fluid silhouettes, organic textures,
              <br />
              and swirling motifs that echo nature's <br />
              effortless rhythm.
            </p>

            <p className="mt-5">
              With soft, neutral tones, Bella Wang's <br />
              summer collection combines sophisticat- <br />
              ed fabric, subtle twists, and balanced con- <br />
              trasts, creating a blend of structure and <br />
              fluidity. Every detail reflects change, crafts- <br />
              manship, and a deep connection to nature.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="flex h-249">
          <img src={img31} alt="" className="h-249 w-191.5 object-cover" />

          <div className="relative ml-5 flex-1">
            <div className="absolute right-0 top-25 flex flex-col items-center text-center">
              <h2
                style={{ fontFamily: "Work Sans" }}
                className="text-[32px] font-normal uppercase"
              >
                Solstice
              </h2>

              <img
                src={img32}
                alt=""
                className="mt-10 object-cover"
              />

              <p className="mt-8 max-w-90 text-[16px] leading-8">
                The world shifts, the air stirs,
                <br />
                and the Earth breathes in quiet motion.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MainPage;
