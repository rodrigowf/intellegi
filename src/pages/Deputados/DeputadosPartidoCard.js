import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';

import Chip from "@material-ui/core/es/Chip/Chip";
import Avatar from '@material-ui/core/Avatar';
import Card from "@material-ui/core/es/Card/Card";
import CardHeader from '@material-ui/core/CardHeader';

import grey from '@material-ui/core/colors/grey';
import CardContent from "@material-ui/core/es/CardContent/CardContent";

const styles = (theme) => ({
    cardPartido: {
        marginBottom: theme.spacing.unit*2,
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

class DeputadosPartidoCard extends React.Component {

    render() {
        let { classes, key, data} = this.props;

        if (data.length < 1) return '';
        else return (
            <Card
                key={key}
                className={classes.cardPartido}
            >
                <CardHeader
                    avatar={
                        <Avatar aria-label="Logotipo partio" className={classes.avatar}>
                            {data[0].siglaPartido[0]}
                        </Avatar>
                    }
                    title={data[0].siglaPartido}
                    subheader={data[0].siglaPartido}
                    className={classes.cardHeader}
                />
                <CardContent className={classes.cardContent}>
                    {data.map( (deputado, index) => (
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
            </Card>
        );
    }
}

DeputadosPartidoCard.propTypes = {
    classes: PropTypes.object.isRequired,
    deputados: PropTypes.string.isRequired,
};

export default withStyles(styles)(DeputadosPartidoCard);