import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Menus from './Menus';

import styles from './AppStyle';
import routes from './routes';

class App extends React.Component {
  state = {
    redirectToReferrer: false,
    open: false,
    searchFilter: '',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleSearch = (event) => {
    this.setState({searchFilter: event.target.value});
  };

  render() {
    const { classes } = this.props;
    let { searchFilter, open } = this.state;

    return (
        <div className={classes.root}>
          <Router>
            <CssBaseline />
            <Menus
                stateOpen={open}
                handleDrawerOpen={this.handleDrawerOpen}
                handleDrawerClose={this.handleDrawerClose}
                handleSearch={this.handleSearch}
              />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              {routes.map((route, index) => (
                  // You can render a <Route> in as many places
                  // as you want in your app. It will render along
                  // with any other <Route>s that also match the URL.
                  // So, a sidebar or breadcrumbs or anything else
                  // that requires you to render multiple things
                  // in multiple places at the same URL is nothing
                  // more than multiple <Route>s.
                  route.searchable
                    ? <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          render={ (props) =>
                              React.createElement(route.component, {
                                searchFilter: searchFilter,
                                drawerOpen:open, ...props})
                          }
                      />
                    : <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                      />
              ))}
            </main>
          </Router>
        </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);