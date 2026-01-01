import { useState } from "react";
import classes from "./UserInput.module.css";

const INITIAL_INPUT = {
  "current-savings": 10000,
  "yearly-contribution": 1000,
  "expected-return": 100,
  duration: 10,
};

const UserInput = (props) => {
  const [inputData, setInputData] = useState(INITIAL_INPUT);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(inputData);
  };

  const resetHandler = () => {
    setInputData(INITIAL_INPUT);
  };

  const inputChangeHandler = (input, value) => {
    setInputData((prevInputData) => ({ ...prevInputData, [input]: value }));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={inputData["current-savings"]}
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={inputData["yearly-contribution"]}
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={inputData["expected-return"]}
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={inputData["duration"]}
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={classes["actions"]}>
        <button
          type="reset"
          className={classes["buttonAlt"]}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
