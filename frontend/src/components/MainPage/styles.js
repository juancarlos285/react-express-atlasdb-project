import { createStyles, makeStyles, Theme } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: "center",
      height: "6rem"
    },
    container: {

    },
    body:{
      backgroundColor: 'green',
      margin: '0.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: "center",
      height: "18rem",
      flexDirection: "column",
      padding:"2rem"
    },
    card:{
      padding:"1rem",
      margin: "1rem",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }
  }),
);
