import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import pink from '@material-ui/core/colors/pink';
import brown from '@material-ui/core/colors/brown';
import purple from '@material-ui/core/colors/purple';

import ListIcon from "@material-ui/icons/List";

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    fab: {
        width: 130,
        height: 130,
    },
    fabContent: {
        display:'block',
        width: "100%",
        alignItems: 'center',
        textAlign: 'center',
    },
});

const menuItems = [
    {
        icon: <ListIcon />,
        title: "Todas as PL's",
        color: purple[200],
        route: '/propostas',
    },
    {
        icon: <ListIcon />,
        title: "Por Comissão",
        color: blue[200],
        route: '/comissoes',
    },
    {
        icon: <ListIcon />,
        title: "Ablabla abla",
        color: yellow[200],
        route: '',
    },
];

class Index extends React.Component {
    state = {
    };


    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                    Bem Vindo!
                </Typography>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Navegação
                </Typography>
                {menuItems.map((item, index) => (
                    <Fab component={Link} to={item.route} key={index} style={{backgroundColor: item.color}} aria-label={item.title} className={classNames(classes.fab, classes.margin)}>
                        <div className={classes.fabContent}>
                            {item.icon}
                            <Typography color="inherit" component="h6" variant="h6">
                                {item.title}
                            </Typography>
                        </div>
                    </Fab>
                ))}
            </React.Fragment>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);