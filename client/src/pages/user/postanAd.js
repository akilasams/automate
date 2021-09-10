import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
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
import Menu from '../user/components/Menu';
import Category from '../user/components/Category';
import Divider from '@material-ui/core/Divider';
import PublishIcon from '@material-ui/icons/Publish';
//import Navbar from '../components/navbar';
//import Footer from '../components/footer';
import { useHistory } from 'react-router';
import { useFormik, FormikProvider } from 'formik';
import axios from 'axios';
//import ImageUploading from 'react-images-uploading';
//import { QuantityPicker } from 'react-qty-picker';


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


const options =[
  {value: 'new', label: 'Brand New'},
  {value: 'used', label: 'Used'},
]

const categoryOptions =[
  {value: 'Accessories', label: 'Accessories'},
  {value: 'Air Condition Parts', label: 'Air Condition Parts'},
  {value: 'Alloy Wheels', label: 'Alloy Wheels'},
  {value: 'Audio/Video/Sound Systems', label: 'Audio/Video/Sound Systems'},
  {value: 'Batteries', label: 'Batteries'},
  {value: 'Beading and Rubber Mounts', label: 'Beading and Rubber Mounts'},
  {value: 'Break System', label: 'Break System'},
  {value: 'Cables', label: 'Cables'},
  {value: 'Electrical Parts', label: 'Electrical Parts'},
  {value: 'Engine', label: 'Engine'},
  {value: 'Engine Cooling System', label: 'Engine Cooling System'},
  {value: 'Exhaust and Silencer', label: 'Exhaust and Silencer'},
  {value: 'External Body Parts', label: 'External Body Parts'},
  {value: 'Filters', label: 'Filters'},
  {value: 'Gear box and Transmission system', label: 'Gear box and Transmission system'},
  {value: 'Hose and Clips', label: 'Hose and Clips'},
  {value: 'Hybrid Parts', label: 'Hybrid Parts'},
  {value: 'Interior Body Parts', label: 'Interior Body Parts'},
  {value: 'Lamps and Signal Lights', label: 'Lamps and Signal Lights'},
  {value: 'Fluid and Lubricants', label: 'Fluid and Lubricants'},
  {value: 'Mirrors and Glasses', label: 'Mirrors and Glasses'},
  {value: 'Nuts and Bolts', label: 'Nuts and Bolts'},
  {value: 'Sensors', label: 'Sensors'},
  {value: 'Seats', label: 'Seats'},
  {value: 'Steering Wheels', label: 'Steering Wheels'},
  {value: 'Switches and controls', label: 'Switches and controls'},
  {value: 'Tyres and Rims', label: 'Tyres and Rims'},
  {value: 'Undercarriage Parts', label: 'Undercarriage Parts'},
  {value: 'Other', label: 'Other'},
]
        
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#C7F2F4',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  error: {
    color: '#C7F2F4',
    fontWeight: 'Bold',
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
    display: '',
  },

  button: {
    margin: theme.spacing(3),
    position: 'relative'
  },
  checkbox: {
    display: 'flex'

  }

}));


const initialValues = {
  name: '',
  description: '',
  price: '',
  quantity: '',
  condition: '',
  category:'',
  vehicleModel: '',
  year: '',
  country: '',
  photo1: '',
 
};

const onSubmit = (data) => {
  axios.post('http://localhost:3001/ads/postad', data).then(() => {
    console.log(data);
  });
};


const validate = values => {

  let errors = {}
  if(!values.name ){
    errors.name = 'Title is required'
  }
if(!values.description ){
    errors.description = 'Description is required'
  }
if(!values.price ){
    errors.price = 'Price is required'
  } else if (!/^[0-9]+$/i.test(values.price)) {
    errors.price = 'Invalid price format'
  }
  if(!values.quantity ){
    errors.quantity = 'Quantity is required'
  } else if (!/^[0-9]+$/i.test(values.quantity)) {
    errors.quantity = 'Invalid quantity format'
  }
  if(!values.vehicleModel ){
    errors.vehicleModel = 'Vehicle Model is required'
  }

  if(!values.country ){
    errors.country = 'Country is required'
  }

  if(!values.year ){
    errors.year = 'Year is required'
  } else if (!/^[0-9]+$/i.test(values.year)) {
    errors.year = 'Invalid year format'
  }

  if(!values.condition ){
    errors.condition = 'Required'
 }

  if(!values.category ){
    errors.category = 'Required'
  }

  if(!values.photo1 ){
    errors.photo1 = 'Image is required'
  }
  return errors
}



function PostanAd(props) {
  
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  }
  const classes = useStyles();

  
  const formik = useFormik({
    initialValues, 
    validate, //userRegisterSchema,
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
      <Grid item xs={20} sm={20} md={20} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" style={{ color: '#42207A' }}>
            <b> POST YOUR AD</b>
          </Typography>
          <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
            <br></br>
            <Typography component="h1" variant="h6" align="left" style={{ color: 'black' }}>
              <b> GENERAL DETAILS</b>
            </Typography>

            <div className='form-control'>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Title"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            {formik.errors.name ? <div className='error'>{formik.errors.name}</div>: null}
            </div>

            <TextField
              multiline
              rows={4}
              rowsMax={6}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
              {formik.errors.description ? <div className='error'>{formik.errors.description}</div>: null}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="price"
              label="Unit Price"
              name="price"
              autoComplete="price"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
              {formik.errors.price ? <div className='error'>{formik.errors.price}</div>: null}
             
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="quantity"
              label="Quantity"
              name="quantity"
              autoComplete="quantity"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.quantity && Boolean(formik.errors.quantity)}
              helperText={formik.touched.quantity && formik.errors.quantity}
            />
              {formik.errors.quantity ? <div className='error'>{formik.errors.quantity}</div>: null}
           
              <br></br>
              <br></br>
              

            <Typography component="h1" variant="h6" align="left" style={{ color: 'black' }}>
              <b>SPARE PART CONDITION</b>
            </Typography>
            
            <Menu
            options={options}
           value={formik.values.condition}
            onChange={value=>formik.setFieldValue('condition', value.value)}
            />
            {formik.errors.condition ? <div className='error'>{formik.errors.condition}</div> : null}
           
            <br></br>
            <Divider />
            <br></br>
            <Typography component="h1" variant="h6" align="left" style={{ color: 'black' }}>
              <b>SPARE PART CLASSIFICATION</b>
            </Typography>

            < Category
               options={categoryOptions}
               value={formik.values.category}
                onChange={value=>formik.setFieldValue('category', value.value)}
                />
                {formik.errors.category ? <div className='error'>{formik.errors.category}</div> : null}

            <br></br>
            <Divider />
            <br></br>
            <Typography component="h1" variant="h6" align="left" style={{ color: 'black' }}>
              <b>VEHICLE DETAILS FOR THE SPARE PART</b>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="vehicleModel"
              label="Model"
              name="vehicleModel"
              autoComplete="model"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.vehicleModel && Boolean(formik.errors.vehicleModel)}
              helperText={formik.touched.vehicleModel && formik.errors.vehicleModel}
            />
              {formik.errors.vehicleModel ? <div className='error'>{formik.errors.vehicleModel}</div>: null}
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              required
              id="year"
              label="Manufactured Year"
              name="year"
              autoComplete="year"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.year && Boolean(formik.errors.year)}
              helperText={formik.touched.year && formik.errors.year}
            />
              {formik.errors.year ? <div className='error'>{formik.errors.year}</div>: null}
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              required
              id="country"
              label="Manufactured Country"
              name="country"
              autoComplete="country"
              autoFocus
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
              {formik.errors.country ? <div className='error'>{formik.errors.country}</div>: null}
            <br></br>
            <br></br>
            <Divider />
            <br></br>
            <Typography component="h1" variant="h6" align="left" style={{ color: 'black' }}>
              <b>SPARE PART IMAGES</b>
            </Typography>
            
            <p><h3>Upload an image. Please make sure to add a real image of your product.</h3></p>
            <input
              type="file"
              name="photo1"
              onChange={(event) =>
               formik.setFieldValue("photo1", event.target.files[0])
              }

             //className={classes.input}
              id="contained-button-file" 
              />
               {formik.errors.photo1 ? <div className='error'>{formik.errors.photo1}</div>: null}

              <br></br>
              
        
           <br></br>
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

export default PostanAd;