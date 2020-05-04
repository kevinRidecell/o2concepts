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


  return (
    <List
      component="div"
      className={classes.nested}
    >
      <ListItem button>
        <ListItemText primary="Tickets" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Invoices" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Analytics" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Scheduled Reports" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Telematics" />
      </ListItem>
    </List>
  );
}