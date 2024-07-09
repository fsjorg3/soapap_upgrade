import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';





const AdaptiveCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MiniCard( {children}){

    return(<>
        <AdaptiveCard>
            {children}
        </AdaptiveCard>
    </>)
}



