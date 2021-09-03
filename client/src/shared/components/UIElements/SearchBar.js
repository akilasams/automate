import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(2),
    width: '91%',
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();

  return (
    <Paper>
      <InputBase placeholder='Search...' className={classes.input} />
      <IconButton className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
