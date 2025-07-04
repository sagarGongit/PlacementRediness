import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./contex-provider/Auth-Context-Provider";

function App() {
  const { changeTheme, theme } = useContext(AuthContext);

  return (
    <>
      <div className={theme == "light" ? "light-mode" : "dark-mode"}>
        <div>
          <h1>{theme}</h1>
          <button onClick={changeTheme}>Change Theme</button>
        </div>
      </div>
    </>
  );
}

export default App;
