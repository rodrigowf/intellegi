import React, { Component } from 'react';
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf';
import PropTypes from "prop-types";
import Card from "@material-ui/core/es/Card/Card";
import Typography from "@material-ui/core/es/Typography/Typography";

class PdfCard extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    componentDidMount() {
        console.log(this.props.file);
        fetch(this.props.file, {mode: 'no-cors'}).then((file) => {
            console.log(file.body);
            this.setState({file: file.body})
        });
    }

    render() {
        let { file, pageNumber, numPages } = this.state;
        // const { file } = this.props;

        return (
            <Card>
                <Document
                    file={file}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    externalLinkTarget="_blank"
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <Typography component="p" variant="subtitle2" color="textSecondary">Page {pageNumber} of {numPages}</Typography>
            </Card>
        );
    }
}

PdfCard.propTypes = {
    file: PropTypes.string.isRequired,
};

export default PdfCard;