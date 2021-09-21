import React from 'react';
import Card from '@material-ui/core/Card';
import { Link, useHistory } from 'react-router-dom';
import { CardActions, IconButton, Typography } from '@material-ui/core';
import { CardHeader, CardMedia, CardContent } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useEffect, useState, useRef } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext';
import Modal from '../../../shared/components/UIElements/Modal';

import './ShopItem.css';

const useStyles = makeStyles((theme) => {
  return {
    postAdButton: {
      marginLeft: 5,
      marginRight: '15px',
      height: '40px',
      width: '150px',
    },
    quantityField: {
      height: '25px',
      width: '100px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    card: {
      display: 'flex',
      // flexFlow: 'column',
    },
    gotToHomeButton: {
      width: '100px',
      margin: '10px',
    },
  };
});

const CartItem = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { details } = props;
  const { user } = useContext(AuthContext);

  const quantity = details.quantity;
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [showMessage, setShowMessage] = useState(false);

  const openMessageHandler = () => setShowMessage(true);
  const closeMessageHandler = () => setShowMessage(false);

  const handleNewQuantity = (event) => {
    setNewQuantity(event.target.value);
  };

  const [item, setItem] = useState({});

  const handleDelete = () => {
    const id = details.id;

    axios.delete(`http://localhost:3001/cart/deleteItem/${id}`).then((res) => {
      console.log('Item Deleted');
      closeMessageHandler();
      history.push('/Shop');
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/shop/getItem/byId/${details.itemId}`)
      .then((res) => {
        // console.log(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Modal
        show={showMessage}
        header='Do You Want to Delete This Item?'
        onCancel={closeMessageHandler}
      >
        <Button
          className={classes.gotToHomeButton}
          color='primary'
          variant='contained'
          onClick={handleDelete}
        >
          Yes
        </Button>
        <Button
          className={classes.gotToHomeButton}
          color='primary'
          variant='contained'
          onClick={closeMessageHandler}
        >
          No
        </Button>
      </Modal>
      <Card className={classes.card}>
        <div className='card-media'>
          <img
            className='card-image'
            src={`http://localhost:3001/${item.image}`}
            alt=''
          />
        </div>
        <div className='details-container'>
          <CardHeader title={item.itemName} style={{ paddingBottom: '0' }} />
          <CardContent style={{ paddingTop: '0' }}>
            <Typography variant='body2' color='textSecondary' component='p'>
              {details.unitPrice} LKR
            </Typography>
            <TextField
              className={classes.quantityField}
              id='filled-number'
              label='Quantity'
              type='number'
              value={newQuantity}
              onChange={handleNewQuantity}
              InputLabelProps={{
                shrink: true,
              }}
              variant='standard'
            />
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='delete' onClick={openMessageHandler}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </div>
      </Card>
    </>
  );
};

export default CartItem;
