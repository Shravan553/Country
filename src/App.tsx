import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Country from "./pages/Detail";
import { Box } from "@mui/material";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleColorMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <Layout mode={mode}>
      <Router>
        <Header mode={mode} toggleColorMode={toggleColorMode} />
        <Box sx={{ marginInline: "2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:code" element={<Country />} />
          </Routes>
        </Box>
      </Router>
    </Layout>
  );
}

export default App;
