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
import { useFormik } from 'formik';
import axios from 'axios';
import Modal from '../../shared/components/UIElements/Modal';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../helpers/AuthContext';

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

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export default function ContactUs() {
  const { authState } = useContext(AuthContext);
  const [showMessage, setShowMessage] = useState(false);

  const openMessageHandler = () => setShowMessage(true);
  const closeMessageHandler = () => setShowMessage(false);

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:3001/contactus/addmessage/${authState.id}`, data)
      .then(() => {
        setShowMessage(true);
        openMessageHandler();
      });
  };

  const classes = useStyles();
  const formik = useFormik({
    initialValues, //userRegisterSchema,
    onSubmit,
  });

  return (
    <>
      <Modal
        show={showMessage}
        header=' Success!'
        footer={
          <Button
            className={classes.gotToHomeButton}
            color='primary'
            variant='contained'
            onClick={closeMessageHandler}
          >
            {' '}
            Close
          </Button>
        }
      >
        <div className='modal-msg-container'>
          <h2>Your Message has been sent!</h2>
        </div>
      </Modal>
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
                    Get in touch with us using the form below and we will
                    respond to your message as soon as possible.
                  </b>
                </Typography>
                <br></br>
                <form onSubmit={formik.handleSubmit}>
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
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
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
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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
                    onChange={formik.handleChange}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
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
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      );
    </>
  );
}
