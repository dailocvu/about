import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import ReactFullpage from "@fullpage/react-fullpage";
const anchors = ["about", "skills", "portfolio"];

function App() {
  return (
    <div>
      <About />
      <Skill />
      <Portfolio />
    </div>
  );
}

export default App;
