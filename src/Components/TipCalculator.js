import styles from "./TipCalculator.module.css";
import ConfigureTip from "./Inputs/ConfigureTip";
import Results from "./Outputs/Results";

const TipCalculator = () => {
  return (
    <main className={styles["calculator-container"]}>
      <ConfigureTip />
      <Results />
    </main>
  );
};

export default TipCalculator;
