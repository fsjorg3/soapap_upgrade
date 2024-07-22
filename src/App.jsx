///////////////// React dependencies
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

///////////////// Materual-UI dependencies
import CssBaseline from "@mui/material/CssBaseline";
import getLPTheme from "./theme/getLPTheme.jsx";
import { Container, Drawer } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

///////////////// Project dependencies
import { NavArrayLinks } from "./data/menuItems.jsx";
import Fab from "@mui/material/Fab";
import AccessibleIcon from "@mui/icons-material/Accessible";

///////////////// Project components
import Background from "./components/Backgroud.jsx";
import NavBar from "./components/Navbar/NavBar.jsx";
import Index from "./components/landing/Index.jsx";
import AccesibilityMenu from "./components/accessibility/AccessibilityMenu.jsx";

function App() {
  const [mode, setMode] = useState("light");
  const [accesibilityMenu, setAccesibilityMenu] = useState(false);
  const customTheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Background />
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
                bgcolor: "#031D36",
              },
            }}
            onClick={()=>{
              setAccesibilityMenu(!accesibilityMenu)
              console.log(accesibilityMenu)
            }}
          >
            <AccessibleIcon />
            {<Drawer
              open={accesibilityMenu}
              anchor="right"
              onClose={() => {
                return ''//setAccesibilityMenu(!open);
              }}
            >
                <AccesibilityMenu setAccesibilityMenu ={setAccesibilityMenu} toggleColorMode={toggleColorMode} mode={mode} > </AccesibilityMenu>
            </Drawer>}
            
          </Fab>

          <Routes>
            <Route path="/" element={<Index />}></Route>
            {/*<Route path="/CollapsibleTable" element={<CollapsibleTable/>}></Route>*/}
            {/*<Route path="/Incidencias" element={<Incidencias/>}></Route>*/}
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
