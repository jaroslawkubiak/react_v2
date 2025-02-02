import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: "Can I use React on a project",
      content:
        "React Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam dolorum, nemo necessitatibus voluptate ea porro praesentium doloremque quibusdam ipsa.",
    },
    {
      id: 2,
      label: "Can I use TypeScript on a project",
      content:
        "TypeScript Officia quaerat inventore distinctio, ducimus repudiandae quibusdam ad non, asperiores, provident assumenda nostrum!",
    },
    {
      id: 3,
      label: "Can I use JavaScript on a project",
      content:
        "JavaScript Consectetur voluptate aut fugiat nihil ea quod expedita numquam molestiae, nulla, sint consequatur earum alias possimus ab voluptates nam nostrum architecto voluptatibus suscipit.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
