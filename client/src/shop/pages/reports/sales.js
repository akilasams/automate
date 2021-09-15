import React from 'react';
//import { useTheme } from '@material-ui/core/styles';
//import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
//import Title from '../Title';
import NavBar from '../../components/NavBar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Chart from '../../Chart';


  const useStyles = makeStyles((theme) => ({
    root: {
        //backgroundColor:'#C7F2F4',
        display: 'flex',
      },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '1000vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height:450,
      },

}));


export default function Saleschart(){
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return(
         <div className={classes.root}>
         <NavBar/>
         <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
          <Grid item xs={12} >
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            </Grid>
            </Container>
            </main>
            </div>
    );

    
}