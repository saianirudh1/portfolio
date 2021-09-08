import classes from "./styles/work.module.css";
import Card from "./ui/Card";

function Work() {
  const projects = [
    {
      title: "Algorithm Visualizer",
      summary:
        "This is a project which I have built for visualizing all the famous algorithms out there to see and understand deeply how they actually work.",
      url: "/",
    },
  ];
  return (
    <section className={classes["work-container"]}>
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
