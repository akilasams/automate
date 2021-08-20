import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MainFeaturedPost from './components/MainFeaturedPost';
import FeaturedPost from './components/FeaturedPost';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Automobiles', url: '#' },
  { title: 'Auto parts', url: '#' },
  { title: 'Automobile care', url: '#' },
  { title: 'How-to', url: '#' },
];

const mainFeaturedPost = {
  title: 'Here is your basic car maintenance schedule',
  description:
    "More than ever, people are looking to maintain their vehicles at home. DIY projects are big money savers, plus it's rewarding to put valuable skills to good use. Still, knowing what exactly needs to be done on today's vehicles – and when to do it – can be challenging.",
  image:
    'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Understanding your brake system.',
    date: 'Jul 12',
    description:
      'Considering that brakes wear slowly and can last 40-60,000 miles according to your driving style, it can be hard to really know when they are wearing down to a point where they need replacement. That is why it is important to have a good understanding of how your brake system is designed, and how it works.',
    image:
      'https://images.unsplash.com/photo-1601644904642-a993ab409a4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    imageText: 'Image Text',
  },
  {
    title: 'How to Safely Disconnect Your Car Battery',
    date: 'May 11',
    description:
      'Any time you are working on anything electrical-related on your vehicle, you will need to disconnect the negative battery terminal. Read this short article to get a clear understanding about the procedure you need to follow when disconnecting the battery of your car.',
    image:
      'https://images.unsplash.com/photo-1597766325363-f5576d851d6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',

  social: [
    { name: 'Instagram', icon: InstagramIcon },

    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <main>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title='How a Vehicle Cooling System Works' />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          social={sidebar.social}
        />
      </Grid>
    </main>
  );
}
