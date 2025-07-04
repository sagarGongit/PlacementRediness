import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./AuthContext";
import { ThemeContextProvider } from "./ThemeContext";

createRoot(document.getElementById("root")).render(
  <Provider>
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </Provider>
);
