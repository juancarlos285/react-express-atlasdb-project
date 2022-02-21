import { createStyles, makeStyles, Theme } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: "2rem"
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: '2rem',
      padding: "2rem",
    },
    card: {
      width: "20rem"
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
    },
    divider: {
      width: "80%",
      paddingTop: "1rem",
    },
    resultsCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: "2rem",
      paddingBottom: "2rem",
      width: "100%",
      marginTop: "1rem"
    }
  }),
);
