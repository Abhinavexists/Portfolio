import NeuNet from "@/assets/images/NeuNet.png";
import Brieflet from "@/assets/images/Brieflet.png";
import ArrowDetection from "@/assets/images/ArrowDetection.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import GithubIcon from "@/assets/icons/Github.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    "company": "Python, NumPy, Matplotlib, Plotly",
    "year": "2024",
    "title": "NeuNet",
    "results": [
      { "title": "Implemented a fully connected neural network with backpropagation" },
      { "title": "Achieved 92% accuracy on synthetic spiral dataset" },
      { "title": "Introduced dynamic learning rate decay and accuracy evaluation" }
    ],
    "link": { "url": "https://github.com/Abhinavexists/neural-network-from-scratch", "target": "_blank" },
    "liveLink": "https://github.com/Abhinavexists/neural-network-from-scratch",
    "image": NeuNet
  },
  {
    "company": "Python, Flask, PyTorch, Transformers, scikit-learn, NLTK, PyPDF2",
    "year": "2024",
    "title": "Brieflet",
    "results": [
      { "title": "Automated domain classification of research papers" },
      { "title": "Generated concise, informative summaries for research papers" },
      { "title": "Extracted key sections like abstract, introduction, methodology, results, and conclusion" }
    ],
    "link": { "url": "https://github.com/Abhinavexists/brieflet", "target": "_blank" },
    "liveLink": "https://github.com/Abhinavexists/brieflet",
    "image": Brieflet
  },
  {
    "company": "Python, OpenCV",
    "year": "2023",
    "title": "ArrowDetection",
    "results": [
      { "title": "Real-time video processing for arrow shape detection" },
      { "title": "Implemented adjustable HSV thresholds for fine-tuning detection" },
      { "title": "Highlighted detected arrows with bounding boxes and contours" }
    ],
    "link": { "url": "https://github.com/Abhinavexists/ArrowDetection", "target": "_blank" },
    "liveLink": "https://github.com/Abhinavexists/ArrowDetection",
    "image": ArrowDetection
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="What Have I Made?"
          title="Featured Projects"
          description="Here are some of the projects I have worked on. Each project has helped me grow as a developer and learn new skills."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-indigo-400 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50 items-center transition-all duration-300 ease-in-out hover:translate-x-1"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 text-indigo-400 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                    <a href={project.link.url} className="inline-block w-full sm:w-auto">
                      <button className="bg-white text-gray-950 h-12 w-full px-4 sm:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <span>Github</span>
                        <GithubIcon className="size-5" />
                      </button>
                    </a>
                    {/* <a href={project.liveLink} className="inline-block w-full sm:w-auto">
                      <button className="bg-indigo-500 text-white h-12 w-full px-4 sm:px-6 rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span>Website</span>
                        <ArrowUpIcon className="size-5" />
                      </button>
                    </a> */}
                  </div>
                </div>
                <div className="relative overflow rounded-lg mt-8 lg:mt-0 lg:pl-16">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto lg:absolute lg:h-full lg:w-auto lg:max-w-none transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

