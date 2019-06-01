import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import { pdfjs } from 'react-pdf';
import { Document } from 'react-pdf';
import { Page } from 'react-pdf';
import PropTypes from "prop-types";
import Card from "@material-ui/core/es/Card/Card";
import Typography from "@material-ui/core/es/Typography/Typography";
import TablePaginationActions from "../../components/TablePaginationActions";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles =  (theme) => ({
    card: {
        width: 600,
    },
    document: {
        width: 600,
    },
    page: {
        width: 600,
    },
    pagination: {
        marginLeft: 'auto',
        display: 'flex',
    },
    pageCount: {
        display: 'flex',
        margin: theme.spacing(1),
        flexGrow: 1,
    },
    pageCountText: {
        margin: theme.spacing(5)/4,
        marginLeft: 'auto',
    },
    pageActions: {
        display: 'inline-block',
        margin: theme.spacing(1)/2,
        // width: 230,
        flexShrink: 0,
        position: 'relative',
    },
});


class PdfCard extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    };

    handleChangePage = (event, pageNum) => {
        this.setState({ pageNumber: pageNum });
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages:numPages, pageNumber: 1 });
    };

    componentDidMount() {
        console.log(this.props.file);
        // console.log(file);
    }

    render() {
        let { pageNumber, numPages } = this.state;
        const { file, classes } = this.props;

        //TODO Trocar essa string que adiciona um intermediario entre o cliente e o servidor da camara
        // baixando ele pro cliente antes de abrir:
        //      https://stackoverflow.com/questions/44168090/fetch-api-to-force-download-file
        return (
            <Card className={classes.card}>
                <Document
                    file={'https://cors-anywhere.herokuapp.com/'+file}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    externalLinkTarget="_blank"
                    className={classes.document}
                >
                    <Page
                        pageNumber={pageNumber}
                        className={classes.page}
                        width={600} />
                </Document>
                <div className={classes.pagination}>
                    <div className={classes.pageCount}>
                        <Typography
                            component="span"
                            variant="subtitle2"
                            color="textSecondary"
                            className={classes.pageCountText}
                        >
                            Página {pageNumber} de {numPages}
                        </Typography>
                    </div>
                    <div className={classes.pageActions}>
                        <TablePaginationActions
                            onChangePage={this.handleChangePage}
                            count={numPages ? numPages : 0}
                            rowsPerPage={1}
                            page={pageNumber}
                            first={1}
                        />
                    </div>
                </div>
            </Card>
        );
    }
}

PdfCard.propTypes = {
    classes: PropTypes.object.isRequired,
    file: PropTypes.string.isRequired,
};

export default withStyles(styles)(PdfCard);