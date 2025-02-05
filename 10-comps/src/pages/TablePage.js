import SortableTable from "../components/SortableTable";

export default function TablePage() {
  const theadClasses = " py-3 px-6 bg-blue-900 text-white";

  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-600", score: 3 },
    { name: "Banana", color: "bg-yellow-300", score: 1 },
    { name: "Lime", color: "bg-green-300", score: 4 },
    { name: "Ananas", color: "bg-yellow-500", score: 7 },
    { name: "BlueBerry", color: "bg-blue-800", score: 6 },
  ];

  const config = [
    {
      label: "Fruit",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      className: "flex justify-center items-center h-10",
      render: (fruit) => <div className={`flex w-6 h-6 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score*2",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable
        data={data}
        config={config}
        keyFn={keyFn}
        theadClasses={theadClasses}
      />
    </div>
  );
}
