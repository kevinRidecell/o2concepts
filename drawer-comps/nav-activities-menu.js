import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="div"
      className={classes.nested}
    >
      <ListItem button onClick={handleClick} className={classes.root}>
        <ListItemText primary="Trips" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItem button className={classes.nested}>
            <ListItemText primary="Current" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Past" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Scheduled" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemText primary="Jobs" />
      </ListItem>
    </List>
  );
}