export default function Table({ data, config, keyFn }) {
  const theadClasses = "p-3 bg-blue-100 m-1";
  const tbodyClasses = "px-3 py-1 text-center";

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

  const renderedHeaders = config.map((column) => {
    return (
      <th className={theadClasses} key={column.label}>
        {column.label}
      </th>
    );
  });

  return (
    <>
      <table className="table-auto border-spacing-2 border">
        <thead>
          <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </>
  );
}
