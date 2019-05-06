import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from "@material-ui/core/TableFooter";
import {withStyles} from "@material-ui/core";

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
    const { head, data, pagination } = props;
    return (
        <Table container="true" spacing={16}>
            <TableHead>
                <TableRow>
                    {head.map( (name, index) => (
                        <TableCell key={'h-c'+index} align="center">{name}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map( row => (
                    <TableRow key={row[0]}>
                        {row.map( (data, indexCol) => (
                            <TableCell key={'b-r'+row[0]+'c'+indexCol} align="center">
                                {data}
                            </TableCell>
                        ))}
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