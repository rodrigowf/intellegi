import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import Requests from "../helpers/api";

import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/es/Chip/Chip";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/es/Card/Card";
import CardHeader from '@material-ui/core/CardHeader';

import grey from '@material-ui/core/colors/grey';
import CardContent from "@material-ui/core/es/CardContent/CardContent";

const apiArea = 'deputados';

const styles = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    cardPartido: {
        marginBottom: theme.spacing.unit*2,
    },
    gridCol: {
        marginRight: 0,
    },
    cardHeader: {
        backgroundColor: grey[200],
    },
    cardContent: {
        padding: theme.spacing.unit,
    },
    chip: {
        backgroundColor: grey[200],
        margin: theme.spacing.unit/2,
    },
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    lightTooltip: {
        // backgroundColor: theme.palette.common.white,
        // color: 'rgba(0, 0, 0, 0.87)',
        // boxShadow: theme.shadows[1],
        fontSize: 14,
    },
    chipLabel: {

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
                let dataSorted = Object.values(data);
                dataSorted.sort((one, other) => other.length - one.length);
                let dataCols = [[], []];
                dataSorted.forEach((partido, index) => {
                    dataCols[index%2].push(partido)
                });
                this.setState({
                    deputados: dataCols,
                    deputadosFiltrados: dataCols,
                });
            }
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // Testa se a propriedade que mudou foi a "searchFilter"
        if(prevProps.searchFilter !== this.props.searchFilter) {

            // Testa se a string de busca aumentou ou diminuiu
            if(this.props.searchFilter.includes(prevProps.searchFilter)) {
                this.setState({
                    deputadosFiltrados: this.state.deputadosFiltrados
                        .map(cols => (
                            cols.map((deputados) => deputados.filter(
                                deputado => deputado.nome.includes(this.props.searchFilter)
                            ))
                        )
                    )
                });
            }
            else { // Caso tenha sido apagado algo (na string de busca)...
                this.setState({
                    deputadosFiltrados: this.state.deputados
                        .map(cols => (
                            cols.map((deputados) => deputados.filter(
                                deputado => deputado.nome.includes(this.props.searchFilter)
                            ))
                        )
                    )
                });
            }
        }
    }

    render() {
        const { classes } = this.props;
        const { deputadosFiltrados } = this.state;
        
        return (
            <React.Fragment>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Deputados
                </Typography>
                <Grid container spacing={16}>
                    {deputadosFiltrados.map((col, indCol) => (
                        <Grid item key={indCol} className={classes.gridCol} xs={6}>
                            {col.map( function (partido, indPartido) {
                                return (partido.length > 0) ?
                                    (<Card
                                        key={indPartido}
                                        className={classes.cardPartido}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                                    {partido[0].siglaPartido[0]}
                                                </Avatar>
                                            }
                                            title={partido[0].siglaPartido}
                                            subheader={partido[0].siglaPartido}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            {partido.map( (deputado, index) => (
                                                <Chip
                                                    key={index}
                                                    component={Link}
                                                    to={'/propostas/autor/'+deputado.nome}
                                                    aria-label={deputado.nome}
                                                    avatar={<Avatar alt={deputado.nome} src={deputado.urlFoto} />}
                                                    label={deputado.nome}
                                                    //onClick={handleClick}
                                                    className={classNames(classes.chip, classes[deputado.sigla])}
                                                    classes={{label: classes.chipLabel}}
                                                />
                                            ))}
                                        </CardContent>
                                    </Card>) : '';
                            })}
                        </Grid>
                    ))}
                </Grid>
            </React.Fragment>
        );
    }
}

Deputados.propTypes = {
    classes: PropTypes.object.isRequired,
    searchFilter: PropTypes.string.isRequired,
};

export default withStyles(styles)(Deputados);