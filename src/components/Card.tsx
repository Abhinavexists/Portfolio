import { Children, ComponentPropsWithRef, PropsWithChildren } from "react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from 'tailwind-merge';

export const Card = ({ className , children, ...other }: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={twMerge(
        "bg-gray-900 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};