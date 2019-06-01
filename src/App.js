import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainMenus from './MainMenus';

import useStyles from './AppStyle';
import routes from './routes';

function App(props) {
  const [ searchFilter ] = React.useState('');
  const [ open ] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();

  function handleSearch(event) {
    searchFilter(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <MainMenus handleSearch={handleSearch} />
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

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default App;
// export default withStyles(styles, { withTheme: true })(App);