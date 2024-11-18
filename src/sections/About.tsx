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
        <div>
          <Card>
            <div>
              <StarIcon />
              <h3>My Reads</h3>
              <p>Exploring Books that are a feet apart.</p>
            </div>
              <img src={bookImage.src} alt="Book Cover" />
          </Card>
          <Card>
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>Beyond The code</h3>
              <p>Explore my intrests and hobbies.</p>
            </div>
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
            <Card>
              <Image src={mapImage} alt="Map" />    
              <Image src={smileMemoji} alt="Smile Memoji" />
            </Card>
        </div>
      </div>
    </div>
  );
};
