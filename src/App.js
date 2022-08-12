import Headline from "./components/Headline";
import News from "./components/News";
import Source from "./components/Source";
import { useEffect } from "react";
import api from "./redux/actions";
import NavBar from "./components/navBar";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#D4A10F",
          height: "80px",
          width: "100%",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <h1
          style={{
            margin: "0 50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
            color: "white",
          }}
        >
          Daily-News
        </h1>
      </div>
      <div className="App">
        <Source />
        <Headline />
        <News />
      </div>
    </div>
  );
}

export default App;
