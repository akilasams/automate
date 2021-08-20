import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: '1px solid ${theme.palette.divider}',
    width: 400,
  },

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 1500,
    height: 600,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  image: {
    width: 200,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='App'>
      <div className={classes.root}>
        <Typography component='h1' variant='h5' style={{ color: '#42207A' }}>
          <b> WHAT IS AUTOMATE?</b>
        </Typography>

        <Grid item>
          <img
            src='./images/about.jpg'
            alt='About'
            style={{
              height: '500px',
              width: '700px',
              alignItems: 'center',
            }}
          />
        </Grid>

        <Typography
          component='h1'
          variant='h6'
          style={{ fontSize: '1.5rem', color: 'black' }}
        >
          <p>
            Automate is a platform where you can buy and sell spare parts. If
            you are a seller, you will only have to spend a few minutes to post
            an ad on Automate. You can sign up for a account and post ads easily
            every time. If you are an Owner of a spare part shop, you can easily
            set up your shop within Automate. Just sign your shop up and have
            your own website space for the shop.
          </p>

          <p>
            Automate has the widest selection of spare part items all over Sri
            Lanka, which makes it easy to find exactly what you are looking for.
            Whatever the part you're looking for, you will find the best deal on
            Automate.
          </p>

          <p>
            We carefully review all ads that are being published, to ensure the
            quality is up to our standards. Automate mobile app is available for
            both android and ios devices, which provides even more features.
          </p>
        </Typography>
      </div>
    </div>
  );
}
