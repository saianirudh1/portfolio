import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

import classes from "./lightBulb.module.css";

function LightBulb(props) {
  const theme = useContext(ThemeContext).theme;
  const toggleTheme = useContext(ThemeContext).toggleTheme;
  const setIntro = useContext(ThemeContext).setIntro;

  const themeHandler = function () {
    toggleTheme();

    setIntro(true);

    setTimeout(() => {
      setIntro(false);
    }, 4250);
  };

  const themeClass = `${classes[`bulb-${theme}`]}`;
  return (
    <div className={props.className} style={props.style}>
      <svg
        width="2rem"
        height="2rem"
        viewBox="0 0 135.46666 135.46666"
        id="svg"
        className={themeClass}
        onClick={themeHandler}
      >
        <g id="layer1" transform="translate(133.50592,-79.389557)">
          <g id="g15643" transform="rotate(180,0.57695046,154.33479)">
            <path
              className={classes.first}
              d="m 60.375829,210.50288 c -13.90171,-2.44623 -25.601058,-12.69786 -29.902241,-26.20201 -1.2148,-3.81404 -1.709772,-7.22255 -1.709772,-11.77396 0,-6.40314 1.149152,-11.5033 3.668501,-16.28152 2.287357,-4.33823 4.466748,-6.79696 13.76818,-15.53292 5.836261,-5.48145 7.998121,-8.62911 9.022612,-13.13687 l 0.457324,-2.01223 h 2.183447 2.183445 v 11.62691 11.62691 l 0.633378,0.73635 c 0.902682,1.04943 2.593062,1.04943 3.495744,0 l 0.633378,-0.73635 v -11.62691 -11.62691 h 2.116666 2.116667 v 11.62691 11.62691 l 0.633378,0.73635 c 0.902682,1.04943 2.593062,1.04943 3.495744,0 l 0.633378,-0.73635 0.01423,-11.16389 c 0.01413,-11.08271 0.01765,-11.15331 0.485249,-9.70868 1.429297,4.41579 3.606731,7.13679 11.27448,14.08901 7.598515,6.88945 10.745657,11.1698 13.082155,17.79271 1.879518,5.32757 2.490088,13.353 1.489618,19.57973 -2.019184,12.56707 -10.129816,23.70952 -21.45094,29.46948 -1.67936,0.85443 -2.764393,1.18759 -5.251812,1.61258 -3.98822,0.6814 -9.250526,0.68734 -13.072808,0.0147 z m 3.231518,-49.12053 c 0.747815,-0.28697 1.202478,-1.57809 1.202478,-3.41474 0,-1.58506 -0.07421,-1.82749 -0.773398,-2.52668 -0.822122,-0.82212 -1.678266,-0.97107 -2.756853,-0.47964 -0.912672,0.41585 -1.232249,1.30666 -1.232249,3.43489 0,1.61318 0.08364,1.9353 0.649433,2.50109 0.646004,0.646 1.932488,0.86041 2.910589,0.48508 z m 9.548878,-0.48508 c 0.565793,-0.56579 0.649433,-0.88791 0.649433,-2.50109 0,-2.12823 -0.319577,-3.01904 -1.232249,-3.43489 -1.090031,-0.49665 -1.934403,-0.34281 -2.784536,0.50732 -0.780442,0.78044 -0.798581,0.8561 -0.704112,2.93634 0.08437,1.85787 0.177702,2.20063 0.718452,2.6385 0.913919,0.74005 2.537571,0.66926 3.353012,-0.14618 z"
              id="path15705"
            />
            <path
              className={classes.second}
              styles="fill:#fcc006;stroke-width:0.264583"
              d="m 79.626491,208.6051 c 9.562835,-5.75901 15.798754,-13.17011 19.003202,-22.58444 2.894487,-8.50372 2.846257,-19.17309 -0.122335,-27.05992 -2.3744,-6.3082 -5.513975,-10.32648 -14.482008,-18.53523 -2.310056,-2.11448 -4.90443,-4.68636 -5.765281,-5.7153 -1.709304,-2.04307 -3.73394,-5.90558 -4.135779,-7.89007 l -0.254481,-1.25677 h 2.151369 2.151372 l 0.457324,2.01223 c 1.024491,4.50776 3.186351,7.65542 9.022612,13.13687 9.301432,8.73596 11.480823,11.19469 13.768184,15.53292 2.51935,4.77822 3.6685,9.87838 3.6685,16.28152 0,8.04699 -1.98188,14.80404 -6.231763,21.24666 -4.305573,6.52705 -9.970265,11.23652 -17.278683,14.36503 -2.682909,1.14847 -3.348913,1.30761 -1.952233,0.4665 z"
              id="path15701"
            />
            <path
              className={classes.third}
              styles="fill:#01a7f2;stroke-width:0.264583"
              d="m 55.813992,114.76157 c 0,-5.9707 0.007,-6.04583 0.612365,-6.61458 0.601168,-0.56477 0.760306,-0.57529 8.702942,-0.57529 9.207441,0 8.411775,-0.2398 8.411775,2.53518 v 1.69816 l -6.01927,0.008 c -6.307367,0.009 -6.536743,0.0482 -7.166679,1.23096 -0.481401,0.90387 -0.364659,1.83997 0.330298,2.64847 l 0.638099,0.74236 6.108776,0.08 6.108776,0.08 v 2.10284 2.10284 h -8.863541 -8.863541 z"
              id="path15693"
            />
            <path
              className={classes.fourth}
              styles="fill:#0176ba;stroke-width:0.264583"
              d="m 73.805658,118.6842 v -2.11666 h 2.116666 2.116667 v 2.11666 2.11667 h -2.116667 -2.116666 z m 0,-8.31715 c 0,-0.79089 -0.116115,-1.74339 -0.258035,-2.11666 l -0.258035,-0.67869 h 1.799415 c 2.378014,0 2.949988,0.52913 2.949988,2.72903 v 1.50431 h -2.116667 -2.116666 z"
              id="path15681"
            />
            <path
              className={classes.fifth}
              styles="fill:#535a5d;stroke-width:0.264583"
              d="m 60.311908,101.38968 c 0,-1.03547 0.148366,-1.608146 0.548371,-2.11667 l 0.54837,-0.69714 h 5.517842 5.517843 l 0.54837,0.69714 c 0.400005,0.508524 0.54837,1.0812 0.54837,2.11667 v 1.41952 h -6.614583 -6.614583 z"
              id="path15677"
            />
            <path
              className={classes.outline}
              styles="fill:#000000;stroke-width:0.264583"
              d="m 65.358195,228.31831 c -0.477954,-0.60762 -0.54837,-1.06439 -0.54837,-3.55712 0,-2.61765 0.0525,-2.92102 0.619585,-3.58029 0.442714,-0.51469 0.870077,-0.72031 1.497081,-0.72031 0.627005,0 1.054368,0.20562 1.497082,0.72031 0.567086,0.65927 0.619585,0.96264 0.619585,3.58029 0,2.49273 -0.07042,2.9495 -0.54837,3.55712 -0.422979,0.53773 -0.78159,0.69714 -1.568297,0.69714 -0.786706,0 -1.145317,-0.15941 -1.568296,-0.69714 z m -26.838729,-6.99498 c -1.086464,-0.85462 -0.936241,-1.941 0.636598,-4.60388 1.464511,-2.47947 2.268323,-3.19924 3.28722,-2.94351 0.889366,0.22322 1.729042,1.17579 1.729042,1.96151 0,0.35483 -0.499377,1.55277 -1.109726,2.66209 -1.858476,3.37781 -3.017594,4.12378 -4.543134,2.92379 z m 54.102648,-0.17924 c -0.997495,-1.00523 -2.941457,-4.61136 -2.941457,-5.45653 0,-1.41621 1.853144,-2.42484 3.033813,-1.65123 0.35679,0.23378 1.248891,1.44118 1.982449,2.68312 1.572839,2.66288 1.723061,3.74926 0.636598,4.60388 -0.950622,0.74776 -1.850575,0.68827 -2.711403,-0.17924 z m -32.08015,-6.01294 c -16.71049,-2.72468 -30.085047,-14.50113 -34.713575,-30.5657 -1.178904,-4.09171 -1.581052,-7.17977 -1.567739,-12.03854 0.02475,-9.03217 2.166067,-16.09282 6.894444,-22.7333 1.621702,-2.2775 5.724265,-6.51201 12.137439,-12.5278 4.426143,-4.15188 6.06675,-6.29916 7.187224,-9.40688 0.673372,-1.86764 0.686887,-2.04794 0.826587,-11.02681 0.13543,-8.70435 0.168534,-9.17726 0.713105,-10.18646 0.66674,-1.23561 1.724935,-2.27662 2.934647,-2.887 0.848799,-0.42828 0.859896,-0.45815 0.859896,-2.31462 0,-2.524973 0.409374,-3.736034 1.777121,-5.257298 1.849837,-2.057464 2.614703,-2.24108 9.335378,-2.24108 6.720676,0 7.485541,0.183616 9.335378,2.24108 1.367748,1.521264 1.777122,2.732325 1.777122,5.257298 0,1.85647 0.01109,1.88634 0.859896,2.31462 1.209712,0.61038 2.267907,1.65139 2.934647,2.887 0.54457,1.0092 0.577675,1.48211 0.713105,10.18646 0.138832,8.9231 0.157059,9.1698 0.811482,10.98338 1.12372,3.11414 2.353559,4.73316 6.931488,9.12495 10.497391,10.07058 12.580091,12.4442 15.099611,17.20883 1.60217,3.02982 2.99505,7.1667 3.64881,10.837 0.72185,4.05253 0.76869,10.89139 0.10058,14.68438 -3.13315,17.78749 -16.089035,31.28067 -33.676317,35.07292 -3.389436,0.73084 -11.519764,0.94204 -14.920329,0.38757 z m 12.073069,-4.24306 c 14.460584,-2.17063 26.21433,-12.09481 30.823997,-26.02597 1.38252,-4.17822 1.88837,-7.45021 1.88109,-12.16748 -0.0109,-7.06401 -0.98892,-11.39612 -3.78848,-16.78102 -2.170649,-4.17522 -5.037087,-7.45353 -12.268107,-14.03087 -5.962969,-5.42393 -8.116138,-8.10478 -9.707583,-12.08667 -0.378179,-0.94622 -0.770482,-2.34521 -0.871781,-3.10885 l -0.184184,-1.38844 H 76.02053 73.541074 v 11.65905 c 0,6.95788 -0.102608,11.85079 -0.254471,12.13455 -0.139959,0.26152 -0.616209,0.62532 -1.058333,0.80846 -1.019752,0.42239 -2.188781,-0.002 -2.621624,-0.95219 -0.207499,-0.45541 -0.298905,-4.17177 -0.298905,-12.15295 v -11.49692 h -2.38125 -2.381249 v 11.49692 c 0,7.98118 -0.09141,11.69754 -0.298906,12.15295 -0.432842,0.94998 -1.601872,1.37458 -2.621623,0.95219 -0.442124,-0.18314 -0.918374,-0.54694 -1.058334,-0.80846 -0.151863,-0.28376 -0.254471,-5.17667 -0.254471,-12.13455 v -11.65905 h -2.453203 -2.453201 l -0.333369,1.78593 c -0.363138,1.9454 -1.647703,4.89374 -2.996523,6.87762 -1.565441,2.30249 -3.648167,4.47759 -8.642775,9.02611 -6.736442,6.13477 -9.305668,9.2097 -11.637467,13.92804 -2.351305,4.75782 -3.252216,9.11482 -3.262506,15.77815 -0.0073,4.71727 0.498568,7.98926 1.881092,12.16748 4.579525,13.84008 16.277833,23.78295 30.603885,26.01149 3.157987,0.49125 8.377565,0.49776 11.597192,0.0145 z M 60.887195,160.66975 c -0.481164,-0.51217 -0.575287,-0.92538 -0.575287,-2.52557 0,-1.67852 0.07966,-1.99286 0.649433,-2.56263 0.409372,-0.40937 0.951728,-0.64943 1.467234,-0.64943 0.515506,0 1.057862,0.24006 1.467234,0.64943 0.564218,0.56422 0.649433,0.88934 0.649433,2.47786 0,1.44914 -0.113753,1.97304 -0.548371,2.52557 -0.732467,0.93118 -2.275011,0.97323 -3.109676,0.0848 z m 8.968916,-0.0848 c -0.434617,-0.55253 -0.54837,-1.07643 -0.54837,-2.52557 0,-1.58852 0.08522,-1.91364 0.649433,-2.47786 0.409372,-0.40937 0.951728,-0.64943 1.467234,-0.64943 0.515506,0 1.057862,0.24006 1.467233,0.64943 0.564219,0.56422 0.649433,0.88934 0.649433,2.47786 0,2.34602 -0.575807,3.22271 -2.116666,3.22271 -0.786707,0 -1.145318,-0.15941 -1.568297,-0.69714 z m 8.447463,-41.90078 v -2.38125 h -8.3464 -8.346402 l -0.649431,-0.64943 c -0.857377,-0.85738 -0.876048,-2.22043 -0.04116,-3.00477 0.593124,-0.55721 0.815499,-0.57319 8.929687,-0.64143 l 8.321413,-0.07 0.07754,-1.60618 c 0.06962,-1.4422 0.0052,-1.67854 -0.631391,-2.3151 l -0.708932,-0.70893 H 66.878385 56.848272 l -0.64943,0.64943 -0.649433,0.64943 v 6.22974 6.22973 h 11.377082 11.377083 z m -4.497916,-17.08302 c 0,-1.51857 -0.306052,-2.39077 -1.035405,-2.95075 -0.445444,-0.342001 -10.680048,-0.497282 -11.52045,-0.174789 -0.703913,0.270117 -1.202478,1.567779 -1.202478,3.129799 v 1.46835 h 6.879166 6.879167 z m -55.129941,99.8784 c -0.739566,-0.58174 -0.927429,-1.70195 -0.438602,-2.61534 0.256108,-0.47854 3.748737,-2.65435 5.044561,-3.14262 0.965687,-0.36388 2.228266,0.22794 2.568506,1.20395 0.492578,1.413 -0.09497,2.16927 -2.886956,3.71598 -1.376439,0.76252 -2.74736,1.3864 -3.046493,1.3864 -0.299132,0 -0.857589,-0.24677 -1.241016,-0.54837 z m 92.197203,-0.84275 c -2.77513,-1.54711 -3.36063,-2.30419 -2.87012,-3.71126 0.34024,-0.97601 1.60282,-1.56783 2.56851,-1.20395 1.29582,0.48827 4.78845,2.66408 5.04456,3.14262 0.68271,1.27565 -0.30254,3.16621 -1.64767,3.16165 -0.33403,-0.001 -1.72691,-0.62621 -3.09528,-1.38906 z M 11.974731,174.7733 c -0.905568,-0.36477 -1.480126,-1.43201 -1.274629,-2.36763 0.299302,-1.36272 0.945678,-1.59858 4.380809,-1.59858 2.866945,0 3.10806,0.0405 3.645296,0.61236 0.97455,1.03736 0.732707,2.5954 -0.50197,3.23388 -0.83903,0.43388 -5.25952,0.51874 -6.249506,0.11997 z m 103.767379,-0.0261 c -1.34201,-0.76518 -1.6205,-2.38567 -0.57826,-3.36481 0.55592,-0.52225 0.89468,-0.57528 3.67486,-0.57528 3.42918,0 4.04715,0.24842 4.33538,1.74277 0.12227,0.63394 0.009,0.98923 -0.50492,1.5875 -0.6472,0.75302 -0.72847,0.77239 -3.53017,0.84115 -1.79005,0.0439 -3.06658,-0.043 -3.39689,-0.23133 z M 21.285869,148.95092 c -1.164167,-0.67718 -2.384557,-1.47467 -2.711979,-1.77218 -0.760405,-0.69096 -0.796759,-2.09934 -0.07288,-2.82322 1.013659,-1.01366 1.681692,-0.94805 4.034949,0.39627 2.853908,1.63034 3.380114,2.12627 3.380114,3.18568 0,1.0741 -0.695484,1.92549 -1.719792,2.10533 -0.617896,0.10848 -1.262692,-0.13342 -2.910416,-1.09188 z m 87.348181,0.67033 c -0.53189,-0.41839 -0.69714,-0.78376 -0.69714,-1.54138 0,-1.21999 0.42859,-1.64198 3.38011,-3.32808 2.35326,-1.34432 3.02129,-1.40993 4.03495,-0.39627 0.72379,0.72378 0.68745,2.13199 -0.0729,2.82442 -0.92048,0.83827 -4.81665,2.98968 -5.41427,2.98968 -0.2935,0 -0.84735,-0.24677 -1.23077,-0.54837 z"
              id="path15645"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default LightBulb;
