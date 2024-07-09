import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Background from "./Components/Backgroud.jsx";
import NavBar from "./Components/NavBar";
import { NavArrayLinks } from "./config/menuItems.jsx";
import Index from "./Components/Index.jsx";
import CollapsibleTable from "./Components/CollapsibleTable.jsx"
import Incidencias from "./Components/Incidencias.jsx"

import Fab from "@mui/material/Fab";
import AccessibleIcon from "@mui/icons-material/Accessible";

export default function App() {
  const [mode, setMode] = useState("light");
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Background></Background>
      <NavBar
        mode={mode}
        toggleColorMode={toggleColorMode}
        NavArrayLinks={NavArrayLinks}
        sx={{ zIndex: 101 }}
      ></NavBar>
      <Container sx={{ mt: "100px", height: "300vh", zIndex: 50 }}>
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            backgroundColor: "#033363",
            "&:hover": {
              bgcolor: '#031D36',
            },
          }}
        >
          <AccessibleIcon />
        </Fab>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          {/*<Route path="/CollapsibleTable" element={<CollapsibleTable/>}></Route>*/}
          <Route path="/Incidencias" element={<Incidencias/>}></Route>
        </Routes>
      </Container>
    </>
  );
}
