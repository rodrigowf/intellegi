import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/deepOrange';
import purple from '@material-ui/core/colors/purple'
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';

import ListIcon from "@material-ui/icons/List";
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import GroupWorkIcon from "@material-ui/icons/GroupWork"
import FlagIcon from "@material-ui/icons/Flag"
import DonutIcon from "@material-ui/icons/DonutLarge"

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    fab: {
        width: 150,
        height: 150,
        textTransform: "none",
        backgroundColor: grey[100],
    },
    fabContent: {
        display:'block',
        width: "100%",
        alignItems: 'center',
        textAlign: 'center',
    },
    fabText: {
        fontSize: 23,
    },
    fabIcon: {
        fontSize: 60,
        margin: -6,
    },

    red: {
        color: red[900],
        '&:hover': {backgroundColor: red[100]},
    },
    icon_red: { color: red[300] },

    blue: {
        color: blue[900],
        '&:hover': {backgroundColor: blue[100]},
    },
    icon_blue: { color: blue[300] },

    orange: {
        color: orange[900],
        '&:hover': {backgroundColor: orange[100]},
    },
    icon_orange: {color: orange[300] },

    purple: {
        color: purple[900],
        '&:hover': {backgroundColor: purple[100]},
    },
    icon_purple: {color: purple[300] },

    indigo: {
        color: indigo[900],
        '&:hover': {backgroundColor: indigo[100]},
    },
    icon_indigo: {color: indigo[300] },
});

const menuItems = [
    {
        icon: ListIcon ,
        title: "Últimos",
        color: 'red',
        route: '/propostas',
    },
    {
        icon: GroupWorkIcon ,
        title: "Comissões",
        color: 'blue',
        route: '/comissoes',
    },
    {
        icon: AccountBoxIcon ,
        title: "Deputados",
        color: 'orange',
        route: '/deputados',
    },
    {
        icon: FlagIcon,
        title: "Partidos",
        color: 'purple',
        route: '/partidos',
    },
    {
        icon: DonutIcon,
        title: "Blocos",
        color: 'indigo',
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
                <Typography component="h2" variant="h1" align="left" color="textPrimary" gutterBottom>
                     intellegi
                </Typography>
                <Typography component="h2" variant="h4" align="left" color="textSecondary" gutterBottom>
                    A Política como ela é,<br/> Transparente como deve ser.
                </Typography>
                <br/>
                {menuItems.map((item, index) => (
                    <IconButton
                        component={Link}
                        to={item.route}
                        key={index}
                        aria-label={item.title}
                        className={classNames(
                            classes.fab,
                            classes.margin,
                            classes[item.color])}
                    >
                        <div className={classes.fabContent}>
                            {React.createElement( item.icon, {className: classNames(classes.fabIcon, classes['icon_'+item.color])})}
                            <Typography className={classes.fabText} color="inherit" component="h1" variant="h6">
                                {item.title}
                            </Typography>
                        </div>
                    </IconButton>
                ))}
            </React.Fragment>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);