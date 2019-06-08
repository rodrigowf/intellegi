import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
// import * as colorpicker from "random-material-color";

import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/es/Chip/Chip";
import Avatar from '@material-ui/core/Avatar';
import grey from '@material-ui/core/colors/grey';

import comissoes from '../data/comissoes';

const styles = function (theme) {
    const styles = {
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        chip: {
            backgroundColor: grey[200],
        },
        icon: {
            backgroundColor: grey[300],
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
    };
    comissoes.forEach(function (comissao) {styles[comissao.sigla]={'&:hover': {backgroundColor: comissao.color}}});
    return styles
};

class Comissoes extends React.Component {
    state = {
        comissoesFiltrado: comissoes,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        // Testa se a propriedade que mudou foi a "searchFilter"
        if(prevProps.searchFilter !== this.props.searchFilter) {

            // Testa se a string de busca aumentou ou diminuiu
            if(this.props.searchFilter.includes(prevProps.searchFilter)) {
                this.setState({
                    comissoesFiltrado: this.state.comissoesFiltrado.filter(
                        comissao => comissao.nome.toLowerCase().includes(this.props.searchFilter.toLowerCase())
                        //TODO resolver acentos que não estão funcionando!! (erro de charset)
                    )
                });
            }
            else { // Caso tenha sido apagado algo (na string de busca)...
                this.setState({
                    comissoesFiltrado: comissoes.filter(
                        comissao => comissao.nome.toLowerCase().includes(this.props.searchFilter.toLowerCase())
                    )
                });
            }
        }
    }

    render() {
        const { classes } = this.props;
        const { comissoesFiltrado } = this.state;

        return (
            <React.Fragment>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Comissões
                </Typography>
                {comissoesFiltrado.map((comissao, index) => (
                    <Chip
                        key={index}
                        component={Link}
                        to={comissao.route}
                        aria-label={comissao.title}
                        avatar={<Avatar className={classes.icon}>
                            {React.createElement(comissao.icon, {fontSize: "default"})}
                        </Avatar>}
                        label={comissao.nome.replace('Comissão de ', '')}
                        //onClick={handleClick}
                        className={classNames(classes.chip, classes.margin, classes[comissao.sigla])}
                    />
                ))}
            </React.Fragment>
        );
    }
}

Comissoes.propTypes = {
    classes: PropTypes.object.isRequired,
    searchFilter: PropTypes.string.isRequired,
};

export default withStyles(styles)(Comissoes);