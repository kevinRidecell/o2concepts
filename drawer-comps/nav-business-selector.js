import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  business: {
width: 240,
  },

}));

const businesses = [
  {
    value: 'Blue Star',
    label: 'Blue Star',
  },
  {
    value: 'Pink Star',
    label: 'Pink Star',
  },
  {
    value: 'White Star',
    label: 'White Star',
  },
  {
    value: 'Silver Star',
    label: 'Silver Star',
  },
  
];


export default function MiniDrawer() {
  const classes = useStyles();


    const [business, setBusiness] = React.useState('EUR');
    const handleChange = (event) => {
      setBusiness(event.target.value);
    };


  return (
    
    <List
    component="nav"
    className={classes.root}
    >
      <Typography variant="h6" noWrap>
    Buiness
  </Typography>
      <ListItem>
    <form  noValidate autoComplete="off"
    component='div'>
      <div>
        <TextField className={classes.business}
          select
          label="Select business"
          value={business}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {businesses.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
    </ListItem>
    </List>
  );
 
   }
