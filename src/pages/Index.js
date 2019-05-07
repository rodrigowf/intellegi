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
import purple from '@material-ui/core/colors/purple'
import indigo from '@material-ui/core/colors/indigo';

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
        width: 130,
        height: 130,
    },
    fabContent: {
        display:'block',
        width: "100%",
        alignItems: 'center',
        textAlign: 'center',

        ListIcon: {
            fontSize: 30,
        }
    },
});

const menuItems = [
    {
        icon: ListIcon ,
        title: "Últimos",
        color: red[200],
        route: '/propostas',
    },
    {
        icon: GroupWorkIcon ,
        title: "Comissões",
        color: blue[200],
        route: '/comissoes',
    },
    {
        icon: AccountBoxIcon ,
        title: "Deputados",
        color: yellow[200],
        route: '',
    },
    {
        icon: FlagIcon,
        title: "Partidos",
        color: purple[200],
        route: '',
    },
    {
        icon: DonutIcon,
        title: "Blocos",
        color: indigo[200],
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
                            {React.createElement( item.icon, {fontSize: "large"})}
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