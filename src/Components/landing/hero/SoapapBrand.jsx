import { Box } from "@mui/material";
import soapap from "../../../assets/img/landing/Hero/SOAPAP.svg";

export default function SoapapBrand() {
  return (
    <>
      <Box
        component="img"
        sx={(theme) => ({
          width: "100%",
          height: "auto",
          filter: theme.palette.mode === "light" ? "invert(0%)" : "invert(100%)",
        })}
        src={soapap}
      ></Box>
    </>
  );
}
