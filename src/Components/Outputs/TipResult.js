import styles from "./TipResult.module.css";

const TipResult = (props) => {
  return (
    <div className={styles["tip-result__container"]}>
      <div className={styles["tip-result__labels"]}>
        <header className={styles["tip-result__header"]}>{props.label}</header>
        <p className={styles["tip-result__per-person"]}>/ person</p>
      </div>
      <h2 className={styles["tip-result__amount"]}>${props.amount}</h2>
    </div>
  );
};

export default TipResult;
