import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '80px 0 80px 0',
  },

  titleText: {
    width: '50%',
    marginRight: '50px',
  },

  subText: {
    color: '#4B4949',
    fontSize: 30,
  },
  button: {
    margin: '30px',
  },
  image: {
    height: '200px',
  },
}));

function HeroSectionImageRight({ mainText, subText, image, buttonLabel }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.titleText}>
        <Typography variant='h3'>{mainText}</Typography>
        <Typography variant='h3' className={classes.subText}>
          {subText}
        </Typography>
        <Button className={classes.button} variant='outlined' color='primary'>
          {buttonLabel}
        </Button>
      </div>
      <img src={image} className={classes.image}></img>
    </Container>
  );
}

export default HeroSectionImageRight;
