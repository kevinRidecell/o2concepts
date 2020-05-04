import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import SettingsMenu from './nav-settings-menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';


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
}
));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav" className={classes.root}
      >
      <ListItem button onClick={handleClick} className={classes.paddingLeft}>
        <ListItemIcon>
          <SettingsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem>
            <SettingsMenu />
          </ListItem>
          
        </List>
      </Collapse>   
    </List>
  );
}