import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import Widgets from "./components/widget/Widgets";
import SingUp from "./SingUp";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Sidebabr */}

      {/* Timeline */}
      <Timeline />
      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
