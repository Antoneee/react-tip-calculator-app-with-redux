import styles from "./Input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resetActions } from "../../Store/Reset";

const Input = (props) => {
  const dispatch = useDispatch();
  const reset = useSelector((state) => state.reset.value);

  const changeHandler = (event) => {
    dispatch(resetActions.enable());
    props.onChange(event.target.value);
  };

  return (
    <div className={styles["input-field"]}>
      <div className={styles["input-field__header"]}>
        {props.label && (
          <label className={styles["input-field__label"]}>{props.label}</label>
        )}
        {reset && props.error && (
          <p className={styles["input-field__error"]}>{props.error}</p>
        )}
      </div>
      <div className={styles["input-field__container"]}>
        {props.icon && (
          <img
            className={styles["input-field__icon"]}
            src={props.icon}
            alt="Input field icon."
          />
        )}
        <input
          className={`${styles["input-field__input"]} ${
            reset && props.error && styles["input-field__input-error"]
          }`}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default Input;
