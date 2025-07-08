import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as Chakra } from "./components/ui/provider";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./reduxfiles/store";

createRoot(document.getElementById("root")).render(
  <Chakra>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Chakra>
);
