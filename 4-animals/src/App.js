import { useState } from "react";

function App() {
  console.log("app.js");
  const handleClick = () => {
    console.log("count increment ", count);
    setCount(count + 1);
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>

      <p>Animal count : {count}</p>
    </>
  );
}

export default App;
