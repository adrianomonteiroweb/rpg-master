import Dashboard from "./pages/DashboardPage";

import IsProvider from "./context/IsProvider";

import './App.css';

function App() {
  return (
    <IsProvider>
      <div
        className="App"
        style={{
          backgroundImage: `url("bg.jpg")`
        }}
      >
        <Dashboard />
      </div>
    </IsProvider>
  );
}

export default App;
