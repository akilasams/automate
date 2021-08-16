import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';

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

export default function ContactUs() {
  const classes = useStyles();
  return (
    <div>
      <Typography component='h1' variant='h5' style={{ color: '#42207A' }}>
        <b> GET IN TOUCH WITH US</b>
      </Typography>

      <Grid container spacing={2}>
        <img
          className={classes.img}
          src='./images/contact.jpg'
          alt='Contact'
          style={{
            height: '500px',
            width: '700px',
            alignItems: 'center',
          }}
        />
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item sm>
              <Typography
                component='h1'
                variant='h6'
                style={{ color: 'black' }}
              >
                <b>
                  {' '}
                  Get in touch with us using the form below and we will respond
                  to your message as soon as possible.
                </b>
              </Typography>
              <br></br>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='name'
                label='Your Name'
                name='name'
                autoComplete='name'
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Your Email'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                multiline
                rows={10}
                rowsMax={12}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='message'
                label='Your Message'
                name='message'
                autoComplete='message'
                autoFocus
              />
              <Button
                type='submit'
                variant='contained'
                style={{
                  backgroundColor: '#42207A',
                  color: '#ffffff',
                }}
                className={classes.submit}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
