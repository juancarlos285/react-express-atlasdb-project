import { createStyles, makeStyles, Theme } from '@mui/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    card:{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(0.5),
      padding: theme.spacing(0.5),
    },
    container: {
      margin: '2rem'
    },
    divider: {
      paddingTop: '1rem',
      width: '80%',
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: '2rem',
      padding: '2rem',
    },
    resultsCard: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '1rem',
      paddingBottom: '2rem',
      paddingTop: '2rem',
      width: '100%',
    }
  }),
);
