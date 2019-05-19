import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from "@material-ui/core/TableFooter";
import {withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

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
});

function TableList(props) {
    const { data, pagination } = props;
    return (
        <Table container="true" spacing={16}>
            <TableHead>
                <TableRow>
                    <TableCell key="h_num" align="center">Numero</TableCell>
                    <TableCell key="h_tipo" align="center">Tipo</TableCell>
                    <TableCell key="h_ano" align="center">Ano</TableCell>
                    <TableCell key="h_ementa" align="center">Ementa</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map( proposta => (
                    <TableRow  key={proposta.id}>
                        <TableCell key="num" align="center">
                            <Link to={'/proposta/'+proposta.id}>
                                {proposta.numero}
                            </Link>
                        </TableCell>
                        <TableCell key="tipo" align="center">
                            {proposta.siglaTipo}
                        </TableCell>
                        <TableCell key="ano" align="center">
                            {proposta.ano}
                        </TableCell>
                        <TableCell key="ementa" align="center">
                            {proposta.ementa}
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

export default withStyles(styles)(TableList);