import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withRouter} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import TablePagination from '@material-ui/core/TablePagination';
import TableList from '../components/TableList';
import TablePaginationActions from '../components/TablePaginationActions';
import Requests from '../helpers/api';
import getUrlVar from '../helpers/helpers';

const apiArea = 'proposicoes';

//TODO Resolver problema que está dando quando vc vem diretamente
// de uma lista específica de alguem para a lista geral e o sistema não percebe q vc já estã na geral

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

class Propostas extends React.Component {
    state = {
        lastLocation: '',

        data: [],
        page: 0,
        rowsPerPage: 15,
        numPages: 0,
        count: 0,

        subarea: '',
        autor: '',
    };

    getDataRequest(page=this.state.page, rowsPerPage=this.state.rowsPerPage){

        let pathname = this.props.location.pathname.split('/');
        const autor = pathname.pop();
        const subarea = pathname.pop();

        console.log(pathname);

        let reqParams = {
            pagina: page+1,
            itens: rowsPerPage,
            ordem: 'DESC',
            ordenarPor: 'id',
        };
        if (subarea === 'autor') {
            reqParams.autor = autor.replace(/\s/g, '%20');
            this.setState({autor:autor});
            this.setState({subarea:'autor'});
        }
        if (subarea === 'partido') {
            reqParams.siglaPartidoAutor = autor.replace(/\s/g, '%20');
            this.setState({autor:autor});
            this.setState({subarea:'partido'});
        }

        Requests.get(apiArea, reqParams).then(ret => {
            if (ret.links[3]) {
                const lastPageLink = ret.links[3].href;
                const lastPageNumber = getUrlVar(lastPageLink, 'pagina');
                this.setState({ numPages: lastPageNumber });
                this.setState({ count: lastPageNumber*this.state.rowsPerPage });
            }
            else {
                this.setState({ numPages: 1 });
            }
            //Get the data --
            this.setState({ data: Object.values(ret.dados) });
        });
    }

    componentDidMount() {
        this.getDataRequest();

        this.props.history.listen((location) => {
            // location is an object like window.location
            console.log(location.pathname);
            if (location.pathname === '/propostas') {
                this.setState({lastLocation:location});
                this.setState({data:[]});
                this.setState({autor:''});
                this.setState({subarea:''});
                this.getDataRequest();
            }
        });
    };

    handleChangePage = (event, page) => {
        this.setState({ page: page });
        this.getDataRequest(page);
    };

    handleChangeRowsPerPage = event => {
        this.setState({ page: 0, rowsPerPage: parseInt(event.target.value) });
        this.getDataRequest(0, event.target.value);
    };


    render() {
        // const { classes } = this.props;
        let { data, rowsPerPage, page, count, autor, subarea } = this.state;
        // const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                    Propostas de Lei
                </Typography>
                {autor !== '' &&
                    <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                        {(subarea === 'partido') && 'Partido'} Autor: {autor}
                    </Typography>
                }
                <Paper> {/*className={classes.root}*/}
                    <TableList
                        data={data}
                        pagination={(
                            <TablePagination
                                rowsPerPageOptions={[15, 25, 35]}
                                colSpan={3}
                                count={count}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{native: true}}
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
    // classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Propostas));