import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import Requests from "../helpers/api";

import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/es/Chip/Chip";
import Avatar from '@material-ui/core/Avatar';
import grey from '@material-ui/core/colors/grey';

const apiArea = 'partidos';

const styles =  (theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        chip: {
            backgroundColor: grey[200],
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
});

class Partidos extends React.Component {
    state = {
        partidos: [],
        partidosFiltrados: [],
    };

    componentDidMount(){
        Requests.get(apiArea, {
            pagina: 1,
            itens: 600,
            ordem: 'ASC',
            ordenarPor: 'nome',
        }).then(ret => {
            if (ret.dados) {
                let data = Object.values(ret.dados);
                data.forEach(function(deputado, index) {
                    data[index].nome = deputado.nome.toLowerCase()
                        .split(' ').map(string =>
                            string[0].toUpperCase()+string.slice(1)).join(' ')
                });
                let partidos = Object.values(data);
                this.setState({ partidos: partidos });
                this.setState({ partidosFiltrados: partidos });
            }
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // Testa se a propriedade que mudou foi a "searchFilter"
        if(prevProps.searchFilter !== this.props.searchFilter) {

            // Testa se a string de busca aumentou ou diminuiu
            if(this.props.searchFilter.includes(prevProps.searchFilter)) {
                this.setState({
                    partidosFiltrados: this.state.partidosFiltrados.filter(
                        partido => partido.nome.includes(this.props.searchFilter)
                    )
                });
            }
            else { // Caso tenha sido apagado algo (na string de busca)...
                this.setState({
                    partidosFiltrados: this.state.partidos.filter(
                        partido => partido.nome.includes(this.props.searchFilter)
                    )
                });
            }
        }
    }

    render() {
        const { classes } = this.props;
        let { partidosFiltrados } = this.state;
        
        return (
            <React.Fragment>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Partidos
                </Typography>
                {partidosFiltrados.map((partido, index) => (
                    <Chip
                        key={index}
                        component={Link}
                        to={'/propostas/partido/'+partido.sigla}
                        aria-label={partido.nome}
                        avatar={<Avatar alt={partido.nome} src={'http://www.camara.leg.br/internet/Deputado/img/partidos/'+partido.sigla+'.gif'} />}
                        label={partido.nome}
                        //onClick={handleClick}
                        className={classNames(classes.chip, classes.margin, classes[partido.sigla])}
                    />
                ))}
            </React.Fragment>
        );
    }
}

Partidos.propTypes = {
    classes: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    searchFilter: PropTypes.string.isRequired,
};

export default withStyles(styles)(Partidos);