import { useState, useEffect, useRef } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

import Panel from "./Panel";

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElementInDOM = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divElementInDOM.current) {
        return;
      }

      // console.log(divElementInDOM.current);
      if (!divElementInDOM.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    // call automatically when component is removed from screen
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOption = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        key={option.value}
        className=" hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {option.label}
      </div>
    );
  });

  const icon = (
    <span className="text-2xl">
      {isOpen ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropleftCircle />}
    </span>
  );

  return (
    <div ref={divElementInDOM} className="w-48 relative m-2">
      <Panel
        className="flex w-30 justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value?.label || "Select..."}
        {icon}
      </Panel>
      {isOpen && <Panel className="absolute top-full ">{renderedOption}</Panel>}
    </div>
  );
}
