import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UsersMenu from './nav-users-menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paddingLeft: {
    paddingLeft: 0,
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
      component="nav"
      className={classes.root}
      >
      <ListItem button onClick={handleClick} className={classes.paddingLeft}>
        <ListItemIcon>
          <PermIdentityOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div"
        className={classes.root} 
        >
        <ListItem>
            <UsersMenu />
          </ListItem>
          
        </List>
      </Collapse>   
    </List>
  );
}