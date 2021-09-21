import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 40 },
  { argument: 3, value: 19 },
];

const useStyles = makeStyles((theme)=>{

    return{

        paper : {marginTop:"10px", marginLeft : "50px"}
    }
})
const classes = useStyles
export default () => (

 
  <Paper>
    <Chart className = {classes.paper}
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />

      <LineSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper>
  
);
