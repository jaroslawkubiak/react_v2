import { Fragment } from "react";

export default function Table({ data, config, keyFn, theadClasses }) {
  const tbodyClasses = "py-1 px-6 text-center";

  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return (
      <th className={theadClasses} key={column.label}>
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((row) => {
    const renderedCells = config.map((column) => {
      return (
        <td className={column.className || tbodyClasses} key={column.label}>
          {column.render(row)}
        </td>
      );
    });

    return (
      <tr key={keyFn(row)} className="border-b bg-gray-100">
        {renderedCells}
      </tr>
    );
  });

  return (
    <>
      <table className="table-auto border-spacing-2 border">
        <thead>
          <tr>{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </>
  );
}
