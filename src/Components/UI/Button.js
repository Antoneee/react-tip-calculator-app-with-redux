import styles from "./Button.module.css";

const Button = (props) => {
  const clickHandler = () => {
    props.selectTip(props.percent);
  };

  const resetHandler = () => {
    props.reset();
  };

  const classes = `${styles.button} ${styles[`${props.className}`]}`;
  return (
    <button
      className={classes}
      onClick={props.id === "reset" ? resetHandler : clickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
