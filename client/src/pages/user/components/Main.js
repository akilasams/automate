import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography
        variant='h6'
        style={{ fontSize: '2rem', fontWeight: 'bold' }}
        gutterBottom
      >
        {title}
      </Typography>
      <Divider />
      <Typography variant='h5' style={{ fontSize: '1rem', fontWeight: 'bold' }}>
        <p>
          An internal combustion engine must have heat to run properly and
          prevent premature wear, but too much heat has the opposite effect, can
          destroy the engine, or at the very least cause extensive and expensive
          damage. <br></br> <br></br> Responsibility for keeping engine heat at
          optimal levels falls to the vehicle's cooling system and its
          components, which in turn depend on preventive maintenance
          periodically to keep the system and vehicle operating trouble-free.{' '}
          <br></br> <br></br>
          In a nutshell, the cooling system works by transferring engine heat to
          the coolant or antifreeze, the coolant moving to the radiator where it
          loses the excess heat to the outside environment, and the coolant
          returning to the engine to start the process again.<br></br> <br></br>{' '}
          What sounds like a simple process actually depends on several cooling
          system parts working together flawlessly to keep the engine
          temperature at an optimal level, regardless of how hot or cold it is
          outside.
        </p>
      </Typography>
      <Button
        type='submit'
        variant='contained'
        style={{ backgroundColor: '#42207A', color: '#ffffff' }}
        className={classes.submit}
      >
        Continue Reading
      </Button>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
