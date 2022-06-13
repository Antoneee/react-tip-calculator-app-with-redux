import styles from "./ConfigureTip.module.css";
import Input from "../UI/Input";
import dollarIcon from "../../Assets/icon-dollar.svg";
import personIcon from "../../Assets/icon-person.svg";
import SelectTip from "./SelectTip";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { billActions } from "../../Store/Bill";
import { peopleActions } from "../../Store/People";
import { resetActions } from "../../Store/Reset";

const ConfigureTip = () => {
  const reset = useSelector((state) => state.reset.value);
  const [billError, setBillError] = useState(null);
  const [peopleError, setPeopleError] = useState(null);

  const dispatch = useDispatch();
  const bill = useSelector((state) => state.bill.value);
  const people = useSelector((state) => state.people.value);

  const errorCheck = (value, min, max, errState, actions) => {
    if (value > max) {
      errState(`Can't be over ${max}`);
      return;
    }
    if (value < 0) {
      errState(`Can't be less than ${min}`);
      return;
    }
    if (value === "0") {
      errState("Can't be 0");
      return;
    }
    errState(null);
    dispatch(actions.change(value));
    dispatch(resetActions.enable());
  };

  const billChangeHandler = (value) => {
    errorCheck(value, 0, 1000000, setBillError, billActions);
  };

  const peopleChangeHandler = (value) => {
    errorCheck(value, 0, 100, setPeopleError, peopleActions);
  };

  useEffect(() => {
    if (!reset) {
      setBillError(null);
      setPeopleError(null);
    }
  }, [reset]);

  return (
    <section className={styles["configure-tip__container"]}>
      <Input
        type="number"
        icon={dollarIcon}
        label="Bill"
        value={bill}
        onChange={billChangeHandler}
        placeholder="0"
        error={billError}
      />
      <SelectTip />
      <Input
        type="number"
        icon={personIcon}
        label="Number of People"
        value={people}
        onChange={peopleChangeHandler}
        placeholder="0"
        error={peopleError}
      />
    </section>
  );
};

export default ConfigureTip;
