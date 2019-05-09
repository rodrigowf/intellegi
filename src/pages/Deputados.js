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


const apiArea = 'deputados';

const styles =  (theme) => ({
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
});

class Deputados extends React.Component {
    state = {
        deputados: [],
    };

    componentDidMount(){
        Requests.get(apiArea, {
            pagina: 1,
            itens: 600,
            ordem: 'ASC',
            ordenarPor: 'nome',
        }).then(ret => {
            ret.dados && this.setState({ deputados: Object.values(ret.dados) });
        });
    }

    render() {
        const { classes } = this.props;
        const { deputados } = this.state;
        
        return (
            <React.Fragment>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Deputados
                </Typography>
                {deputados.map((deputado, index) => (
                    <Chip
                        key={index}
                        component={Link}
                        to={'/deputados/'+deputado.id}
                        aria-label={deputado.nome}
                        avatar={<Avatar alt={deputado.nome} src={deputado.urlFoto} />}
                        label={deputado.nome}
                        //onClick={handleClick}
                        className={classNames(classes.chip, classes.margin, classes[deputado.sigla])}
                    />
                ))}
            </React.Fragment>
        );
    }
}

Deputados.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Deputados);