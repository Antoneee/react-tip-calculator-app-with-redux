import styles from "./Results.module.css";
import TipResult from "./TipResult";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { billActions } from "../../Store/Bill";
import { tipActions } from "../../Store/Tip";
import { customTipActions } from "../../Store/CustomTip";
import { peopleActions } from "../../Store/People";
import { resetActions } from "../../Store/Reset";

const Results = () => {
  const dispatch = useDispatch();
  const bill = useSelector((state) => state.bill.value);
  const tip = useSelector((state) => state.tip.value);
  const customTip = useSelector((state) => state.customTip.value);
  const people = useSelector((state) => state.people.value);
  const isReset = useSelector((state) => state.reset.value);

  const tipAmount = (
    (bill / people) *
    ((customTip ? customTip : tip) / 100)
  ).toFixed(2);
  const total = (
    bill / people +
    (bill / people) * ((customTip ? customTip : tip) / 100)
  ).toFixed(2);
  const tipAmountCheck = !isNaN(tipAmount) ? tipAmount : Number(0).toFixed(2);
  const totalCheck = !isNaN(total) ? total : Number(0).toFixed(2);

  const resetCalculator = () => {
    dispatch(billActions.change(""));
    dispatch(tipActions.change(0));
    dispatch(customTipActions.change(""));
    dispatch(peopleActions.change(""));
    dispatch(resetActions.disable());
  };

  return (
    <section className={styles["results-container"]}>
      <div className={styles["results"]}>
        <TipResult label="Tip Amount" amount={tipAmountCheck} />
        <TipResult label="Total" amount={totalCheck} />
      </div>
      <Button
        className={`${isReset ? "reset" : "disable"}`}
        reset={resetCalculator}
        id="reset"
      >
        Reset
      </Button>
    </section>
  );
};

export default Results;
