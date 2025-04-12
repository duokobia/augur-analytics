import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { distributors } from "./data/mockData";

import "./styles.css";

function App() {
  const [selectedDistributor, setSelectedDistributor] = useState(
    distributors[0],
  );

  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <Sidebar
          distributors={distributors}
          selectedDistributor={selectedDistributor}
          setSelectedDistributor={setSelectedDistributor}
        />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
