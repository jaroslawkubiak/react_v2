import {
  LiaArrowUpSolid,
  LiaArrowDownSolid,
  LiaArrowsAltVSolid,
} from "react-icons/lia";
import Table from "./Table";
import { useState } from "react";

export default function SortableTable(props) {
  const { config, theadClasses, data } = props;
  const [sortOrder, setSortOrder] = useState(null); // null -> asc -> desc
  const [sortBy, setSortBy] = useState(null); // null, score, name OR inna nazwa kolumny

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (!sortOrder) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    const headerClass = "cursor-pointer hover:text-red-500" + theadClasses;
    const header = () => (
      <th className={headerClass} onClick={() => handleClick(column.label)}>
        <div className="flex items-center gap-2 ">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    );

    return { ...column, header };
  });

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "desc" ? -1 : 1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <div>
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <LiaArrowsAltVSolid />;
  }

  if (!sortOrder) {
    return <LiaArrowsAltVSolid />;
  } else if (sortOrder === "asc") {
    return <LiaArrowDownSolid />;
  } else {
    return <LiaArrowUpSolid />;
  }
}
