import { useState, useEffect } from "react";
import Card from "./ui/Card";
import classes from "./styles/work.module.css";

const projects = [
  {
    title: "Algorithm Visualizer",
    summary:
      "This is a project which I have built for visualizing all the famous algorithms out there to see and understand deeply how they actually work.",
    url: "/",
  },
];

function Work() {
  const [transform, setTransform] = useState({});
  useEffect(() => {
    const transition = setTimeout(() => {
      setTransform({ transform: "none", opacity: 1 });
    }, 300);

    return () => {
      clearTimeout(transition);
    };
  }, []);

  return (
    <section className={classes["work-container"]} style={transform}>
      <h1 className={classes["work-heading"]}>.projects</h1>
      <div className={classes.projects}>
        <Card data={projects[0]} className={classes["project-1"]} />
        <Card data={projects[0]} className={classes["project-1"]} />
        <Card data={projects[0]} className={classes["project-1"]} />
        <Card data={projects[0]} className={classes["project-1"]} />
        <Card data={projects[0]} className={classes["project-1"]} />
        <Card data={projects[0]} className={classes["project-1"]} />
      </div>
    </section>
  );
}

export default Work;
