import './css/Chart.css';
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, PieSeries } from '@devexpress/dx-react-chart-material-ui';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    marginTop: -150,
    marginLeft: 545,
    width: 400,
    color: '#CBC3E3',
  },
}));

const data = [
  { Part: 'Head Lamps', area: 12 },
  { Part: 'Ball Joint', area: 7 },
  { Part: 'Nuts & Bolts', area: 7 },
  { Part: 'Brake Hoses', area: 7 },
  { Part: 'Brake Pipes', area: 6 },
  { Part: 'Alternators', area: 5 },
  { Part: 'Engines', area: 2 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }
  render() {
    const { data: chartData } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='300vw'>
          <Paper style={{ marginTop: '10%', backgroundColor: '#f1e7f8' }}>
            <Card style={{ width: 290, height: 400, marginLeft: '100' }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='subtitle1'
                    style={{ fontSize: 20, color: '	#000000' }}
                  >
                    <b>Spare Parts Sold - Monthly</b>
                    <Typography
                      gutterBottom
                      style={{ fontSize: 18, color: '	#006400' }}
                    >
                      <IconButton>
                        <Brightness1Icon
                          style={{ color: ' #ff69b4 ', fontSize: 23 }}
                        />
                        <Typography>Head Lamps</Typography>
                      </IconButton>
                    </Typography>
                    <Typography
                      gutterBottom
                      style={{ fontSize: 18, color: '	#006400' }}
                    >
                      <IconButton>
                        <Brightness1Icon
                          style={{ color: '#FFA500 ', fontSize: 23 }}
                        />
                        <Typography>Ball Joint</Typography>
                      </IconButton>
                    </Typography>
                    <Typography
                      gutterBottom
                      style={{ fontSize: 18, color: '	#006400' }}
                    >
                      <IconButton>
                        <Brightness1Icon
                          style={{ color: '#b5b35c', fontSize: 23 }}
                        />
                        <Typography>Nuts and Bolts</Typography>
                      </IconButton>
                    </Typography>
                    <Typography
                      gutterBottom
                      style={{ fontSize: 18, color: '	#006400' }}
                    >
                      <IconButton>
                        <Brightness1Icon
                          style={{ color: '#d5b60a', fontSize: 23 }}
                        />
                        <Typography>Brake Hoses</Typography>
                      </IconButton>
                    </Typography>
                    <Typography
                      gutterBottom
                      style={{ fontSize: 18, color: '	#006400' }}
                    >
                      <IconButton>
                        <Brightness1Icon
                          style={{ color: '#24a298', fontSize: 23 }}
                        />
                        <Typography>Alternators</Typography>
                      </IconButton>
                    </Typography>
                    <Typography
                      gutterBottom
                      style={{ fontSize: 18, color: '	#006400' }}
                    >
                      <IconButton>
                        <Brightness1Icon
                          style={{ color: '#6fbdd3', fontSize: 23 }}
                        />
                        <Typography>Engines</Typography>
                      </IconButton>
                    </Typography>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Chart
              data={chartData}
              style={{ marginLeft: '100px', marginTop: '-17%' }}
            >
              <PieSeries valueField='area' argumentField='Part' />
            </Chart>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}
