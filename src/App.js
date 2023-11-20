import logo from "./logo.svg";
import "./App.css";
import PeerTable from "./component/PeerTable";
import ServerStateTable from "./component/ServerStateTable";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <ServerStateTable />
      <PeerTable />
      {/* </header> */}
    </div>
  );
}

export default App;
