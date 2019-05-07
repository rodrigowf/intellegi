import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import getDataRequest from '../helpers/api';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import pink from '@material-ui/core/colors/pink';
import brown from '@material-ui/core/colors/brown';
import purple from '@material-ui/core/colors/purple';

import ListIcon from "@material-ui/icons/List";
import * as colorpicker from "random-material-color";

//const colorpicker = color => randomMC(getColor);
const apiArea = 'orgaos';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    fab: {
        width: 65,
        height: 65,
    },
    fabContent: {
        display:'block',
        width: "100%",
        alignItems: 'center',
        textAlign: 'center',
    },
});

const comissoes = [
    {
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },

    {
        id: 4,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/4",
        sigla: "MESA",
        nome: "Mesa Diretora da Câmara dos Deputados",
        apelido: "Mesa Diretora",
        codTipoOrgao: 1,
        tipoOrgao: "Comissão Diretora",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 180,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/180",
        sigla:"PLEN",
        nome: "PLENÁRIO",
        apelido: "PLEN",
        codTipoOrgao: 1,
        tipoOrgao: "Comissão Diretora",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2001,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2001",
        sigla:" CAPADR",
        nome: "Comissão de Agricultura, Pecuária, Abastecimento e Desenvolvimento Rural",
        apelido: "AGRICULTURA, PECUÁRIA, ABASTECIMENTO DESENV. RURAL",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2002,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2002",
        sigla:" CCTCI",
        nome: "Comissão de Ciência e Tecnologia, Comunicação e Informática",
        apelido: "CIÊNCIA E TECNOLOGIA, COMUNICAÇÃO E INFORMÁTICA",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2003,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2003",
        sigla:" CCJC",
        nome: "Comissão de Constituição e Justiça e de Cidadania",
        apelido: "CONSTITUIÇÃO E JUSTIÇA E DE CIDADANIA",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2004,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2004",
        sigla:" CDC",
        nome: "Comissão de Defesa do Consumidor",
        apelido: "DEFESA DO CONSUMIDOR",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2006,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2006",
        sigla:" CDU",
        nome: "Comissão de Desenvolvimento Urbano",
        apelido: "DESENVOLVIMENTO URBANO",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2007,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2007",
        sigla:" CDHM",
        nome: "Comissão de Direitos Humanos e Minorias",
        apelido: "DIREITOS HUMANOS E MINORIAS",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2008,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2008",
        sigla:" CDEICS",
        nome: "Comissão de Desenvolvimento Econômico, Indústria, Comércio e Serviços",
        apelido: "DESENVOLV. ECONÔMICO, INDÚSTRIA, COMÉRCIO E SERV.",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2009,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2009",
        sigla:" CE",
        nome: "Comissão de Educação",
        apelido: "EDUCAÇÃO",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2010,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2010",
        sigla:" CFT",
        nome: "Comissão de Finanças e Tributação",
        apelido: "FINANÇAS E TRIBUTAÇÃO",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2011,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2011",
        sigla:" CFFC",
        nome: "Comissão de Fiscalização Financeira e Controle",
        apelido: "FISCALIZAÇÃO FINANCEIRA E CONTROLE",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2012,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2012",
        sigla:" CME",
        nome: "Comissão de Minas e Energia",
        apelido: "MINAS E ENERGIA",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2014,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2014",
        sigla:" CSSF",
        nome: "Comissão de Seguridade Social e Família",
        apelido: "SEGURIDADE SOCIAL E FAMÍLIA",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2015,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2015",
        sigla:" CTASP",
        nome: "Comissão de Trabalho, de Administração e Serviço Público",
        apelido: "TRABALHO, ADMINISTRAÇÃO E SERVIÇO PÚBLICO",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2016,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2016",
        sigla:" CVT",
        nome: "Comissão de Viação e Transportes",
        apelido: "VIAÇÃO E TRANSPORTES",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2017,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2017",
        sigla:" CINDRA",
        nome: "Comissão de Integração Nacional, Desenvolvimento Regional e da Amazônia",
        apelido: "INTEGRAÇÃO NACIONAL, DESENV. REGIONAL E AMAZÔNIA",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 2018,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/2018",
        sigla:" CREDN",
        nome: "Comissão de Relações Exteriores e de Defesa Nacional",
        apelido: "RELAÇÕES EXTERIORES E DE DEFESA NACIONAL",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 5438,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/5438",
        sigla:" CLP",
        nome: "Comissão de Legislação Participativa",
        apelido: "LEGISLAÇÃO PARTICIPATIVA",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 5503,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/5503",
        sigla:" CSPCCO",
        nome: "Comissão de Segurança Pública e Combate ao Crime Organizado",
        apelido: "SEGURANÇA PÚBLICA E COMBATE AO CRIME ORGANIZADO",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 6066,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/6066",
        sigla:" CTUR",
        nome: "Comissão de Turismo",
        apelido: "TURISMO",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 6174,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/6174",
        sigla:" CMADS",
        nome: "Comissão de Meio Ambiente e Desenvolvimento Sustentável",
        apelido: "MEIO AMBIENTE E DESENVOLVIMENTO SUSTENTÁVEL",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 536996,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/536996",
        sigla:" CCULT",
        nome: "Comissão de Cultura",
        apelido: "CULTURA",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 537236,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/537236",
        sigla:" CESPO",
        nome: "Comissão do { Esporte",
        apelido: "ESPORTE",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 537480,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/537480",
        sigla:" CPD",
        nome: "Comissão de Defesa dos Direitos das Pessoas com Deficiência",
        apelido: "DEFESA DOS DIREITOS DAS PESSOAS COM DEFICIÊNCIA",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 537870,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/537870",
        sigla:" CMULHER",
        nome: "Comissão de Defesa dos Direitos da Mulher",
        apelido: "DEFESA DOS DIREITOS DA MULHER",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    },
    {
        id: 537871,
        uri: "https://dadosabertos.camara.leg.br/api/v2/orgaos/537871",
        sigla: " CIDOSO",
        nome: "Comissão de Defesa dos Direitos da Pessoa Idosa",
        apelido: "DEFESA DOS DIREITOS DA PESSOA IDOSA",
        codTipoOrgao: 2,
        tipoOrgao: "Comissão Permanente",
        icon: ListIcon,
        title: "ABC",
        color: blue[300],
        route: '',
    }
];

class Comissoes extends React.Component {
    state = {
        data: [],
        page: 0,
        itemsPerPage: 1000,
    };

    getDataRequest(page=this.state.page, itensPerPage=this.state.itemsPerPage) {
        getDataRequest(apiArea, page, itensPerPage)
            .then(data => {
                this.setState({ data: data.dados });
                console.log(data)
            });
    }

    componentDidMount() {
        this.getDataRequest();
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                    Comissões
                </Typography>
                {comissoes.map((item, index) => (
                    <Fab component={Link} to={item.route} key={index} style={{backgroundColor:colorpicker.getColor()}} aria-label={item.title} className={classNames(classes.fab, classes.margin)}>
                        <div className={classes.fabContent}>
                            {React.createElement( item.icon, {fontSize: "medium"})}
                            <Typography color="inherit" component="p" variant="inherit">
                                {item.sigla}
                            </Typography>
                        </div>
                    </Fab>
                ))}
            </React.Fragment>
        );
    }
}

Comissoes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comissoes);