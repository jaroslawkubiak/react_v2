import {
  LiaArrowUpSolid,
  LiaArrowDownSolid,
  LiaArrowsAltVSolid,
} from "react-icons/lia";
import Table from "./Table";
import useSort from "../hooks/use-sort";

export default function SortableTable(props) {
  const { config, theadClasses, data } = props;
  const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    const headerClass = "cursor-pointer hover:text-red-500" + theadClasses;
    const header = () => (
      <th className={headerClass} onClick={() => setSortColumn(column.label)}>
        <div className="flex items-center gap-2 ">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    );

    return { ...column, header };
  });

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
