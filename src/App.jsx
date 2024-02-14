import "./App.css";
import Homepage from "./Pages/Homepage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div id="app">
      <Toaster position="top-right" reverseOrder={false} />
      <Homepage />
    </div>
  );
}

export default App;
