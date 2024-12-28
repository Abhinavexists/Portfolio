"use client";
import React, { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/Map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { TechToolbox } from "@/components/TechToolBox";
import { motion } from "framer-motion";
import Image from "next/image";

export const hobbies = [
  { title: "Art", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "30%" },
  { title: "Music", emoji: "🎵", left: "70%", top: "45%" },
  { title: "Gym", emoji: "🏋️‍♂️", left: "5%", top: "75%" },
  { title: "Athletics", emoji: "🏃‍♂️", left: "30%", top: "60%" },
  { title: "Hiking", emoji: "🌄", left: "40%", top: "40%" },
  { title: "Reading", emoji: "📚", left: "60%", top: "75%" },
];

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="Who am I?"
          description="I am an ML Engineer with a passion for creating accurate and functional models."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="I love reading books and exploring new topics."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <img src={bookImage.src} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Tech Toolbox"
                description="Here are some of the technologies I have worked with."
              />
              <TechToolbox />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond The Code"
                description="Explore my interests and hobbies."
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-3 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400">
                <Image src={smileMemoji} alt="Smile Memoji" width={80} height={80} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
