import styles from "./SelectTip.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { tipActions } from "../../Store/Tip";
import { customTipActions } from "../../Store/CustomTip";
import { resetActions } from "../../Store/Reset";

const SelectTip = () => {
  const dispatch = useDispatch();
  const tip = useSelector((state) => state.tip.value);
  const customTip = useSelector((state) => state.customTip.value);

  const selectTipHandler = (percent) => {
    dispatch(tipActions.change(percent));
    dispatch(customTipActions.change(""));
    dispatch(resetActions.enable());
  };

  const selectCustomTipHandler = (percent) => {
    if (percent > 100) {
      return;
    }
    if (percent < 0) {
      return;
    }
    dispatch(customTipActions.change(percent));
    dispatch(tipActions.change(customTip));
    dispatch(resetActions.enable());
  };

  return (
    <div>
      <header className={styles["select-tip__header"]}>Select Tip %</header>
      <div className={styles["select-tip__grid"]}>
        <Button
          className={tip === 5 && "selected"}
          percent={5}
          selectTip={selectTipHandler}
        >
          5%
        </Button>
        <Button
          className={tip === 10 && "selected"}
          percent={10}
          selectTip={selectTipHandler}
        >
          10%
        </Button>
        <Button
          className={tip === 15 && "selected"}
          percent={15}
          selectTip={selectTipHandler}
        >
          15%
        </Button>
        <Button
          className={tip === 25 && "selected"}
          percent={25}
          selectTip={selectTipHandler}
        >
          25%
        </Button>
        <Button
          className={tip === 50 && "selected"}
          percent={50}
          selectTip={selectTipHandler}
        >
          50%
        </Button>
        <Input
          type="number"
          placeholder="Custom"
          onChange={selectCustomTipHandler}
          value={customTip}
          id="custom"
          min={0}
          max={100}
        />
      </div>
    </div>
  );
};

export default SelectTip;
