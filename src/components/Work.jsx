import { useState, useEffect } from "react";
import Card from "./ui/Card";

import resume from "../media/resume.pdf";

import classes from "./styles/work.module.css";

const projects = [
  {
    title: "Crypto Alerts",
    summary:
      "A Web App I built using Coingecko API to get the latest information about Crypto Currencies, Users can create and account Recieve Alerts based on changes in price or percentage of their selected coin.",
    url: "/",
    github: "https://github.com/saianirudh1/crypto-alerts",
  },

  {
    title: "Algorithm Visualizer",
    summary:
      "A project which I have built for visualizing all the famous algorithms out there to see and understand deeply how they actually work.",
    url: "https://saianirudh1.github.io/algorithm-visualizer/",
    github: "https://github.com/saianirudh1/algorithm-visualizer",
  },

  {
    title: "Forkify",
    summary:
      "A web app which searches for a recipes and displays them with cooking time, ingredients and servingsto prepare the dish. User can bookmark their favorite recipes and also upload new ones which can only be seen by them",
    url: "https://saianirudh-forkify.netlify.app/",
    github: "https://github.com/saianirudh1/forkify",
  },

  {
    title: "Quotes",
    summary:
      "A web app where you can write, browse and store your favorite quotes.",
    url: "https://saianirudh1.github.io/quotes",
    github: "https://github.com/saianirudh1/quote-app",
  },

  {
    title: "Mapty",
    summary:
      "A Web app which uses the Leaflet Library to display a Map where you can store your Running/Cycling Workouts",
    url: "https://saianirudh1.github.io/mapty/",
    github: "https://github.com/saianirudh1/mapty",
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
        <Card
          data={projects[0]}
          className={`${classes.project} ${classes["project-1"]}`}
        />
        <Card
          data={projects[1]}
          className={`${classes.project} ${classes["project-2"]}`}
        />
        <Card
          data={projects[2]}
          className={`${classes.project} ${classes["project-3"]}`}
        />
        <Card
          data={projects[3]}
          className={`${classes.project} ${classes["project-4"]}`}
        />
        <Card
          data={projects[4]}
          className={`${classes.project} ${classes["project-5"]}`}
        />
      </div>
      <div className={classes.resume}>
        <a href={resume} download="Sai Anirudh CV">
          &#10515; <span>Curriculum vitae</span>
        </a>
      </div>
    </section>
  );
}

export default Work;
