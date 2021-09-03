import classes from "./skills.module.css";

function CssLogo(props) {
  return (
    <div className={props.className}>
      <svg
        version="1.1"
        id="Layer_1"
        viewBox="0 0 500 500"
        className={classes.css}
      >
        <g id="XMLID_1_">
          <polygon
            id="XMLID_11_"
            className={classes.text}
            points="145.7,401.1 122.5,140.7 377.5,140.7 354.3,401 249.8,430 	"
          />
          <polygon
            id="XMLID_35_"
            className={classes.bg}
            points="167.1,222.1 164,192 336,192 334,226.9 261.3,259 331,259 323.5,358 253.2,376.9 
		180.3,359.2 175.8,309 208,309 209.8,335.5 252,343.4 291,331.4 292.8,289 173,289 170.8,257.5 250,222.8 	"
          />
          <g id="XMLID_2_">
            <polygon
              className={classes.bg}
              id="XMLID_39_"
              points="170.8,257.5 173,289 250,289 250,222.8 		"
            />
            <polygon
              className={classes.bg}
              id="XMLID_40_"
              points="209.8,335.5 208,309 175.8,309 180.3,359.2 250,376.1 250,343 		"
            />
            <polygon
              className={classes.bg}
              id="XMLID_41_"
              points="164,192 167.1,222.1 250,222.8 250,192 		"
            />
          </g>
          <g id="XMLID_36_">
            <polygon
              className={classes.text}
              id="XMLID_34_"
              points="274,82 274,70 226,70 226,98 259,98 259,107 225,107 225,118 273,118 273,89 239,89 239,82 		"
            />
            <polygon
              className={classes.text}
              id="XMLID_38_"
              points="187,98.3 187,107 221,107 221,118 173,118 173,89.3 173,70 220,70 220,82 187,82 		"
            />
            <polygon
              className={classes.text}
              id="XMLID_37_"
              points="327,82 327,70 279,70 279,98 312,98 312,107 278,107 278,118 326,118 326,89 292,89 292,82 		"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
export default CssLogo;
