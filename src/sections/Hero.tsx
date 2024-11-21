import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import GrainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { Orbit } from "@/components/Orbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_90%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" 
          style={{ backgroundImage: `url(${GrainImage.src})` }}>
        </div>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
            <Orbit size={800} rotation={-72} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="15s">
            <StarIcon className="size-20 text-pink-300"/>
            </Orbit>
            <Orbit size={550} rotation={20} shouldOrbit orbitDuration="37s" shouldSpin spinDuration="20s"> {/* Slow spin */}
              <StarIcon className="size-12 text-pink-300"/>
            </Orbit>
            <Orbit size={590} rotation={100} shouldOrbit orbitDuration="33s" shouldSpin spinDuration="18s"> {/* Moderate spin */}
              <StarIcon className="size-8 text-pink-300" />
            </Orbit>
            <Orbit size={420} rotation={-15} shouldOrbit orbitDuration="28s" shouldSpin spinDuration="10s"> {/* Faster spin */}
              <SparkleIcon className="size-8 text-pink-300/20"/>
            </Orbit>
            <Orbit size={440} rotation={178} shouldOrbit orbitDuration="31s" shouldSpin spinDuration="12s"> {/* Balanced spin */}
              <SparkleIcon className="size-10 text-pink-300/20"/>
            </Orbit>
            <Orbit size={710} rotation={145} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="25s"> {/* Slow spin */}
              <SparkleIcon className="size-14 text-pink-300/20"/>
            </Orbit>
            <Orbit size={720} rotation={90} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="30s"> {/* Very slow spin */}
              <div className="size-3 rounded-full bg-pink-300/20"/>
            </Orbit>
            <Orbit size={520} rotation={-40} shouldOrbit orbitDuration="29s" shouldSpin spinDuration="14s"> {/* Dynamic spin */}
              <div className="size-2 rounded-full bg-pink-300/20"/>
            </Orbit>
            <Orbit size={650} rotation={-5} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="22s"> {/* Smooth spin */}
              <div className="size-2 rounded-full bg-pink-300/20"/>
            </Orbit>
      </div>
    <div className="container">
      <div className="flex flex-col items-center">
        <Image 
          src={memojiImage}
          className="size-[100px]"
          alt="Person Peeking"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping "></div>
            </div>
          <div className="text-sm font-medium">Avaliable for New Project</div>
      </div>
    </div>
    <div className="max-w-lg mx-auto">
    <h1 className="font-serif text-3xl md:text-5xl text center mt-8 tracking-wide font-semibold text-center ">
      Learning Machine Learning
    </h1>
      <p className="mt-4 text-center text-white/60 md:text-lg">
        Aspiring ML Engineer skilled in Python for data manipulation and visualization. 
        Actively exploring Deep Learning and Natural Language Processing. 
        Committed to advancing AI through continuous learning. 
      </p>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
      <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
        <span className="font-semibold">Explore My Work</span>
        <ArrowDown className="size-4"/>
      </button>
      <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
        <span>😎</span>
        <span className="font-semibold">Let's Connect</span>
      </button>
    </div>
    </div>
  </div>
  );
};
