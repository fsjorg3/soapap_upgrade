import ApartmentIcon from "@mui/icons-material/Apartment";
import InfoIcon from "@mui/icons-material/Info";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import HomeIcon from "@mui/icons-material/Home";
import WrongLocationIcon from "@mui/icons-material/WrongLocation";

export const NavArrayLinks = [
    { 
      title: "Inicio", 
      path: "/", 
      display: "Inicio", 
      icon: <HomeIcon></HomeIcon>,
      variants:'text' 
      },
    {
      title: "Ubicacion",
      path: "/ubicacion",
      display: "Ubicacion",
      icon: <WrongLocationIcon></WrongLocationIcon>,
      variants:'text'
    },
    {
      title: "Directorio",
      path: "/directorio",
      display: "Directorio",
      icon: <ApartmentIcon></ApartmentIcon>,
      variants:'text'
    },
    {
      title: "Quienes somos",
      path: "/quienes_somos",
      display: "Quienes somos",
      icon: <InfoIcon></InfoIcon>,
      variants:'text'
    },
    {
      title: "Recursos",
      path: "/recursos",
      display: "Recursos",
      icon: <FolderCopyIcon></FolderCopyIcon>,
      variants:'text'
    },
    
  ];