import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { social } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography
          variant='h6'
          style={{ fontSize: '2rem', fontWeight: 'bold' }}
          gutterBottom
        >
          About
        </Typography>
        <Typography style={{ fontSize: '1.5rem' }}>
          Automate Blog is the best way for you to stay up-to-date on the latest
          trends, tips, and tricks in the automotive industry. Our regular posts
          and updates will give you all the insight you need.
        </Typography>
      </Paper>
      <Typography
        variant='h6'
        style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
        gutterBottom
        className={classes.sidebarSection}
      >
        Social
      </Typography>
      {social.map((network) => (
        <Link display='block' variant='body1' href='#' key={network}>
          <Grid container direction='row' spacing={1} alignItems='center'>
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
