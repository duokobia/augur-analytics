import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
