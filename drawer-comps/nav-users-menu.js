import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ListIcon from '@material-ui/icons/List';

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
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Riders" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Notifications" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemText primary="Drivers" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Workers" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Renters" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Staff" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Superusers" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Managers" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="User Groups" />
      </ListItem>
    </List>
  );
}