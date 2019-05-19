import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import classNames from 'classnames';
import {textTruncate} from "../helpers/helpers";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from "@material-ui/core/TableFooter"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

//TODO Pegar o tamanho que se deve truncar o texto de acordo com o tamnho disponível na janela!!!

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    ementaCell: {
      width: '70%',
      maxWidth: '70%',
      minWidth: '70%',
    },
    ementaText: {
        display: 'inline-block',
        width: '90%',
        transition: 'height 2s',
    },
    ementaTextExpanded: {
        marginTop: theme.spacing.unit,
    },
    expansionButton: {
        padding: '0px 0px',
        width: 37,
        height: 37,
        minWidth: 37,
        minHeight: 37,
    },
});

class TableList extends React.Component {
    state = {
        expandedItems: {},
    };

    handleExpand(id) {
        let expandedItems = this.state.expandedItems;
        expandedItems[id] = true;
        this.setState({expandedItems: expandedItems});
    }

    handleCollapse(id) {
        let expandedItems = this.state.expandedItems;
        expandedItems[id] = false;
        this.setState({expandedItems: expandedItems});    }

    render() {
        const { data, pagination, classes } = this.props;
        const { expandedItems } = this.state;

        return (
            <Table container="true" spacing={16}>
                <TableHead>
                    <TableRow>
                        <TableCell key="h_tipo" align="center">Tipo</TableCell>
                        <TableCell key="h_num" align="center">Numero</TableCell>
                        <TableCell key="h_ano" align="center">Ano</TableCell>
                        <TableCell key="h_ementa" align="center">Ementa</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map( proposta => (
                        <TableRow  key={proposta.id}>
                            <TableCell key="tipo" align="center">
                                {proposta.siglaTipo}
                            </TableCell>
                            <TableCell key="num" align="center">
                                <Link to={'/proposta/'+proposta.id}>
                                    {proposta.numero}
                                </Link>
                            </TableCell>
                            <TableCell key="ano" align="center">
                                {proposta.ano}
                            </TableCell>
                            <TableCell key="ementa" align="center" className={classes.ementaCell}>
                                { !expandedItems[proposta.id]
                                    ? <React.Fragment>
                                        <Typography className={classes.ementaText} component="span" variant="span"
                                                    align="left" color="textSecondary">
                                            {textTruncate(proposta.ementa, 100)}
                                        </Typography>
                                        <IconButton className={classes.expansionButton} onClick={() => this.handleExpand(proposta.id)}>
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </React.Fragment>
                                    : <React.Fragment>
                                        <Typography className={classNames([classes.ementaText, classes.ementaTextExpanded])}
                                                    component="span" variant="span" align="left" color="textSecondary">
                                            {proposta.ementa}
                                        </Typography>
                                        <IconButton className={classes.expansionButton} onClick={() => this.handleCollapse(proposta.id)}>
                                            <ExpandLessIcon />
                                        </IconButton>
                                    </React.Fragment>
                                }


                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        {pagination}
                    </TableRow>
                </TableFooter>
            </Table>
        );
    }
}

TableList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableList);