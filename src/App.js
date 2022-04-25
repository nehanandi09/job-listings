import "./App.css";
import CardLayout from "./CardLayout";
import bgHeader from "./assets/images/bg-header-desktop.svg";

function App() {
  return (
    <div className="">
      <div className="bg-primary-dark-cyan">
        <img
          src={bgHeader}
          className="bg-cover bg-no-repeat w-full"
          alt="banner"
        />
      </div>
      <div className="w-full bg-cover">
        <CardLayout />
      </div>
    </div>
  );
}

export default App;
