import Button from "./Button";
import {
  FaAmilia,
  FaApple,
  FaBell,
  FaBiking,
  FaCamera,
  FaPhone,
} from "react-icons/fa";

function App() {
  return (
    <div className="flex">
      <div>
        <Button rounded>
          <FaApple />
          Plain
        </Button>
      </div>
      <div>
        <Button primary outline>
          <FaAmilia />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <FaCamera />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <FaPhone />
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <FaBiking />
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <FaBell />
          Danger
        </Button>
      </div>
    </div>
  );
}

export default App;
