import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

class DivideInCols extends React.Component {
    state = {
        dataSepareted: [],
        spacing:16,
        xs: 6
    };

    //TODO preparar JSON dos partidos para pegar os dados que estão separados aqui (para exibir no Card)

    componentDidMount(){
        let dataSep = [];
        let i = 0;
        while(i < this.props.numCols) {
            dataSep[i] = [];
            i++;
        }
        this.props.data.forEach((item, index) => {
            dataSep[index % this.props.numCols].push(item)
        });
        this.setState({ dataSepareted: dataSep });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Testa se a propriedade que mudou foi a "searchFilter"
        if(prevProps.data !== this.props.data) {
            let dataSep = [];
            let i = 0;
            while(i < this.props.numCols) {
                dataSep[i] = [];
                i++;
            }
            this.props.data.forEach((item, index) => {
                dataSep[index % this.props.numCols].push(item)
            });
            this.setState({ dataSepareted: dataSep });
        }
    }

    render() {
        const { dataSepareted, spacing, xs } = this.state;
        const { children } = this.props;

        return (
            <Grid container spacing={spacing}>
                {dataSepareted.map((col, indCol) => (
                    <Grid item key={indCol} xs={xs}>
                        {col.map( function (item) {
                            return React.createElement( children, { data: item, key: indCol });
                        })}
                    </Grid>
                ))}
            </Grid>
        );
    }
}

DivideInCols.propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    numCols: PropTypes.number.isRequired,
};

export default DivideInCols;