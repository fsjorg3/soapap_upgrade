import { Container, Box, Typography, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import treinataPorciento from "../../assets/landing/30.png";
import cicloAgua from "../../assets/landing/cicloAgua.png";
import usoResponsable from "../../assets/landing/usoResponsable.png";
import aguaEsVida from "../../assets/landing/aguaEsVida.png";

const watterVideos = [
  {
    title: "¿Por qué hay que cuidar el agua?",
    path: treinataPorciento,
  },
  {
    title: "Ciclo del agua",
    path: cicloAgua,
  },
  {
    title: "Consumo Responsable del Agua",
    path: usoResponsable,
  },
  {
    title:'Reflexionar sobre la Importancia del Agua',
    path: cicloAgua,
  },
  {
    title: "Preescolar",
    path: aguaEsVida,
  },
  {
    title: "1º y 2º de Primaria",
    path: treinataPorciento,
  },
  {
    title: "El agua y el aire",
    path: cicloAgua,
  },
  {
    title: "5º y 6º de Primaria",
    path: usoResponsable,
  },
];

function ActionAreaCard({ image, alt }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={alt} />
        {/*<CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>*/}
      </CardActionArea>
    </Card>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Encabezado({ children }) {
  return (
    <>
      <Typography
        component="h3"
        variant="h2"
        sx={(theme) => ({
          fontFamily: "Arial",
          fontWeight: 900,
          textAlign: "left",
          marginTop: "50px",
          mb: "30px",
          color: theme.palette.mode === "light" ? "#000000" : "#ffffff",
          fontSize: "clamp(22px, 2vw + 12px, 32px)",
        })}
      >
        {children}
      </Typography>
    </>
  );
}

export default function WatterCulture() {
  return (
    <>
      <Container
        sx={{
          mt: "10vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
          width: "100%",
          backgroundColor: "rgba(200,70,35,0.0)",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(20,20,20,0.0)",
            width: "100%",
            height: "auto",
          }}
        >
          <Encabezado>Cultura del agua</Encabezado>
          <Typography
            sx={(theme) => ({
              fontSize: "0.8rem",
              color: theme.palette.mode === "light" ? "#000000" : "#ffffff",
            })}
          >
            Información y recursos para fomentar la cultura del agua. Aprende
            sobre la importancia de cuidar el agua, el ciclo del agua, y
            estrategias de consumo responsable, adaptadas para diversas edades y
            niveles educativos
          </Typography>

          <Box sx={{ flexGrow: 1, mt: "5vh" }}>
            <Grid container spacing={2}>
              {watterVideos.map((video) => {
                return (
                  <>
                    <Tooltip
                      disableFocusListener
                      title={video.title}
                      key={video.title}
                    >
                      <Grid xs={4} key={video.title}>
                        <ActionAreaCard
                          key={video.title}
                          image={video.path}
                          alt={video.title}
                        ></ActionAreaCard>
                      </Grid>
                    </Tooltip>
                  </>
                );
              })}
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(30,200,35,0.0)",
            width: "100%",
            height: "80vh",
          }}
        >
          <Card sx={{ height:'100%',width:'100%' }}>
            <CardActionArea>
              {/*<CardMedia component="img" height="140" image={image} alt={alt} />
              <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>*/}
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </>
  );
}
