import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ServiceRegions from './nav-settings-menu-submenu-serviceregions';
import ScheduledTrips from './nav-settings-menu-submenu-scheduletrips';

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
      component="div"
      className={classes.nested}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary="General Settings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Contact Help" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="User Facing Details" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Registration" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Pricing" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Customer Verification" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Payments" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Operations" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Dispatch Phone Lines" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Overload" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button >
        <ListItemText primary="Markets" />
      </ListItem>
    <ListItem className={classes.itemList}>
      <ServiceRegions />
    </ListItem>
    <ListItem button >
        <ListItemText primary="Locations" />
      </ListItem>
      <ListItem button >
        <ListItemText primary="Manage Services" />
      </ListItem>
      <ListItem button >
        <ListItemText primary="Business Accounts" />
      </ListItem>
      <ListItem className={classes.itemList}>
      <ScheduledTrips />
    </ListItem>
      <ListItem button >
        <ListItemText primary="Outages" />
      </ListItem>
    </List>
  );
}
  