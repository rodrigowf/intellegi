import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import TablePagination from '@material-ui/core/TablePagination';
import TableList from '../components/TableList';
import TablePaginationActions from '../components/TablePaginationActions';

const API = 'https://dadosabertos.camara.leg.br/api/v2/';
const location = 'proposicoes';

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
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

function getUrlVar(str, param) {
    let value = 0;
    const urlParts = str.split("?");
    const params = urlParts[1].split("&");
    params.forEach((part) => {
        const pair = part.split("=");
        if(pair[0] === param){
            value = pair[1];
        }
    });
    return value;
}

class Propostas extends React.Component {
    state = {
        data: [],
        page: 0,
        rowsPerPage: 15,
        numPages: 0,
        count: 0,
    };

    getDataRequest(page=this.state.page, rowsPerPage=this.state.rowsPerPage){
        let uri = API+location+"?pagina="+(page+1).toString()+"&itens="+rowsPerPage+"&ordem=DESC&ordenarPor=id";
        // console.log(uri);

        fetch(uri)
            .then(response => response.json())
            .then(ret => {
                let data = [];
                const lastPageLink = ret.links[3].href;
                const lastPageNumber = getUrlVar(lastPageLink, 'pagina');
                this.setState({ numPages: lastPageNumber });
                this.setState({ count: lastPageNumber*this.state.rowsPerPage });
                //Get the data --
                Object.values(ret.dados).map((row) => (
                    data.push([row.id, row.uri, row.ano, row.ementa])
                ));
                this.setState({ data: data });
            });
    }

    componentDidMount() {
        this.getDataRequest(this.state.page);
    };

    handleChangePage = (event, page) => {
        this.setState({ page: page });
        this.getDataRequest(page);
    };

    handleChangeRowsPerPage = event => {
        this.setState({ page: 0, rowsPerPage: event.target.value });
        this.getDataRequest(0, event.target.value);
    };


    render() {
        const { classes } = this.props;
        let { data, rowsPerPage, page, count } = this.state;
        // const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                    Propostas de Lei
                </Typography>
                <Paper className={classes.root}>
                    <TableList
                        head={['Id', 'URL', 'Ano', 'Ementa']}
                        data={data}
                        pagination={(
                            <TablePagination
                                rowsPerPageOptions={[15, 25, 35]}
                                colSpan={4}
                                count={count}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    native: true,
                                }}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        )}
                    />
                </Paper>
            </React.Fragment>
        );
    }
}

Propostas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Propostas);