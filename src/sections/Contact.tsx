import ArrowUpRighticon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 z">
      <div className="max-w-[85%] md:max-w-4xl lg:max-w-[80rem] mx-auto">
        <div className="bg-gradient-to-r from-indigo-400 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl  text-center md:text-left relative overflow-hidden z-[10]">
          <div
            className="absolute inset-0 opacity-5 -z[-1]"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center z-[10]">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl z-[10]">
                Let's Create Something Amazing Together</h2>
              <p className="text-sm mt-2 md:text-base z-[10]">
                Passionate About Turning Visions into Reality? Let’s Connect and Discuss How I Can Help You Achieve Your Goals.
              </p>
            </div>
            <div>
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                  <span className="font-semibold z-[10]">Contact Me</span>
                  <ArrowUpRighticon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};