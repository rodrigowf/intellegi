import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Requests from "../../helpers/api";

import Typography from '@material-ui/core/Typography'

import DivideInCols from "../../components/DivideInCols";
import DeputadosPartidoCard from "./DeputadosPartidoCard";

const apiArea = 'deputados';

const styles = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
});

class Deputados extends React.Component {
    state = {
        deputados: [],
        deputadosFiltrados: [],
    };

    //TODO preparar JSON dos partidos para pegar os dados que estão separados aqui (para exibir no Card)

    componentDidMount(){
        Requests.get(apiArea, {
            pagina: 1,
            itens: 600,
            ordem: 'ASC',
            ordenarPor: 'nome',
        }).then(ret => {
            if (ret.dados) {
                let data = {};
                ret.dados.forEach( deputado => {
                    deputado.nome = deputado.nome.toLowerCase()
                        .split(' ').map(string =>
                            string[0].toUpperCase()+string.slice(1)).join(' '); //Só as primeiras maiúsculas.

                    let partidoId = deputado.uriPartido.split('/').pop();
                    if(data[partidoId] === undefined) data[partidoId] = [deputado];
                    else data[partidoId].push(deputado);
                });
                // Ordena o array de partidos pelo numero de integrantes do partido
                let dataSorted = Object.values(data).sort((one, other) => other.length - one.length);
                this.setState({
                    deputados: dataSorted,
                    deputadosFiltrados: dataSorted,
                });
            }
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Testa se a propriedade que mudou foi a "searchFilter"
        if(prevProps.searchFilter !== this.props.searchFilter) {

            // Testa se a string de busca aumentou ou diminuiu (caso aumenta ...)
            if(this.props.searchFilter.includes(prevProps.searchFilter)) {
                this.setState({
                    deputadosFiltrados: this.state.deputadosFiltrados
                        .map((deputados) => deputados.filter(
                            deputado => deputado.nome.includes(this.props.searchFilter)
                        ))
                });
            }
            else { // Caso tenha sido apagado algo (na string de busca)...
                this.setState({
                    deputadosFiltrados: this.state.deputados
                        .map((deputados) => deputados.filter(
                            deputado => deputado.nome.includes(this.props.searchFilter)
                        ))
                });
            }
        }
    }

    render() {
        const { deputadosFiltrados } = this.state;
        
        return (
            <React.Fragment>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Deputados
                </Typography>
                <DivideInCols
                    data={deputadosFiltrados}
                    children={DeputadosPartidoCard}
                    numCols={2}
                />
            </React.Fragment>
        );
    }
}

Deputados.propTypes = {
    classes: PropTypes.object.isRequired,
    searchFilter: PropTypes.string.isRequired,
};

export default withStyles(styles)(Deputados);