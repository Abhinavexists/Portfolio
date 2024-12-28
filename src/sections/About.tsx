"use client";
import React, { useRef } from 'react';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/Github.svg";
import PythonIcon from "@/assets/icons/Python.svg";
import GitIcon from "@/assets/icons/git.svg";
import JavaIcon from "@/assets/icons/java.svg";
import FlaskIcon from "@/assets/icons/flask.svg";
import SqlIcon from "@/assets/icons/sqlite3.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import NumpyIcon from "@/assets/icons/numpy.svg";
import mapImage from "@/assets/images/Map.png";
import MatlpotlibIcon from "@/assets/icons/matplotlib.svg";
import SeabornIcon from "@/assets/icons/seaborn.svg";
import Pandasicon from "@/assets/icons/pandas.svg";
import ScikitIcon from "@/assets/icons/scikit-learn.svg";
import TenserflowIcon from "@/assets/icons/tensorflow.svg";
import StreamlitIcon from "@/assets/icons/streamlit.svg";
import LangchainIcon from "@/assets/icons/Langchain.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import Image from "next/image";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";

const toolboxItems1 = [
  {
    title: "Python",
    iconType: PythonIcon ,
  },
  {
    title: "Java",
    iconType: JavaIcon ,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon ,
  },
  {
    title: "Flask",
    iconType: FlaskIcon ,
  },
  {
    title: "Html5",
    iconType: HTMLIcon ,
  },
  {
    title: "CSS3",
    iconType: CSSIcon ,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon ,
  },
  {
    title: "Git",
    iconType: GitIcon ,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon ,
  },
]

const toolboxItems2 = [
  {
    title: "Numpy",
    iconType: NumpyIcon ,
  },
  {
    title: "Matplotlib",
    iconType: MatlpotlibIcon ,
  },
  {
    title: "Pandas",
    iconType: Pandasicon ,
  },
  {
    title: "Seaborn",
    iconType: SeabornIcon ,
  },
  {
    title: "Scikit-learn",
    iconType: ScikitIcon ,
  },
  {
    title: "Tensorflow",
    iconType: TenserflowIcon ,
  },
  {
    title: "Streamlit",
    iconType: StreamlitIcon ,
  },
  {
    title: "Sqlite3",
    iconType: SqlIcon ,
  },
  {
    title: "Langchain",
    iconType: LangchainIcon ,
  },
  {
    title: "Firebase",
    iconType: FirebaseIcon ,
  },
]

export const hobbies = [
  {
      title: "Art",
      emoji: "🎨",
      left: "5%",
      top: "5%",
  },
  {
      title: "Photography",
      emoji: "📷",
      left: "50%",
      top: "5%",
  },
  {
      title: "Gaming",
      emoji: "🎮",
      left: "10%",
      top: "30%",
  },
  {
      title: "Music",
      emoji: "🎵",
      left: "70%",
      top: "45%",
  },
  {
      title: "Gym",
      emoji: "🏋️‍♂️",
      left: "5%",
      top: "75%",
  },
  {
      title: "Athletics",
      emoji: "🏃‍♂️",
      left: "30%",
      top: "60%",
  },
  {
      title: "Hiking",
      emoji: "🌄",
      left: "40%",
      top: "40%",
  },
  {
      title: "Reading",
      emoji: "📚",
      left: "60%",
      top: "75%",
  },
  
]

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  return  (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="Who am I?"
          description="I am a Ml Engineer with a passion for creating accurate and functional model."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads"
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
              <ToolboxItems items={toolboxItems1}itemsWraperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems2} className="mt-6" itemsWraperClassName="animate-move-right [animation-duration:20s]"/>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader 
              className="px-6 py-6"
              title="Beyond The code"  
              description="Explore my intrests and hobbies." 
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full py-1.5 absolute " style={{
                    left: hobby.left,
                    top: hobby.top,
                  }} drag dragConstraints={constraintsRef}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-3 md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top " />    
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="Smile Memoji"  className="size-20"/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
