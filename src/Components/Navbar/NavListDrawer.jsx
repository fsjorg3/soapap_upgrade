import {
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ContrastIcon from "@mui/icons-material/Contrast";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import TvIcon from '@mui/icons-material/Tv';
import Divider from "@mui/material/Divider";

export default function NavListDrawer({ NavArrayLinks, NavLink, setOpen }) {
  return (
    <>

      <Box sx={{ width: 270, display: { xs: "flex", sm: "flex" } }}>
        <nav>
          <List>
            {NavArrayLinks.map((link) => {
              return (
                <ListItem key={link.title}>
                  <ListItemButton
                    component={NavLink}
                    to={link.path}
                    onClick={() => {
                      return setOpen(false);
                    }}
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.display} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </nav>
      </Box>

      <Divider textAlign="left" sx={{fontSize:'12px'}}>Opciones de Accessibilidad</Divider>

      <Box sx={{ width: 270, display: { xs: "flex", sm: "flex" } }}>
        <nav>
          <List>
            <ListItem>
              
                <ButtonGroup orientation="vertical" variant="text" aria-label="Basic button group">
                  <Button startIcon={<TvIcon/>}>Normal</Button>
                  <Button startIcon={<ContrastIcon/>}>Escala de grises</Button>
                  <Button startIcon={<ModeNightIcon/>}>Modo noche</Button>
                </ButtonGroup>
              
            </ListItem>
          </List>
        </nav>
      </Box>

    </>
  );
}
