import { Box } from '@mui/material'
import aguita from '../assets/aguita.png'



export default function Background(){


    return(<>

        <Box
            position='absolute'
            component='img'
            top='0'
            left='0'
            src={aguita}
            alt='Tanque elevado'
            sx={{
                mt:5,
                filter:'blur(5px)',
                width:{'xs':'80vw','md':'75vw'},
                opacity:{'xs':'70%','md':'90%'},
                zIndex: -1
            }}
        ></Box>  
    </>)
    }
