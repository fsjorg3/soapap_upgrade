import { Box } from "@mui/material";
import Puebla from "../../../assets/img/landing/Hero/Puebla.svg";

export default function PueblaBrand() {
  return (
    <>
      <Box
        component="img"
        sx={(theme) => ({
          width: "100%",
          height: "auto",
          filter: theme.palette.mode === "light" ? "invert(0%)" : "invert(100%)",
        })}
        src={Puebla}
      ></Box>
    </>
  );
}
