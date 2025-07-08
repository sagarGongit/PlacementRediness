import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import MyBooks from "./pages/mybooks";
import PrivateRoute from "./PrivateRoute/privateRoute";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Box style={{ paddingBottom: "100px" }}>
        <Navbar />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mybooks"
          element={
            <PrivateRoute>
              <MyBooks />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
