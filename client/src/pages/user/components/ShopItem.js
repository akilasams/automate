import React from 'react';
import Card from '@material-ui/core/Card';
import { CardActions, IconButton, Typography } from '@material-ui/core';
import { CardHeader, CardMedia, CardContent } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const ShopItem = (props) => {
  const { details } = props;

  return (
    <Card>
      <CardHeader title={details.itemName} subheader={details.condition} />
      <CardMedia />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {details.description}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {details.unitPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton>
          <AddCircleOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ShopItem;
