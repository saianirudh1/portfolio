import { Link } from "react-router-dom";
import classes from "./styles/thanks.module.css";

function Thankyou() {
  return (
    <section className={classes["thanks-container"]}>
      <div className={classes.thanks}>
        <h1>Thank you for reaching out!</h1>
        <h2>Expect a reply soon!</h2>
      </div>
      <div>
        <Link to="/">
          <button>Back to Home </button>
        </Link>
      </div>
    </section>
  );
}

export default Thankyou;
