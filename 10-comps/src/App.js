import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  return (
    <div className="flex">
      <div>
        <Dropdown options={options} value={selected} onChange={handleSelect} />
      </div>
      <div>
        <Dropdown options={options} value={selected} onChange={handleSelect} />
      </div>
    </div>
  );
}

export default App;
