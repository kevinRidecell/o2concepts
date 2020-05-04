import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import ActivitiesMenu from './nav-activities-menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  itemList: {
    padding: 0,
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="div" className={classes.root, classes.itemList} 
      >
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Service Regions" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
    
      <ListItem button className={classes.nested}>
        <ListItemText primary="Pricing Regions" />
      </ListItem>
      <ListItem button className={classes.nested}>
        <ListItemText primary="Active Regions" />
      </ListItem>
      <ListItem button className={classes.nested}>
        <ListItemText primary="Market Regions" />
      </ListItem>
      <ListItem button className={classes.nested}>
        <ListItemText primary="Registration Regions" />
      </ListItem>
        </List>
      </Collapse>   
    </List>
  );
}