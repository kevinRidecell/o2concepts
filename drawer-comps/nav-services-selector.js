import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 200,
  },
  sticky: {
  position: 'sticky',
},
  nested: {
    paddingLeft: theme.spacing(4),
  },

 
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState('All services');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" className={classes.root}>
      <RadioGroup className={classes.nested} aria-label="services" name="services1" value={value} onChange={handleChange}>
        <FormControlLabel value="All services" control={<Radio />} label="All services" />
        <FormControlLabel value="Carsharing" control={<Radio />} label="Carsharing" />
        <FormControlLabel value="Ridesharing" control={<Radio />} label="Ridesharing" />
        <FormControlLabel value="Fleet" control={<Radio />} label="Fleet" />
        <FormControlLabel value="Service 4" control={<Radio />} label="Service 4" />
        <FormControlLabel value="Service 5" control={<Radio />} label="Service 5" />
        <FormControlLabel value="Service 6" control={<Radio />} label="Service 6" />
        <FormControlLabel value="Service 7" control={<Radio />} label="Service 7" />
        <FormControlLabel value="Service 8" control={<Radio />} label="Service 8" />
        <FormControlLabel value="Service 9" control={<Radio />} label="Service 9" />
      </RadioGroup>
    </FormControl>
  );
}