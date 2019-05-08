import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
// import * as colorpicker from "random-material-color";

import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import comissoes from './comissoesData';

const styles = function (theme) {
    const styles = {
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
        fabText: {
            fontSize: 12,
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
                    <Tooltip title={comissao.nome} aria-label={comissao.nome} classes={{ tooltip: classes.lightTooltip }}>
                    <IconButton component={Link} to={comissao.route} key={index} aria-label={comissao.title}
                                className={classNames(classes.fab, classes.margin, classes[comissao.sigla])}>
                        <div className={classes.fabContent}>
                            {React.createElement( comissao.icon, {fontSize: "small"})}
                            <Typography className={classes.fabText} color="inherit" component="small" variant="subtitle2">
                                {comissao.sigla}
                            </Typography>
                        </div>
                    </IconButton>
                    </Tooltip>
                ))}
            </React.Fragment>
        );
    }
}

Comissoes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comissoes);