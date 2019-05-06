import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';

import ListIcon from "@material-ui/icons/List";
import {Link} from "react-router-dom";

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
        color: 'primary',
        route: '/propostas',
    },
    {
        icon: <ListIcon />,
        title: "Por Comissão",
        color: 'secondary',
        route: '/comissoes',
    },
    {
        icon: <ListIcon />,
        title: "Todas as PL's",
        color: 'primary',
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
                {menuItems.map(item => (
                    <Fab component={Link} to={item.route} color={item.color} aria-label="Add" className={[classes.fab, classes.margin]}>
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