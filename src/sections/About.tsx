import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/Star.svg";
import bookImage from "@/assets/images/book-cover.png";
import { title } from "process";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/Github.svg";
import PythonIcon from "@/assets/icons/Python.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import Image from "next/image";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Python",
    iconType: PythonIcon ,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon ,
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
  return  (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="Who am I?"
          description="I am a Ml Engineer with a passion for creating accurate and functional model."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px] p-0">
           <CardHeader title="My Reads"
            description="I love reading books and exploring new topics."
            />
            <div className="w-40 mx-auto mt-8">
            <img src={bookImage.src} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader 
              title="Tech Toolbox" 
              description="Here are some of the technologies I have worked with." 
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="" />
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWraperClassName="-translate-x-1/2"/>
          </Card>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader 
            className="px-6 py-6"
            title="Beyond The code"  
            description="Explore my intrests and hobbies." 
             />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-pink-600 to-sky-400 rounded-full py-1.5 absolute " style={{
                  left: hobby.left,
                  top: hobby.top,
                }}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
            <Card className="h-[320px] p-0 relative">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top " />    
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-pink-600 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="Smile Memoji"  className="size-20"/>
              </div>
            </Card>
        </div>
      </div>
    </div>
  );
};
