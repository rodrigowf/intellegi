import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import Card from "@material-ui/core/es/Card/Card";

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
        margin: theme.spacing.unit,
        flexGrow: 1,
    },
    pageCountText: {
        margin: theme.spacing.unit*5/4,
        marginLeft: 'auto',
    },
    pageActions: {
        display: 'inline-block',
        margin: theme.spacing.unit/2,
        // width: 230,
        flexShrink: 0,
        position: 'relative',
    },
});


class Timeline extends Component {
    state = {
    };

    componentDidMount() {

    }

    render() {
        // let { statusList } = this.state;
        const { classes } = this.props;

        //TODO Trocar essa string que adiciona um intermediario entre o cliente e o servidor da camara
        // baixando ele pro cliente antes de abrir:
        //      https://stackoverflow.com/questions/44168090/fetch-api-to-force-download-file
        return (
            <Card className={classes.card}>
                
            </Card>
        );
    }
}

Timeline.propTypes = {
    classes: PropTypes.object.isRequired,
    currentStatus: PropTypes.string.isRequired,
};

export default withStyles(styles)(Timeline);