import classes from "../styles/card.module.css";

function Card(props) {
  const data = props.data;
  return (
    <div>
      <div className={`${classes.card} ${props.className}`}>
        <p>{data.summary}</p>
        <button>
          <a href={data.url}>Learn More</a>
        </button>
        <a href="/">
          <div className={`fa fa-github ${classes.github}`} />
        </a>
      </div>
      <h1 className={classes["card-title"]}>{data.title}</h1>
    </div>
  );
}

export default Card;
