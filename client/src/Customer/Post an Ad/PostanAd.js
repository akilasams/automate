import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Menu from '../components/Menu';
import Category from '../components/Category';
import Divider from '@material-ui/core/Divider';
import PublishIcon from '@material-ui/icons/Publish';
import Navbar from '../components/NavbarLoggedIn';
import Footer from '../components/Footer';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#C7F2F4',
  },
  image: {
    backgroundImage: '(../images/preview.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(3),
    position: 'relative',
  },
}));

export default function PostanAd() {
  const classes = useStyles();

  return (
    // <div className='App'>
    //   <Navbar />
    //   <br></br>
    //   <Grid
    //     container
    //     spacing={0}
    //     direction='column'
    //     alignItems='center'
    //     justify='center'
    //     style={{ minHeight: '100vh' }}
    //   >
    //     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    //       <div className={classes.paper}>
    //         <Typography
    //           component='h1'
    //           variant='h4'
    //           style={{ color: '#42207A' }}
    //         >
    //           <b> POST YOUR AD</b>
    //         </Typography>
    <form className={classes.form} noValidate>
      <br></br>
      <Typography
        component='h1'
        variant='h6'
        align='left'
        style={{ color: 'black' }}
      >
        <b> GENERAL DETAILS</b>
      </Typography>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='itemName'
        label='Item Name'
        name='itemName'
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='unitPrice'
        label='unitPrice'
        name='unitPrice'
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='model'
        label='Model'
        name='modelNo'
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='quantity'
        label='Quantity'
        name='quantity'
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='condition'
        label='Condition'
        name='condition'
        autoFocus
      />
      <TextField
        multiline
        rows={4}
        rowsMax={6}
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='description'
        label='Description'
        name='description'
        autoComplete='description'
        autoFocus
      />
      <List>
        <ListItem alignItems='center'>
          <FormControlLabel
            control={<Checkbox value='negotiable' color='primary' />}
            label='Negotiable'
          />
        </ListItem>
      </List>
      <Menu />
      <br></br>
      <Divider />
      <br></br>
      <Typography
        component='h1'
        variant='h6'
        align='left'
        style={{ color: 'black' }}
      >
        <b>SPARE PART CLASSIFICATION</b>
      </Typography>
      <Category />
      <br></br>
      <Divider />
      <br></br>
      <Typography
        component='h1'
        variant='h6'
        align='left'
        style={{ color: 'black' }}
      >
        <b>VEHICLE DETAILS FOR THE SPARE PART</b>
      </Typography>
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='year'
        label='Manufactured Year'
        name='year'
        autoComplete='year'
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='country'
        label='Manufactured Country'
        name='password'
        autoComplete='password'
        autoFocus
      />
      <br></br>
      <br></br>
      <Divider />
      <br></br>
      <Typography
        component='h1'
        variant='h6'
        align='left'
        style={{ color: 'black' }}
      >
        <b>SPARE PART IMAGES</b>
      </Typography>
      <p>
        <h3>
          Upload upto 5 images. Please make sure to add real images of your
          product.
        </h3>
      </p>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file'>
        <Button
          classes={classes.button}
          style={{
            variant: 'contained',
            backgroundColor: '#42207A',
            color: 'white',
          }}
          startIcon={<PublishIcon />}
          component='span'
        >
          Upload Image
        </Button>
      </label>
      <input
        accept='image/*'
        className={classes.input}
        id='icon-button-file'
        type='file'
      />
      <br></br> <br></br>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file'>
        <Button
          classes={classes.button}
          style={{
            variant: 'contained',
            backgroundColor: '#42207A',
            color: 'white',
          }}
          startIcon={<PublishIcon />}
          component='span'
        >
          Upload Image
        </Button>
      </label>
      <input
        accept='image/*'
        className={classes.input}
        id='icon-button-file'
        type='file'
      />
      <br></br> <br></br>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file'>
        <Button
          classes={classes.button}
          style={{
            variant: 'contained',
            backgroundColor: '#42207A',
            color: 'white',
          }}
          startIcon={<PublishIcon />}
          component='span'
        >
          Upload Image
        </Button>
      </label>
      <input
        accept='image/*'
        className={classes.input}
        id='icon-button-file'
        type='file'
      />
      <br></br> <br></br>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file'>
        <Button
          classes={classes.button}
          style={{
            variant: 'contained',
            backgroundColor: '#42207A',
            color: 'white',
          }}
          startIcon={<PublishIcon />}
          component='span'
        >
          Upload Image
        </Button>
      </label>
      <input
        accept='image/*'
        className={classes.input}
        id='icon-button-file'
        type='file'
      />
      <br></br> <br></br>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file'>
        <Button
          classes={classes.button}
          style={{
            variant: 'contained',
            backgroundColor: '#42207A',
            color: 'white',
          }}
          startIcon={<PublishIcon />}
          component='span'
        >
          Upload Image
        </Button>
      </label>
      <input
        accept='image/*'
        className={classes.input}
        id='icon-button-file'
        type='file'
      />
      <br></br> <br></br>
      <Divider />
      <br></br>
      <Typography
        component='h1'
        variant='h6'
        align='left'
        style={{ color: 'black' }}
      >
        <b>CONTACT DETAILS</b>
      </Typography>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='name'
        label='Name'
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
        label='Email'
        name='email'
        autoComplete='Email'
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='contact'
        label='Contact number 1'
        name='contact'
        autoComplete='contact'
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='contact2'
        label='Contact number 2'
        name='contact2'
        autoComplete='contact2'
        autoFocus
      />
      <Button
        type='submit'
        variant='contained'
        style={{ backgroundColor: '#42207A', color: '#ffffff' }}
        className={classes.submit}
      >
        Submit
      </Button>
      <Box mt={5}>
        <Copyright />
      </Box>
    </form>
    //       </div>
    //     </Grid>
    //   </Grid>
    //   <br></br>
    //   <Footer />
    // </div>
  );
}
