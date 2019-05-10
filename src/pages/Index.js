import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
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
        width: 125,
        height: 125,
        textTransform: "none",
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
        route: '/partidos',
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
                <Typography component="h2" variant="h1" align="left" color="textPrimary" gutterBottom>
                     intellegi
                </Typography>
                <Typography component="h2" variant="h4" align="left" color="textSecondary" gutterBottom>
                    A Política como ela é,<br/> Transparente como deve ser.
                </Typography>
                <br/>
                {menuItems.map((item, index) => (
                    <Fab component={Link} to={item.route} key={index} style={{backgroundColor: item.color}} aria-label={item.title} className={classNames(classes.fab, classes.margin)}>
                        <div className={classes.fabContent}>
                            {React.createElement( item.icon, {fontSize: "large"})}
                            <Typography color="inherit" component="h1" variant="h6">
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