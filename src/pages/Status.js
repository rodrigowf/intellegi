import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import yellow from '@material-ui/core/colors/yellow';
import brown from '@material-ui/core/colors/brown';
import purple from '@material-ui/core/colors/purple';

import ListIcon from @material-ui/icons/List;
import AccountBalanceIcon from @material-ui/icons/AccountBalance;
import GavelIcon from @material-ui/icons/Gavel;
import PregnantWomanIcon from @material-ui/icons/PregnantWoman;
import LocalFloristIcon from @material-ui/icons/LocalFlorist;
import PhonelinkIcon from @material-ui/icons/Phonelink;
import HearingIcon from @material-ui/icons/Hearing;
import LocationCityIcon from @material-ui/icons/LocationCity;
import PeopleIcon from @material-ui/icons/People;
import TrendingUpIcon from @material-ui/icons/TrendingUp;
import SchoolIcon from @material-ui/icons/School;
import AttachMoneyIcon from @material-ui/icons/AttachMoney;
import MonetizationOnIcon from @material-ui/icons/MonetizationOn;
import FlashOnIcon from @material-ui/icons/FlashOn;
import HomeIcon from @material-ui/icons/Home;
import AccessibleIcon from @material-ui/icons/Accessible;
import PoolIcon from @material-ui/icons/Pool;
import LocalLibraryIcon from @material-ui/icons/LocalLibrary;
import NaturePeopleIcon from @material-ui/icons/NaturePeople;
import WorkIcon from @material-ui/icons/Work;
import SecurityIcon from @material-ui/icons/Security;
import GroupAddIcon from @material-ui/icons/GroupAdd;
import VpnLockIcon from @material-ui/icons/VpnLock;
import DeviceHubIcon from @material-ui/icons/DeviceHub;
import DirectionsBusIcon from @material-ui/icons/DirectionsBus;
import BuildIcon from @material-ui/icons/Build;
// import FlagIcon from @material-ui/icons/Flag
// import DonutIcon from @material-ui/icons/DonutLarge


const status = [
            {
                cod: 900,
                nome: "Aguardando Autógrafos na Mesa",
            },
            {
                cod: 901,
                nome: "Aguardando Constituição de Comissão Temporária ",
            },
            {
                cod: 902,
                nome: "Aguardando Criação de Comissão Temporária",
            },
            {
                cod: 903,
                nome: "Aguardando Deliberação",
            },
            {
                cod: 904,
                nome: "Aguardando Deliberação de Recurso",
            },
            {
                cod: 905,
                nome: "Aguardando Despacho do Presidente da Câmara dos Deputados",
            },
            {
                cod: 906,
                nome: "Aguardando Distribuição",
            },
            {
                cod: 907,
                nome: "Aguardando Designação de Relator",
            },
            {
                cod: 910,
                nome: "Aguardando Encaminhamento",
            },
            {
                cod: 911,
                nome: "Aguardando Instalação de Comissão Temporária",
            },
            {
                cod: 912,
                nome: "Aguardando Leitura e Publicação",
            },
            {
                cod: 914,
                nome: "Aguardando Originais para Envio ao Arquivo",
            },
            {
                cod: 915,
                nome: "Aguardando Parecer",
            },
            {
                cod: 917,
                nome: "Aguardando Recebimento",
            },
            {
                cod: 918,
                nome: "Aguardando Recurso",
            },
            {
                cod: 920,
                nome: "Aguardando Deliberação do Presidente",
            },
            {
                cod: 921,
                nome: "Aguardando Resposta ",
            },
            {
                cod: 922,
                nome: "Aguardando Vistas",
            },
            {
                cod: 923,
                nome: "Arquivada",
            },
            {
                cod: 924,
                nome: "Pronta para Pauta",
            },
            {
                cod: 925,
                nome: "Tramitando em Conjunto",
            },
            {
                cod: 926,
                nome: "Aguardando Apreciação pelo Senado Federal",
            },
            {
                cod: 927,
                nome: "Aguardando Apensação",
            },
            {
                cod: 928,
                nome: "Aguardando Análise de Parecer",
            },
            {
                cod: 929,
                nome: "Aguardando Redação Final",
            },
            {
                cod: 930,
                nome: "Enviada ao Arquivo",
            },
            {
                cod: 931,
                nome: "Aguardando Remessa ao Arquivo",
            },
            {
                cod: 932,
                nome: "Aguardando Definição Encaminhamento",
            },
            {
                cod: 933,
                nome: "Aguardando Conhecimento",
            },
            {
                cod: 934,
                nome: "Aguardando despacho de Emenda",
            },
            {
                cod: 935,
                nome: "Aguardando despacho de Substitutivo",
            },
            {
                cod: 936,
                nome: "Aguardando Providências Internas",
            },
            {
                cod: 937,
                nome: "Vetado totalmente",
            },
            {
                cod: 939,
                nome: "Aguardando Apreciação do Veto",
            },
            {
                cod: 940,
                nome: "Aguardando Despacho de Arquivamento ",
            },
            {
                cod: 950,
                nome: "Retirado pelo Autor",
            },
            {
                cod: 1000,
                nome: "Aguardando Recebimento para Publicação - Relatadas",
            },
            {
                cod: 1010,
                nome: "Aguardando Informações do DCD - Novas",
            },
            {
                cod: 1020,
                nome: "Aguardando Encaminhamento à Publicação",
            },
            {
                cod: 1030,
                nome: "Aguardando Informações do DCD - Relatadas",
            },
            {
                cod: 1040,
                nome: "Aguardando Encaminhamento à CCP para Publicação",
            },
            {
                cod: 1050,
                nome: "Aguardando análise de prazo recursal",
            },
            {
                cod: 1052,
                nome: "Aguardando Abertura de Prazo para Recurso",
            },
            {
                cod: 1060,
                nome: "Encaminhada à Publicação",
            },
            {
                cod: 1070,
                nome: "Aguardando Envio ao Executivo",
            },
            {
                cod: 1080,
                nome: "Aguardando Recebimento para Publicação - Novas",
            },
            {
                cod: 1090,
                nome: "Aguardando Análise",
            },
            {
                cod: 1110,
                nome: "Aguardando Despacho do Presidente",
            },
            {
                cod: 1120,
                nome: "Devolvida ao Autor",
            },
            {
                cod: 1140,
                nome: "Transformado em Norma Jurídica",
            },
            {
                cod: 1150,
                nome: "Aguardando Sanção",
            },
            {
                cod: 1160,
                nome: "Aguardando Remessa à Sanção",
            },
            {
                cod: 1161,
                nome: "Outros",
            },
            {
                cod: 1170,
                nome: "Aguardando Designação - Aguardando Devolução de Relator que deixou de ser Membro",
            },
            {
                cod: 1180,
                nome: "Aguardando Apoiamento",
            },
            {
                cod: 1200,
                nome: "Aguardando Autorização do Despacho",
            },
            {
                cod: 1230,
                nome: "Transformado em nova proposição",
            },
            {
                cod: 1250,
                nome: "Inativa Sinopse (Carga Jan/2001)",
            },
            {
                cod: 1260,
                nome: "Desmembrada ",
            },
            {
                cod: 1270,
                nome: "Aguardando Envio à Redação Final",
            },
            {
                cod: 1280,
                nome: "Comissão em funcionamento",
            },
            {
                cod: 1285,
                nome: "Tramitação do Requerimento Finalizada",
            },
            {
                cod: 1290,
                nome: "Aguardando Indexação",
            },
            {
                cod: 1291,
                nome: "Aguardando Indexação (Substituição de Versão)",
            },
            {
                cod: 1292,
                nome: "Perdeu a Eficácia",
            },
            {
                cod: 1293,
                nome: "Aguardando Envio ao Senado Federal",
            },
            {
                cod: 1294,
                nome: "Aguardando Promulgação",
            },
            {
                cod: 1295,
                nome: "Aguardando Refornulação de Parecer",
            },
            {
                cod: 1296,
                nome: "Aguardando Eleição do Presidente da Comissão Especial e do Relator",
            },
            {
                cod: 1297,
                nome: "Aguardando Parecer da Comissão Especial",
            },
            {
                cod: 1298,
                nome: "Aguardando Manifestação do(a)(s) Acusado(o)(s)",
            },
            {
                cod: 1299,
                nome: "Enviada ao Congresso Nacional",
            },
            {
                cod: 1300,
                nome: "Aguardando Leitura do Parecer da Comissão Especial",
            },
            {
                cod: 1301,
                nome: "Aguardando Interstício Regimental",
            },
            {
                cod: 1302,
                nome: "Aguardando Publicação",
            },
            {
                cod: 1303,
                nome: "Enviada ao Senado Federal",
            },
            {
                cod: 1304,
                nome: "Aguardando Solicitação de Relatoria na CMO",
            },
            {
                cod: 1305,
                nome: "Enviada ao TCU",
            },
            {
                cod: 1310,
                nome: "Em tramitação no Conselho de Ética",
            },
            {
                cod: 1311,
                nome: "Não Definido",
            }

            ];

export default status