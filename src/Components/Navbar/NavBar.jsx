import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Brand from "./Brand.jsx";
import { NavLink } from "react-router-dom";
import theme from "../../theme/theme.js";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer.jsx";

export default function NavBar({ mode, toggleColorMode, NavArrayLinks }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container maxWidth="xl" sx={{}}>
        <AppBar
          position="fixed"
          sx={{
            boxShadow: 0,
            bgcolor: "transparent",
            backgroundImage: "none",
            mt: 4,
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              backgroundColor: "transparent",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Toolbar
              variant="regular"
              sx={(theme) => ({
                display: "flex",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                bgcolor:
                  theme.palette.mode === "light"
                    ? "hsla(220, 60%, 99%, 0.6)"
                    : "hsla(220, 0%, 0%, 0.7)",
                backdropFilter: "blur(24px)",
                maxHeight: 40,
                width: "100%",
                border: "1px solid",
                borderColor: "divider",
                boxShadow:
                  theme.palette.mode === "light"
                    ? "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)"
                    : "0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)",
              })}
            >
              <Box
                sx={{
                  //flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 0,
                  width: "100%",
                }}
              >
                <Brand></Brand>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  {NavArrayLinks.map((link) => {
                    return (
                      <Button
                        sx={(theme) => ({
                          color:
                            theme.palette.mode === "light"
                              ? "#000000"
                              : "#ffffff",
                        })}
                        component={NavLink}
                        to={link.path}
                        variant={link.variants}
                        key={link.title}
                        startIcon={link.icon}
                      >
                        {link.display}
                      </Button>
                    );
                  })}
                </Box>

                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    variant="contained"
                    onClick={() => {
                      setOpen(!open);
                    }}
                    size="large"
                  >
                    <Menu></Menu>
                  </IconButton>
                  <Drawer
                    open={open}
                    anchor="right"
                    onClose={() => {
                      setOpen(!open);
                    }}
                  >
                    <NavListDrawer
                      NavArrayLinks={NavArrayLinks}
                      NavLink={NavLink}
                      setOpen={setOpen}
                    ></NavListDrawer>
                  </Drawer>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </>
  );
}
