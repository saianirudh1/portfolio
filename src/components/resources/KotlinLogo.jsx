import classes from "./skills.module.css";

function KotlinLogo(props) {
  return (
    <div className={props.className}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.react}
      >
        <title />
        <path d="M1.3 24l11.3-11.5L24 24zM0 0h12L0 12.5zM13.4 0L0 14v10l12-12L24 0z" />
      </svg>
    </div>
  );
}
export default KotlinLogo;
