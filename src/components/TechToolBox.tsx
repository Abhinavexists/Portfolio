"use client";
import React from 'react';
import { ToolboxItems } from "@/components/ToolboxItems";
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
import MatplotlibIcon from "@/assets/icons/matplotlib.svg";
import SeabornIcon from "@/assets/icons/seaborn.svg";
import PandasIcon from "@/assets/icons/pandas.svg";
import ScikitIcon from "@/assets/icons/scikit-learn.svg";
import TensorflowIcon from "@/assets/icons/tensorflow.svg";
import StreamlitIcon from "@/assets/icons/streamlit.svg";
import LangchainIcon from "@/assets/icons/Langchain.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";

const toolboxItems1 = [
  { title: "Python", iconType: PythonIcon },
  { title: "Java", iconType: JavaIcon },
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "Flask", iconType: FlaskIcon },
  { title: "Html5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSSIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Github", iconType: GithubIcon },
  { title: "Git", iconType: GitIcon },
  { title: "MongoDB", iconType: MongoDBIcon },
];

const toolboxItems2 = [
  { title: "Numpy", iconType: NumpyIcon },
  { title: "Matplotlib", iconType: MatplotlibIcon },
  { title: "Pandas", iconType: PandasIcon },
  { title: "Seaborn", iconType: SeabornIcon },
  { title: "Scikit-learn", iconType: ScikitIcon },
  { title: "Tensorflow", iconType: TensorflowIcon },
  { title: "Streamlit", iconType: StreamlitIcon },
  { title: "Sqlite3", iconType: SqlIcon },
  { title: "Langchain", iconType: LangchainIcon },
  { title: "Firebase", iconType: FirebaseIcon },
];

export const TechToolbox = () => {
  return (
    <>
      <ToolboxItems
        items={toolboxItems1}
        itemsWraperClassName="animate-move-left [animation-duration:30s]"
      />
      <ToolboxItems
        items={toolboxItems2}
        className="mt-6"
        itemsWraperClassName="animate-move-right [animation-duration:20s]"
      />
    </>
  );
};
