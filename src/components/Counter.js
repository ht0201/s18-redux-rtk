import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/reducers/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispacth = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispacth({ type: 'INCREMENT' });
    dispacth(counterActions.increment()); // executed luon de tao obj default type and full value in obj
  };

  const incrementFiveHandler = () => {
    // dispacth({ type: 'INCREMENT_FIVE', payload: 5 });
    dispacth(counterActions.incrementFive(5)); // {type: 'SOME_ACTION', payload: 5} RTK auto assgin payload = value
  };

  const decrementHandler = () => {
    // dispacth({ type: 'DECREMENT' });
    dispacth(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispacth({ type: 'TOGGLE_COUNTER' });
    dispacth(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increament</button>
        <button onClick={incrementFiveHandler}>Increament by 5</button>
        <button onClick={decrementHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
