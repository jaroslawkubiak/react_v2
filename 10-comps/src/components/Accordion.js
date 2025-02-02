import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? (
          <IoIosArrowDropdownCircle />
        ) : (
          <IoIosArrowDropleftCircle />
        )}
      </span>
    );

    const handleClick = (nextIndex) => {
      if (nextIndex === expandedIndex) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(nextIndex);
      }
    };
    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="bg-blue-100 cursor-pointer flex p-3 border-b justify-between items-center"
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}
