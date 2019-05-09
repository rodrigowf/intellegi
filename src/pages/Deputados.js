import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
// import * as colorpicker from "random-material-color";

import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/es/Chip/Chip";
import grey from '@material-ui/core/colors/grey';

import comissoes from './comissoesData';

const styles = function (theme) {
    const styles = {
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        chip: {
            backgroundColor: grey[200]
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
    comissoes.forEach(function (comissao) {styles[comissao.sigla]={'&:hover, &$focusVisible': {backgroundColor: comissao.color}}});
    return styles
};

console.log(styles);


class Comissoes extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Comissões
                </Typography>
                {comissoes.map((comissao, index) => (
                    <Chip
                        key={index}
                        component={Link}
                        to={comissao.route}
                        aria-label={comissao.title}
                        avatar={React.createElement( comissao.icon, {fontSize: "small"})}
                        label={comissao.nome}
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
};

export default withStyles(styles)(Comissoes);