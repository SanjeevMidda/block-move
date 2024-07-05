import "./index.css";
import Square from "./components/Square";

function App() {
  return (
    <div className="App">
      <div className="gridContainer">
        <Square></Square>
        <div className="block"></div>

        <div className="block2"></div>
        <Square gridColumn={"5/8"}></Square>

        <div className="block3"></div>

        <div className="block4"></div>
        <Square gridColumn={"11/13"}></Square>

        <div className="block5"></div>

        <div className="block6"></div>
      </div>
    </div>
  );
}

export default App;
