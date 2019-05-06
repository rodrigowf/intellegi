import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import TableList from '../components/TableList';

const API = 'https://dadosabertos.camara.leg.br/api/v2/';
const page = 'comissoes';

const styles = {
    grow: {
        flexGrow: 1,
    },
};

class Comissoes extends React.Component {
    state = {
        page: 1,
        data: {},
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
        const {classes} = this.props;
        // let { redirectToReferrer } = this.state;

        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                    Lista de Propostas de Lei
                </Typography>
                <Paper className={classes.root}>
                    <TableList
                        head={['Id', 'URL', 'Data de Inicio', 'Data de Fim']}
                        data={this.state.data}
                    />
                </Paper>
            </React.Fragment>
        );
    }
}

Comissoes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comissoes);