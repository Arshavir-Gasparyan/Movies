// import reactLogo from "./assets/react.svg";
// import log from "./icons/Group 46.png";
import "./App.css";
import { SideBar } from "./components/sideBar/SideBar";

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={log} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <SideBar />
    </>
  );
}

export default App;
