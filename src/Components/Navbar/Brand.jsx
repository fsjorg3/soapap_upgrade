import { Box, Typography } from "@mui/material";


export default function Brand(){

    return(<>

        <Box>
            <Typography component="h1"
            sx={(theme) =>({
                fontSize:"22px", fontFamily:"Arial",fontWeight:"900",
                color: theme.palette.mode==='light'
                ?'#000000':'#ffffff',
                letterSpacing:2
            })}
            >
                SOAPAP
            </Typography>
        </Box>
        
    
    </>)

}