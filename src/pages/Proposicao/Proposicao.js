import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import Requests from "../../helpers/api";
import PdfCard from "./PdfCard";

import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/es/Card/Card";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";

const apiArea = 'proposicoes';

const styles =  (theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing.unit*2,
        },
        gutterBottom: {
            marginBottom: theme.spacing.unit*2,
        },
        card: {
            display: 'flex',
            width: 312,
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 70,
        },
});

class Proposicao extends React.Component {
    state = {
        proposicao: {},
        autores: [],
    };

    getDataRequest() {
        let pathname = this.props.location.pathname.split('/');
        const id = pathname.pop();

        let url = apiArea + '/' + id;

        Requests.get(url).then(ret_prop => { // Pega dados da proposicao selecionada
            if (ret_prop.dados) {
                let proposicao = ret_prop.dados;
                fetch(proposicao.uriAutores).then(response => response.json())
                    .then(ret_autores => { // Pega lista de autores da proposicao
                        if (ret_autores.dados)
                        {
                            let autores = [];
                            Object.values(ret_autores.dados).forEach((autor) => { // FOR para cada autor
                                autor.urlFoto =
                                    autor.uri
                                        ? 'https://www.camara.leg.br/internet/deputado/bandep/'+autor.uri.split('/').pop()+'.jpg'
                                        : null;
                                autores.push(autor);
                            });
                            this.setState({autores:ret_autores.dados});
                        } else {
                            console.log('Erro, dados sobre autores não recebidos!');
                        }
                    });
                this.setState({proposicao: proposicao})
            } else {
                console.log('Erro, dados não recebidos!');
            }
        });
    }

    componentDidMount(){
        this.getDataRequest();
    }

    render() {
        const { classes } = this.props;
        let { proposicao, autores } = this.state;

        console.log(proposicao.urlInteiroTeor);

        return (
            <React.Fragment>
                <div className={classes.gutterBottom}>
                    <Typography component="h1" variant="h3" align="left" color="textSecondary" gutterBottom>
                        {proposicao.siglaTipo} {proposicao.numero}
                    </Typography>
                    <Typography component="h4" variant="h5" align="left" color="textPrimary">
                        Ementa:
                    </Typography>
                    <Typography component="p" variant="subtitle1" align="left" color="textSecondary" gutterBottom>
                        {proposicao.ementa}
                    </Typography>
                    <Typography component="h4" variant="h5" align="left" color="textPrimary">
                        Data de Apresentação:
                    </Typography>
                    <Typography component="p" variant="subtitle1" align="left" color="textSecondary" gutterBottom>
                        {proposicao.dataApresentacao}
                    </Typography>
                </div>

                {(autores[0] !== undefined) ? autores.map((autor, index) => (
                    <Card key={index} className={classNames([classes.card, classes.gutterBottom])}>
                        {console.log(autor)}
                        <CardMedia
                            className={classes.cover}
                            title="Foto do Deputado"
                            image={autor.urlFoto}/>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {autor.nome}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {autor.tipo}
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                )) : ''}
                {proposicao.urlInteiroTeor ?
                    <PdfCard file={proposicao.urlInteiroTeor} className={classes.gutterBottom}/>
                : ''}

            </React.Fragment>
        );
    }
}

Proposicao.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Proposicao);