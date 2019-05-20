import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import {textTruncate} from "../helpers/helpers";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
    ementaText: {
        display: 'inline-block',
        width: '86%',
        transition: 'height 2s',
        [theme.breakpoints.down('sm')]: {
            width: '78%',
        },
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
        color: grey[400],
    },
    div: {
        width:'100%',

        [theme.breakpoints.down('md')]: {
            marginLeft: -10,
            width: '110%',
        },

    },
});

class Expandable extends React.Component {
    state = {
        width: 80,
        widthNoDrawer: 80,
        expanded: false,
        needExpansion: false,
        numChars: 90,
    };

    constructor(props){
        super(props);
        this.myInput = React.createRef();
    }

    componentDidMount () {
        this.updateDimensions(this.props.drawerOpen);
        this.setState({
            width: this.myInput.current.offsetWidth,
            widthNoDrawer: this.myInput.current.offsetWidth,
        });
        window.addEventListener("resize", () => this.updateDimensions(false));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.drawerOpen !== prevProps.drawerOpen){
            this.updateDimensions(true);
        }
    }

    updateDimensions = (drawer = false) => {
        let width = this.myInput.current.offsetWidth;

        if(drawer) {
            width = !this.props.drawerOpen
                ? this.state.widthNoDrawer
                : this.state.widthNoDrawer - 160;
        } else {
            this.setState({
                widthNoDrawer: this.props.drawerOpen
                    ? width + 160
                    : width
            });
        }

        console.log('drawer =  '+drawer);
        console.log('open = '+this.props.drawerOpen);
        console.log(width);
        console.log(this.myInput.current.offsetWidth);

        let numChars = (width < 430) ? width/7.3 : width/6.5;
        let needExpansion = (this.props.ementa.length > numChars);

        this.setState({ width: width, needExpansion: needExpansion, numChars: numChars });

        console.log('atualizando dimensões!!!');

        // console.log(this.props.ementa.length+' -> '+(this.myInput.current.offsetWidth / 6.25));
    };

    toggleExpand = () => {
        if (this.state.expanded) {
            this.setState({expanded: false});
        } else {
            this.setState({expanded: true});
        }
    };

    render() {
        const { ementa, classes } = this.props;
        const { expanded, needExpansion, numChars } = this.state;

        return (
            <div ref={this.myInput} className={classes.div}>
                <Typography
                    className={ (!expanded || !needExpansion)
                        ? classes.ementaText
                        : classNames([classes.ementaText, classes.ementaTextExpanded])
                    }
                    component="span" variant="caption" align="left" color="textSecondary"
                >
                    {(needExpansion && !expanded)
                        ? textTruncate(ementa, numChars)
                        : ementa
                    }
                </Typography>
                    <IconButton className={classes.expansionButton} onClick={this.toggleExpand}>
                        {needExpansion ? (expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />) : ' '}
                    </IconButton>
            </div>
        );
    }
}

Expandable.propTypes = {
    classes: PropTypes.object.isRequired,
    ementa: PropTypes.string.isRequired,
    drawerOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Expandable);