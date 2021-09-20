import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
// import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  // return (
  //   <ReactFullpage
  //     render={() => {
  //       return (
  //         <div className="font-beVNPro bg-black">
  //           <div className="section">
  //             <About />
  //           </div>
  //           <div className="section">
  //             <Skill />
  //           </div>
  //           <div className="section">
  //             <Portfolio />
  //           </div>
  //         </div>
  //       );
  //     }}
  //   />
  // );
  return (
    <div className="font-beVNPro bg-black">
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
