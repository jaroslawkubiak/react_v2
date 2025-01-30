function App() {
  const inputType = "number";
  const minValue = 5;
  const style = { border: "3px solid black", backgroundColor: "crimson" };

  return (
    <>
      <h1>Hello Jarek</h1>
      <input type={inputType} min={minValue} style={style} />
    </>
  );
}

export default App;
