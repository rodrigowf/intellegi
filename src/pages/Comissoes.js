import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import ListIcon from "@material-ui/icons/List";

import getDataRequest from '../helpers/api';

const apiArea = 'orgaos';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    fab: {
        width: 65,
        height: 65,
    },
    fabContent: {
        display:'block',
        width: "100%",
        alignItems: 'center',
        textAlign: 'center',
    },
});

const comissoes = [
    {
        icon: <ListIcon />,
        title: "CDH",
        color: 'primary',
        route: '/propostas',
    },
    {
        icon: <ListIcon />,
        title: "CBH",
        color: 'secondary',
        route: '/comissoes',
    },
    {
        icon: <ListIcon />,
        title: "ABC",
        color: 'primary',
        route: '',
    },
];

class Comissoes extends React.Component {
    state = {
        data: [],
        page: 0,
        itemsPerPage: 1000,
    };

    getDataRequest(page=this.state.page, itensPerPage=this.state.itemsPerPage) {
        getDataRequest(apiArea, page, itensPerPage)
            .then(data => {
                this.setState({ data: data.dados });
                console.log(data)
            });
    }

    componentDidMount() {
        this.getDataRequest();
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Comissões
                </Typography>
                {comissoes.map((item, index) => (
                    <Fab component={Link} to={item.route} key={index} color={item.color} aria-label={item.title} className={classNames(classes.fab, classes.margin)}>
                        <div className={classes.fabContent}>
                            {item.icon}
                            <Typography color="inherit" component="p" variant="inherit">
                                {item.title}
                            </Typography>
                        </div>
                    </Fab>
                ))}
            </React.Fragment>
        );
    }
}

Comissoes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comissoes);