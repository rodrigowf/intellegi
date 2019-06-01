import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import Expandable from '../components/Expandable';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from "@material-ui/core/TableFooter";

//TODO Pegar o tamanho que se deve truncar o texto de acordo com o tamnho disponível na janela!!!

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
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
});

function TableList (props) {
    const { data, pagination, classes, drawerOpen } = props;

    return (
        <Table container="true" spacing={1}>
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
                            <Expandable ementa={proposta.ementa} drawerOpen={drawerOpen}/>
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

TableList.propTypes = {
    classes: PropTypes.object.isRequired,
    drawerOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(TableList);