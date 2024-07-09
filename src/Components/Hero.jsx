import { Container, Box, Typography } from "@mui/material";
import puebla from "../assets/Puebla.svg";
import soapap from "../assets/SOAPAP(2).svg";
import promocional from "../assets/gobiernoPuebla.mp4";
import ReactPlayer from "react-player";
import portada from "../assets/light.jpeg";

export default function Hero() {
  return (
    <>
      <Container
        sx={{
          zIndex: 100,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          maxWidth="100%"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: "50px",
            pt: "100px",
          }}
        >
          <Box
            component="img"
            sx={{
              display: "block",
              width: "40%",
              minWidth: "300px",
            }}
            src={soapap}
          />
          <Box
            component="img"
            sx={{
              display: "block",
              width: "40%",
              minWidth: "300px",
            }}
            src={puebla}
          />
        </Box>
        <Typography
          component="h3"
          variant="h2"
          sx={(theme) => ({
            fontFamily: "Arial",
            fontWeight: 900,
            textAlign: "center",
            marginTop: "100px",
            mb: "50px",
            color: theme.palette.mode === "light" ? "#000000" : "#ffffff",
            fontSize:'clamp(22px, 2vw + 12px, 32px)'
          })}
        >
          Bienvenidos
        </Typography>

        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignContent:'center',
            width: "100%",
            height: "calc(100vw * 0.38)",
            boxShadow:
              theme.palette.mode === "light"
                ? "0 0 12px 8px hsla(220, 25%, 80%, 0.2)"
                : "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? "hsla(220, 25%, 80%, 0.5)"
                : "hsla(210, 100%, 80%, 0.1)",
          })}
        >
          <ReactPlayer
            light={portada}
            width="99%"
            height="99%"
            controls
            url="https://www.youtube.com/watch?v=oLyTRuvQKzg&ab_channel=EdmundoSantamaria"
          />
        </Box>
      </Container>
    </>
  );
}
