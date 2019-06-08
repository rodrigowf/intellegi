import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

import styles from './AppStyle';
import routes from './routes';

class Menus extends React.Component {

  render() {
    const { classes, theme,
        stateOpen, handleDrawerOpen, handleDrawerClose, handleSearch
    } = this.props;

    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: stateOpen,
                })}
            >
              <Toolbar className={classNames({[classes.appToolbarClosed]: !stateOpen})}
                  disableGutters={!stateOpen}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerOpen}
                    className={classNames(classes.menuButton, {
                      [classes.hide]: stateOpen,
                    })}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                  Intellegi
                </Typography>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                      placeholder="Search…"
                      onChange={handleSearch}
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                  />
                </div>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                  [classes.drawerOpen]: stateOpen,
                  [classes.drawerClose]: !stateOpen,
                })}
                classes={{
                  paper: classNames({
                    [classes.drawerOpen]: stateOpen,
                    [classes.drawerClose]: !stateOpen,
                  }),
                }}
                open={stateOpen}
            >
              <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                {routes.map( (route, index) => (route.label ?
                    <ListItem button key={index} component={Link} to={route.path}>
                      <ListItemIcon>
                        {route.icon}
                      </ListItemIcon>
                      <ListItemText primary={route.label} />
                    </ListItem> : ''
                ))}
              </List>
              <Divider />
            </Drawer>
        </React.Fragment>
    );
  }
}

Menus.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,

  stateOpen: PropTypes.object.isRequired,
  handleDrawerOpen: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.object.isRequired,
  handleSearch: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Menus);