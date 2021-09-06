import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Menu from '../components/Menu';
import Category from '../components/Category';
import Divider from '@material-ui/core/Divider';
import PublishIcon from '@material-ui/icons/Publish';
import Quantity from '../components/Quantity';
import { useFormik } from 'formik';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
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
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
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
    position: 'relative'
  },
}));

const initialValues = {
  item: '',
  price: '',
  quantity: '',
};
const onSubmit = (data) => {
  axios.post('http://localhost:3001/cart/addtocart', data).then(() => {
    console.log(data);
  });
};
export default function Cartform() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues, 
    onSubmit,
});

  return (
    <div className="App">
       <br></br>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" style={{ color: '#42207A' }}>
            <b>ADD ITEM TO CART</b>
          </Typography>
          <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
            <Typography component="h1" variant="h6" align="left" style={{ color: 'black' }}>
              <b> DETAILS</b>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="item"
              label="Item"
              name="item"
              autoComplete="item"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              multiline
              rows={4}
              rowsMax={1}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              autoComplete="price"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <Quantity />
            <List>
              <ListItem alignItems="center">
                <FormControlLabel
                  control={<Checkbox value="proceed" color="primary" />}
                  label="Proceed"
                />
              </ListItem>
            </List>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#42207A", color: "#ffffff" }}
              className={classes.submit}
            >
              Submit
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    <br></br>
    </div>
  );
}
