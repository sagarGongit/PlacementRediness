import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "./components/ui/provider";
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
