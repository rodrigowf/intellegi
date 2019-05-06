import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import getDataRequest from '../helpers/api';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import pink from '@material-ui/core/colors/pink';
import brown from '@material-ui/core/colors/brown';
import purple from '@material-ui/core/colors/purple';

import ListIcon from "@material-ui/icons/List";

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
        icon: ListIcon,
        title: "CDH",
        color: red[300],
        route: '/propostas',
    },
    {
        icon: ListIcon,
        title: "CBH",
        color: green[300],
        route: '/comissoes',
    },
    {
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
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
                    <Fab component={Link} to={item.route} key={index} style={{backgroundColor: item.color}} aria-label={item.title} className={classNames(classes.fab, classes.margin)}>
                        <div className={classes.fabContent}>
                            {React.createElement( item.icon, {fontSize: "medium"})}
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