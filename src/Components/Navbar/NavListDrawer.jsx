import {
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

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

    </>
  );
}
