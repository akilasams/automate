import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from 'react-select';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default ({ onChange, options, value, className}) => {
  const classes = useStyles();
  const [condition, setCondition] = React.useState('');

  const handleChange = (event) => {
    setCondition(event.target.value);
  };

  const defaultValue = (options,value) =>{
    return options ? options.find(option=>option.value ===value):""
}
  return (
    <div>
        
      <FormControl 
      variant="outlined"
      fullWidth
      margin="normal" 
      className={classes.formControl}>
        
        <Select
          labelId="condition"
          id="condition"
          label="Condition"
          value={defaultValue(options,value)}
          onChange={value=>onChange(value)}
          options={options}
          />
      </FormControl>
     
      </div>
  );
}