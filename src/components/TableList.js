import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import {withStyles} from "@material-ui/core";

function TableList(props) {
    const { head, data } = props;
    return (
        <Table container spacing={16}>
            <TableHead>
                <TableRow>
                    {head.map( (name) => (
                        <TableCell align="center">{name}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(row => (
                    <TableRow key={row.id}>
                        {row.map( data => (
                            <TableCell component="th" scope="row" align="center">
                                {data}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TableList;