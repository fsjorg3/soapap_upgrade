import {
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function AccesibilityMenu({ setAccesibilityMenu , toggleColorMode, mode}) {
  return (
    <>
      <Box
        sx={(theme) => ({
          p: 2,
          width: 270,
          height: "100%",
          display: { xs: "flex", sm: "flex" },
          flexDirection: "column",
          backgroundColor: "background.default",
          borderLeft:
            theme.palette.mode === "dark"
              ? "2px  solid rgba(255,255,255,0.9)"
              : "2px  solid rgba(0,0,0,0.9)",
        })}
      >
        <Typography>Opciones de Accessibilidad</Typography>
        <nav>
          <List>
            <ListItem>
              <ListItemButton
              onClick={() => {
                toggleColorMode()
                return setAccesibilityMenu(false);
              }}
              >
                <ListItemIcon>{ mode==='light'?<DarkModeIcon/>:<LightModeIcon/>}</ListItemIcon>
                <ListItemText primary={mode==='light'? 'modo noche':'modo dia '} />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </>
  );
}
