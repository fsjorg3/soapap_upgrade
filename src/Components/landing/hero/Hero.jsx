import { Box, Container } from "@mui/material";
import PueblaBrand from "./PueblaBrand.jsx";
import SoapapBrand from "./SoapapBrand.jsx";

export default function Hero() {
  return (
    <>
      {/*<Box
      id="hero"
      sx={(theme) => ({
        position:'',
        top:0,
        left:0,
        width: '100vw',
        height:'100vw',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
      })}
    >

    </Box>*/}
      {/*
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: 0,
          left: 0,
          backgroundImage:
            theme.palette.mode === "light"
              ? "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)"
              : "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
          width: "100%",
          height: "100vh",
        })}
      />
      */}

      <Container
        sx={{
          marginTop:{md:'120px',xs:'200px'},
          zIndex: 100,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor:'transparent'
        }}
      >
        <Box
          sx={{
            width: "100%",
            height:'30vh',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-around',
            alignItems:'center',
            backgroundColor:'yellow'
          }}
        >
          <Box
          sx={{
            width:{md:'45%',xs:'100%'},
            backgroundColor:'red'
          }}>
            <SoapapBrand/>
          </Box>
          <Box
          sx={{
            width:{md:'45%',xs:'100%'}
          }}>
            <PueblaBrand/>
          </Box>
          
          

        </Box>
      </Container>
    </>
  );
}
