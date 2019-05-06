import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import TableList from '../components/TableList';

const API = 'https://dadosabertos.camara.leg.br/api/v2/';
const page = 'proposicoes';

const styles = {
    grow: {
        flexGrow: 1,
    },
};

class Propostas extends React.Component {
    state = {
        page: 1,
        data: {},
    };

    componentDidMount() {
        let uri = API+page+"?pagina="+this.state.page+"&itens=15&ordem=DESC&ordenarPor=id";

        console.log(uri);

        fetch(uri)
            .then(response => response.json())
            .then(data => this.setState({ data: data.dados }));
    };


    render() {
        const {classes} = this.props;

        let data = [];
        Object.values(this.state.data).map((row) => (data.push([row.id, row.uri, row.ano, row.ementa])));

        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                    Lista de Propostas de Lei
                </Typography>
                <Paper className={classes.root}>
                    <TableList
                        head={['Id', 'URL', 'Ano', 'Ementa']}
                        data={data}
                    />
                </Paper>
            </React.Fragment>
        );
    }
}

Propostas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Propostas);