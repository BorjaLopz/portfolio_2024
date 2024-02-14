import "./App.css";
import Homepage from "./Pages/Homepage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div id="app">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: { fontFamily: "Raleway", color: "#000", fontWeight: "500" },
          success: {
            style: {
              background: "#6ac067",
            },
            icon: "🏆"
          },
        }}
      />
      <Homepage />
    </div>
  );
}

export default App;
