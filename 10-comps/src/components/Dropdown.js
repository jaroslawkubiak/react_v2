import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOption = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        key={option.value}
        className="text-white bg-purple-500 hover:bg-purple-300 w-30 border-1 pl-3 pr-3 cursor-pointer"
      >
        {option.label}
      </div>
    );
  });

  const icon = (
    <span className="text-white">
      {isOpen ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropleftCircle />}
    </span>
  );

  return (
    <div className="w-48 relative">
      <span
        className="bg-purple-800 text-white pl-3 pr-1 border-1 cursor-pointer flex w-30 justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value?.label || "Select..."}
        {icon}
      </span>
      <div>{isOpen && renderedOption}</div>
    </div>
  );
}
