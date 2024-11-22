import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const Achivements = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const AchivementsSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-full md:max-w-4xl lg:max-w-[100rem] mx-auto">
        <SectionHeader
          eyebrow="Achivements"
          title="What I have accomplished till now?"
          description="Doing many amazing things has been a part of my college life, but there's still a lot to be done, so I'm working on it."
        />

        <div
          className="mt-12 flex overflow-x-clip py-4 -my-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:70s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {Achivements.map((achievement) => (
                  <Card
                    key={achievement.name}
                    className="max-w-[23rem] md:max-w-md p-6 md:p-8 lg:max-w-lg hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 lg:size-20">
                        <Image
                          src={achievement.avatar}
                          alt={achievement.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold lg:text-2xl">
                          {achievement.name}
                        </div>
                        <div className="text-sm text-white/40 lg:text-lg">
                          {achievement.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm text-justify md:text-base lg:text-lg">
                      {achievement.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
