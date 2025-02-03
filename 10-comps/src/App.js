import Link from "./components/Link";
import Route from "./components/Route";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";

function App() {
  return (
    <div className="flex">
      app
      <Link to="/accordion">accordion</Link>
      <Link to="/dropdown">dropdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
