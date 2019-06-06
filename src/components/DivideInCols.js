import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

class DivideInCols extends React.Component {
    state = {
        dataSepareted: [],
        spacing:16, //TODO calcular esses valores na montagem
        xs: 6
    };

    //TODO preparar JSON dos partidos para pegar os dados que estão separados aqui (para exibir no Card)

    separateData = () => {
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
    };

    componentDidMount(){
        this.separateData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Testa se a propriedade que mudou foi a "data"
        if(prevProps.data !== this.props.data) {
            this.separateData();
        }
    }

    render() {
        const { dataSepareted, spacing, xs } = this.state;
        const { children } = this.props;

        return (
            <Grid container spacing={spacing}>
                {dataSepareted.map((col, indCol) => (
                    <Grid item key={indCol} xs={xs}>
                        {col.map( function (item, indItem) {
                            return React.createElement( children, { data: item, key: indItem });
                        })}
                    </Grid>
                ))}
            </Grid>
        );
    }
}

DivideInCols.propTypes = {
    data: PropTypes.array.isRequired,
    children: PropTypes.elementType.isRequired,
    numCols: PropTypes.number.isRequired,
};

export default DivideInCols;