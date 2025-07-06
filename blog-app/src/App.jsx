import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import BlogDetail from "./components/blog-details";
import Navbar from "./components/navbar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box style={{ paddingBottom: "100px" }}>
        <Navbar />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
