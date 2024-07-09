import { Container } from '@mui/material'
import Hero from './Hero.jsx'
import WatterCulture from './landing/WatterCulture.jsx'

export default function Index(){


    return(<>
        <Container maxWidth='xl'>
            <Hero></Hero>
            <WatterCulture></WatterCulture>
        </Container>
        
    
    </>)


}