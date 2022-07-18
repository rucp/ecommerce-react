import { useState } from "react";
// import PropTypes from "prop-types";

const Counter = ({ step, startValue }) => {
  const [count, setCount] = useState(startValue);
  const [history, setHistory] = useState({
    decremented: [],
    incremented: [],
  });

  const decrement = () => {
    setCount(count - step);
    // setHistory([...history, count]);

    setHistory({
      ...history, // mantém todas as propriedades originais
      decremented: [...history.decremented, count], // e muda essa daqui
    });
  };

  const increment = () => {
    setCount(count + step);
    // setHistory(history.concat(count));

    setHistory({
      ...history,
      incremented: [...history.incremented, count],
    });
  };

  return (
    <>
      <button onClick={increment}>+</button>
      <div>Contador: {count}</div>
      <div>Incremented: {history.incremented.join(", ")}</div>
      <div>Decremented: {history.decremented.join(", ")}</div>
      <button onClick={decrement}>-</button>
    </>
  );
};

Counter.defaultProps = {
  startValue: 1000,
  step: 5,
};

export default Counter;
