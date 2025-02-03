import {
  FaAmilia,
  FaApple,
  FaBell,
  FaBiking,
  FaCamera,
  FaPhone,
} from "react-icons/fa";
import Button from "../components/Button";

function ButtonPAge() {
  const handleClick = () => {};

  return (
    <div className="flex">
      <div>
        <Button rounded onClick={handleClick}>
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
        <Button secondary rounded onClick={handleClick}>
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

export default ButtonPAge;
