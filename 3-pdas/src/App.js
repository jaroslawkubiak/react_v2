import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";
import CortanaImage from "./images/cortana.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal digital assistance</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                description="Made by Apple to listen your conversation"
                title="Siri"
                handle="@siri82"
                image={SiriImage}
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                description="Made by Amazon to help with shopping"
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                description="created by Microsoft, for what?"
                title="Cortana"
                handle="@cortana44"
                image={CortanaImage}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
