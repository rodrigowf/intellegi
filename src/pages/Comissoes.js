import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';

import ListIcon from "@material-ui/icons/List";
import {Link} from "react-router-dom";

const API = 'https://dadosabertos.camara.leg.br/api/v2/';
const page = 'comissoes';

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
    };

    componentDidMount() {
        let uri = API+page+"?pagina="+this.state.page+"&itens=15&ordem=DESC&ordenarPor=id";

        console.log(uri);

        fetch(uri)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data.dados });
                console.log(this.state.data)
            });
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Comissões
                </Typography>
                {comissoes.map(item => (
                    <Fab component={Link} to={item.route} color={item.color} aria-label="Add" className={[classes.fab, classes.margin]}>
                        <div className={classes.fabContent}>
                            {item.icon}
                            <Typography color="inherit" component="h9" variant="inherit">
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