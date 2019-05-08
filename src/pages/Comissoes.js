import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import * as colorpicker from "random-material-color";

import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import comissoes from './comissoesData';

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
    lightTooltip: {
        // backgroundColor: theme.palette.common.white,
        // color: 'rgba(0, 0, 0, 0.87)',
        // boxShadow: theme.shadows[1],
        fontSize: 13,
    },
});

class Comissoes extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Comissões
                </Typography>
                {comissoes.map((item, index) => (
                    <Tooltip title={item.nome} aria-label={item.nome} classes={{ tooltip: classes.lightTooltip }}>
                    <Fab component={Link} to={item.route} key={index} style={
                        {backgroundColor:colorpicker.getColor({ shades: ['100']})}
                        } aria-label={item.title} className={classNames(classes.fab, classes.margin)}>
                        <div className={classes.fabContent}>
                            {React.createElement( item.icon, {fontSize: "small"})}
                            <Typography color="inherit" component="p" variant="inherit">
                                {item.sigla}
                            </Typography>
                        </div>
                    </Fab>
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