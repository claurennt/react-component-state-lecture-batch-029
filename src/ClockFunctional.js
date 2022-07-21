import { useEffect, useState } from "react";

const ClockFunctional = () => {
  //defines the state and its initial state + the function we will use to update the state value
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    /*the only way we can cause a re-render of the component is with the setDate function 
    that changes the value of the state. The only condition for our component to re-render and display 
    updated content/data is when the state variable changes, (here the value of the "date" variable*/
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <>
      <span>Functional Clock</span>
      <h2>{date.toLocaleTimeString()}</h2>
    </>
  );
};

export default ClockFunctional;
