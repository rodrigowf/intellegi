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
                cod: 5,
                sigla: "",
                nome: "Não Informado",
                descricao: ""
            },
            {
                cod: 100,
                sigla: "",
                nome: "Apresentação de Proposição",
                descricao: "" ,
                tipoTramitacao:"apresentacao",
                stage: 1
            },
            {
                cod: 104,
                sigla: "",
                nome: "Desapensação",
                descricao: ""
            },
            {
                cod: 105,
                sigla: "",
                nome: "Leitura e publicação",
                descricao: ""
            },
            {
                cod: 106,
                sigla: "",
                nome: "Apensação",
                descricao: ""
            },
            {
                cod: 107,
                sigla: "",
                nome: "Não Apensação",
                descricao: ""
            },
            {
                cod: 110,
                sigla: "",
                nome: "Distribuição ",
                descricao: "",
                tipoTramitacao:"apresentacao",
                stage: 2
            },
            {
                cod: 112,
                sigla: "",
                nome: "Redistribuição ",
                descricao: ""
            },
            {
                cod: 113,
                sigla: "",
                nome: "Envio para a redação Final",
                descricao: ""
            },
            {
                cod: 115,
                sigla: "",
                nome: "Declarada insubsistência",
                descricao: ""
            },
            {
                cod: 120,
                sigla: "",
                nome: "Criação de Comissão Temporária",
                descricao: ""
            },
            {
                cod: 121,
                sigla: "",
                nome: "Constituição de Comissão Temporária",
                descricao: ""
            },
            {
                cod: 122,
                sigla: "",
                nome: "Instalação de Comissão",
                descricao: ""
            },
            {
                cod: 125,
                sigla: "",
                nome: "Despacho à CCJR - Redação Final",
                descricao: ""
            },
            {
                cod: 126,
                sigla: "",
                nome: "Despacho à Promulgação",
                descricao: ""
            },
            {
                cod: 127,
                sigla: "",
                nome: "Despacho à Sanção",
                descricao: ""
            },
            {
                cod: 128,
                sigla: "",
                nome: "Remessa ao Senado Federal",
                descricao: ""
            },
            {
                cod: 129,
                sigla: "",
                nome: "Despacho de Apensação ",
                descricao: ""
            },
            {
                cod: 130,
                sigla: "",
                nome: "Despacho de Desapensação ",
                descricao: ""
            },
            {
                cod: 131,
                sigla: "",
                nome: "Despacho de sujeita a Arquivamento",
                descricao: ""
            },
            {
                cod: 132,
                sigla: "",
                nome: "Despacho de sujeita a Devolução",
                descricao: ""
            },
            {
                cod: 133,
                sigla: "",
                nome: "Devolução ao autor",
                descricao: ""
            },
            {
                cod: 134,
                sigla: "",
                nome: "Despacho de Arquivamento",
                descricao: ""
            },
            {
                cod: 135,
                sigla: "",
                nome: "Despacho de Desarquivamento",
                descricao: ""
            },
            {
                cod: 137,
                sigla: "",
                nome: "Remessa à Presidência da República",
                descricao: ""
            },
            {
                cod: 138,
                sigla: "",
                nome: "Remessa a Ministério",
                descricao: ""
            },
            {
                cod: 139,
                sigla: "",
                nome: "Despacho de Não Acolhimento",
                descricao: ""
            },
            {
                cod: 140,
                sigla: "",
                nome: "Desarquivamento - Errata",
                descricao: ""
            },
            {
                cod: 150,
                sigla: "",
                nome: "Inclusão em Pauta",
                descricao: ""
            },
            {
                cod: 151,
                sigla: "",
                nome: "Inclusão de Urgência em Pauta",
                descricao: ""
            },
            {
                cod: 161,
                sigla: "",
                nome: "Recebimento na Mesa solicitando resposta",
                descricao: ""
            },
            {
                cod: 162,
                sigla: "",
                nome: "Recebimento de Resposta",
                descricao: ""
            },
            {
                cod: 170,
                sigla: "",
                nome: "Devolução ao Relator",
                descricao: ""
            },
            {
                cod: 171,
                sigla: "",
                nome: "Devolução à Mesa para Novo Despacho",
                descricao: ""
            },
            {
                cod: 180,
                sigla: "",
                nome: "Encaminhamento",
                descricao: ""
            },
            {
                cod: 181,
                sigla: "",
                nome: "Encaminhamento - art. 52, § 6º do RICD",
                descricao: ""
            },
            {
                cod: 191,
                sigla: "",
                nome: "Aprovação de Recurso",
                descricao: ""
            },
            {
                cod: 192,
                sigla: "",
                nome: "Apresentação de Recurso",
                descricao: ""
            },
            {
                cod: 193,
                sigla: "",
                nome: "Rejeição de Recurso",
                descricao: ""
            },
            {
                cod: 194,
                sigla: "",
                nome: "Apresentação de Requerimento",
                descricao: ""
            },
            {
                cod: 195,
                sigla: "",
                nome: "Aprovação de Requerimento",
                descricao: ""
            },
            {
                cod: 196,
                sigla: "",
                nome: "Aprovação de Urgência (154, 155 ou 64 CF)",
                descricao: ""
            },
            {
                cod: 197,
                sigla: "",
                nome: "Rejeição de Proposicao",
                descricao: ""
            },
            {
                cod: 198,
                sigla: "",
                nome: "Prejudicado",
                descricao: ""
            },
            {
                cod: 199,
                sigla: "",
                nome: "Providência Interna",
                descricao: ""
            },
            {
                cod: 200,
                sigla: "",
                nome: "Retirada pelo Autor",
                descricao: ""
            },
            {
                cod: 201,
                sigla: "",
                nome: "Proposição Devolvida ao Autor",
                descricao: ""
            },
            {
                cod: 203,
                sigla: "",
                nome: "Notificação de Despacho",
                descricao: ""
            },
            {
                cod: 210,
                sigla: "",
                nome: "Leitura de Parecer em substituição à Comissão",
                descricao: ""
            },
            {
                cod: 211,
                sigla: "",
                nome: "Leitura e publicação da Redação Final",
                descricao: ""
            },
            {
                cod: 214,
                sigla: "",
                nome: "Leitura e publicação de Parecer favorável de admissibilidade de PEC",
                descricao: ""
            },
            {
                cod: 215,
                sigla: "",
                nome: "Leitura e publicação do Parecer - Urgência (154,155 ou 64 CF)",
                descricao: ""
            },
            {
                cod: 216,
                sigla: "",
                nome: "Discussão",
                descricao: ""
            },
            {
                cod: 219,
                sigla: "",
                nome: "Encaminhamento da Votação",
                descricao: ""
            },
            {
                cod: 220,
                sigla: "",
                nome: "Discussão (Inicio e Continuacao)",
                descricao: ""
            },
            {
                cod: 221,
                sigla: "",
                nome: "Adiamento de Discussão",
                descricao: ""
            },
            {
                cod: 222,
                sigla: "",
                nome: "Discussão (Plenário)",
                descricao: ""
            },
            {
                cod: 223,
                sigla: "",
                nome: "Obstrução Discussão (Plenário)",
                descricao: ""
            },
            {
                cod: 226,
                sigla: "",
                nome: "Recebimento de Emenda de Plenário",
                descricao: ""
            },
            {
                cod: 227,
                sigla: "",
                nome: "Encerramento de Discussão",
                descricao: ""
            },
            {
                cod: 231,
                sigla: "",
                nome: "Votação",
                descricao: ""
            },
            {
                cod: 232,
                sigla: "",
                nome: "Votação em 1º turno",
                descricao: ""
            },
            {
                cod: 233,
                sigla: "",
                nome: "Votação em 2º turno",
                descricao: ""
            },
            {
                cod: 234,
                sigla: "",
                nome: "Adiamento de Votação",
                descricao: ""
            },
            {
                cod: 237,
                sigla: "",
                nome: "Aprovação em 1º turno",
                descricao: ""
            },
            {
                cod: 238,
                sigla: "",
                nome: "Aprovação em 1º turno - com redação",
                descricao: ""
            },
            {
                cod: 239,
                sigla: "",
                nome: "Aprovação da Redação Final",
                descricao: ""
            },
            {
                cod: 240,
                sigla: "",
                nome: "Aprovação",
                descricao: "",
                tipoTramitacao:"comissao",
                stage: 4
            },
            {
                cod: 241,
                sigla: "",
                nome: "Aprovação de Proposição Interna",
                descricao: ""
            },
            {
                cod: 242,
                sigla: "",
                nome: "Discussão da Materia pelos Deputados",
                descricao: ""
            },
            {
                cod: 244,
                sigla: "",
                nome: "Aprovação de Proposição em Plenário",
                descricao: ""
            },
            {
                cod: 245,
                sigla: "",
                nome: "Verificação de Votação",
                descricao: ""
            },
            {
                cod: 250,
                sigla: "",
                nome: "Retirada de Pauta",
                descricao: ""
            },
            {
                cod: 251,
                sigla: "",
                nome: "Transformação em Norma Jurídica",
                descricao: ""
            },
            {
                cod: 260,
                sigla: "",
                nome: "Rejeição de Requerimento",
                descricao: ""
            },
            {
                cod: 263,
                sigla: "",
                nome: "Retirada de Requerimento",
                descricao: ""
            },
            {
                cod: 300,
                sigla: "",
                nome: "Apresentação de Proposição interna - Comissão",
                descricao: ""
            },
            {
                cod: 319,
                sigla: "",
                nome: "Análise Parecer",
                descricao: ""
            },
            {
                cod: 320,
                sigla: "",
                nome: "Designação de Relator",
                descricao: "",
                tipoTramitacao:"comissao",
                stage: 1
            },
            {
                cod: 321,
                sigla: "",
                nome: "Redistribuição a Relator",
                descricao: ""
            },
            {
                cod: 322,
                sigla: "",
                nome: "Parecer do Relator",
                descricao: "",
                tipoTramitacao:"comissao",
                stage: 3
            },
            {
                cod: 323,
                sigla: "",
                nome: "Parecer do Relator - Emendas",
                descricao: ""
            },
            {
                cod: 324,
                sigla: "",
                nome: "Parecer do Relator - Manifestação",
                descricao: ""
            },
            {
                cod: 326,
                sigla: "",
                nome: "Parecer do Relator - Revisão",
                descricao: ""
            },
            {
                cod: 327,
                sigla: "",
                nome: "Designação de Relator do Vencedor",
                descricao: ""
            },
            {
                cod: 328,
                sigla: "",
                nome: "Designação de Relator Parcial",
                descricao: ""
            },
            {
                cod: 329,
                sigla: "",
                nome: "Designação de Relator Revisor",
                descricao: ""
            },
            {
                cod: 330,
                sigla: "",
                nome: "Leitura e publicação do Parecer",
                descricao: ""
            },
            {
                cod: 331,
                sigla: "",
                nome: "Cancelamento de Parecer",
                descricao: ""
            },
            {
                cod: 335,
                sigla: "",
                nome: "Rejeição do Parecer do Relator",
                descricao: ""
            },
            {
                cod: 336,
                sigla: "",
                nome: "Aprovação do Parecer",
                descricao: ""
            },
            {
                cod: 337,
                sigla: "",
                nome: "Apresentação do Relatório Prévio",
                descricao: ""
            },
            {
                cod: 338,
                sigla: "",
                nome: "Aprovação do Relatório Prévio ou Parcial",
                descricao: ""
            },
            {
                cod: 339,
                sigla: "",
                nome: "Rejeição do Relatório Prévio",
                descricao: ""
            },
            {
                cod: 340,
                sigla: "",
                nome: "Apresentação do Relatório Final",
                descricao: ""
            },
            {
                cod: 350,
                sigla: "",
                nome: "Abertura de Prazo",
                descricao: ""
            },
            {
                cod: 352,
                sigla: "",
                nome: "Prorrogação de Prazo",
                descricao: ""
            },
            {
                cod: 353,
                sigla: "",
                nome: "Reabertura de Prazo",
                descricao: ""
            },
            {
                cod: 362,
                sigla: "",
                nome: "Prejudicado Requerimento",
                descricao: ""
            },
            {
                cod: 400,
                sigla: "",
                nome: "Recebimento de Emenda",
                descricao: ""
            },
            {
                cod: 401,
                sigla: "",
                nome: "Recebimento de Emenda a Substitutivo",
                descricao: ""
            },
            {
                cod: 420,
                sigla: "",
                nome: "Pedido de Vista",
                descricao: ""
            },
            {
                cod: 430,
                sigla: "",
                nome: "Manifestação de Voto",
                descricao: ""
            },
            {
                cod: 431,
                sigla: "",
                nome: "Declaração de Voto em Separado",
                descricao: ""
            },
            {
                cod: 435,
                sigla: "",
                nome: "Declaração de Prejudicialidade",
                descricao: ""
            },
            {
                cod: 440,
                sigla: "",
                nome: "Prorrogação de prazo para conclusão de CPI",
                descricao: ""
            },
            {
                cod: 441,
                sigla: "",
                nome: "Conclusão de CPI",
                descricao: ""
            },
            {
                cod: 451,
                sigla: "",
                nome: "Manifestação pela Prejudicialidade",
                descricao: ""
            },
            {
                cod: 452,
                sigla: "",
                nome: "Manifestação pela Incompetência",
                descricao: ""
            },
            {
                cod: 469,
                sigla: "",
                nome: "Transformada em Nova Proposição",
                descricao: ""
            },
            {
                cod: 500,
                sigla: "",
                nome: "Recebimento",
                descricao: ""
            },
            {
                cod: 501,
                sigla: "",
                nome: "Recebimento - Relator",
                descricao: "",
                tipoTramitacao:"comissao",
                stage: 2
            },
            {
                cod: 502,
                sigla: "",
                nome: "Arquivamento",
                descricao: ""
            },
            {
                cod: 503,
                sigla: "",
                nome: "Desarquivamento",
                descricao: ""
            },
            {
                cod: 504,
                sigla: "",
                nome: "Notificação de Apensação",
                descricao: ""
            },
            {
                cod: 505,
                sigla: "",
                nome: "Notificação de Desapensação",
                descricao: ""
            },
            {
                cod: 506,
                sigla: "",
                nome: "Recebimento - Redação Final",
                descricao: ""
            },
            {
                cod: 507,
                sigla: "",
                nome: "Recebimento - Relator (Sem Manifestação)",
                descricao: ""
            },
            {
                cod: 510,
                sigla: "",
                nome: "Dispensada a Redação Final",
                descricao: ""
            },
            {
                cod: 600,
                sigla: "",
                nome: "Encerramento de Prazo",
                descricao: ""
            },
            {
                cod: 601,
                sigla: "",
                nome: "Saída de membro da comissão",
                descricao: ""
            },
            {
                cod: 602,
                sigla: "",
                nome: "Devolução de Vista",
                descricao: ""
            },
            {
                cod: 603,
                sigla: "",
                nome: "Novo despacho",
                descricao: ""
            },
            {
                cod: 604,
                sigla: "",
                nome: "Publicação de Proposição",
                descricao: "",
                tipoTramitacao:"apresentacao",
                stage: 3
            },
            {
                cod: 605,
                sigla: "",
                nome: "Publicação de Despacho",
                descricao: ""
            },
            {
                cod: 606,
                sigla: "",
                nome: "Publicação de Parecer",
                descricao: ""
            },
            {
                cod: 607,
                sigla: "",
                nome: "Recebimento de autógrafos",
                descricao: ""
            },
            {
                cod: 608,
                sigla: "",
                nome: "Remessa à Promulgação",
                descricao: ""
            },
            {
                cod: 609,
                sigla: "",
                nome: "Remessa à Sanção",
                descricao: ""
            },
            {
                cod: 610,
                sigla: "",
                nome: "Submeta-se a Plenário",
                descricao: ""
            },
            {
                cod: 620,
                sigla: "",
                nome: "Perda de eficácia",
                descricao: ""
            },
            {
                cod: 630,
                sigla: "",
                nome: "Reentrada na comissão por arquivamento",
                descricao: ""
            },
            {
                cod: 640,
                sigla: "",
                nome: "Desarquivamento a Pedido",
                descricao: ""
            },
            {
                cod: 650,
                sigla: "",
                nome: "Desarquivamento de Ofício",
                descricao: ""
            },
            {
                cod: 700,
                sigla: "",
                nome: "Conferência Sinopse 2001",
                descricao: ""
            },
            {
                cod: 710,
                sigla: "",
                nome: "Revisão de despacho",
                descricao: ""
            },
            {
                cod: 720,
                sigla: "",
                nome: "Adoção de Proposição pela Comissão",
                descricao: ""
            },
            {
                cod: 910,
                sigla: "",
                nome: "Notificação de Encaminhamento Fora de Fluxo",
                descricao: ""
            },
            {
                cod: 997,
                sigla: "",
                nome: "Deliberação* (inativa)",
                descricao: ""
            },
            {
                cod: 998,
                sigla: "",
                nome: "Pronta para ordem do dia* (inativa)",
                descricao: ""
            },
            {
                cod: 999,
                sigla: "",
                nome: "Despacho* (inativa)",
                descricao: ""
            },
            {
                cod: 1000,
                sigla: "",
                nome: "Notificação de Apoiamento",
                descricao: ""
            },
            {
                cod: 1001,
                sigla: "",
                nome: "Decisão da Presidência",
                descricao: ""
            },
            {
                cod: 1002,
                sigla: "",
                nome: "Notificação - Pasta genérica",
                descricao: ""
            },
            {
                cod: 1003,
                sigla: "",
                nome: "Notificação (Sinopse) - Revisão da Ementa / Indexação",
                descricao: ""
            },
            {
                cod: 1004,
                sigla: "",
                nome: "Notificação (CeDi) - Legislação Citada",
                descricao: ""
            },
            {
                cod: 1005,
                sigla: "",
                nome: "Notificações",
                descricao: ""
            },
            {
                cod: 1006,
                sigla: "",
                nome: "Pela Recusa",
                descricao: ""
            },
            {
                cod: 1007,
                sigla: "",
                nome: "Recebimento de Retorno",
                descricao: ""
            },
            {
                cod: 1008,
                sigla: "",
                nome: "Não Deliberado",
                descricao: ""
            },
            {
                cod: 1009,
                sigla: "",
                nome: "Tramitação de Proposição Acessória",
                descricao: ""
            },
            {
                cod: 1010,
                sigla: "",
                nome: "Devolução à CCP",
                descricao: ""
            },
            {
                cod: 1011,
                sigla: "",
                nome: "Criação de TVRs",
                descricao: ""
            },
            {
                cod: 1012,
                sigla: "",
                nome: "Transformado em Norma Jurídica com Veto Parcial",
                descricao: ""
            },
            {
                cod: 1013,
                sigla: "",
                nome: "Vetado Totalmente",
                descricao: ""
            },
            {
                cod: 1020,
                sigla: "",
                nome: "Ofício de Devolução ao Autor",
                descricao: ""
            },
            {
                cod: 1021,
                sigla: "",
                nome: "Questão de Ordem",
                descricao: ""
            },
            {
                cod: 1022,
                sigla: "",
                nome: "Oficio Conferência Apoiamento",
                descricao: ""
            },
            {
                cod: 1023,
                sigla: "",
                nome: "Despacho",
                descricao: ""
            },
            {
                cod: 1024,
                sigla: "",
                nome: "Arquivamento - Art.133 do RI",
                descricao: ""
            },
            {
                cod: 1025,
                sigla: "",
                nome: "Deferido o requerimento de retirada pelo autor",
                descricao: ""
            },
            {
                cod: 1026,
                sigla: "",
                nome: "Autorização de abertura de prazo recursal",
                descricao: ""
            },
            {
                cod: 1027,
                sigla: "",
                nome: "Pareceres Favoráveis nas Comissões",
                descricao: ""
            },
            {
                cod: 1028,
                sigla: "",
                nome: "Pareceres Contrários quanto ao Mérito",
                descricao: ""
            },
            {
                cod: 1029,
                sigla: "",
                nome: "Parecer pela Inadequação Financeira e/ou Orçamentária",
                descricao: ""
            },
            {
                cod: 1030,
                sigla: "",
                nome: "Parecer pela Inconstitucionalidade ou Injuridicidade",
                descricao: ""
            },
            {
                cod: 1031,
                sigla: "",
                nome: "Contra Declaração de Prejudicialidade",
                descricao: ""
            },
            {
                cod: 1032,
                sigla: "",
                nome: "Contra Despacho de Devolução ao Autor",
                descricao: ""
            },
            {
                cod: 1033,
                sigla: "",
                nome: "Contra Despacho pelo Indeferimento",
                descricao: ""
            },
            {
                cod: 1034,
                sigla: "",
                nome: "Arquivamento da representação, por inépcia/ausência de justa causa.",
                descricao: ""
            },
            {
                cod: 1035,
                sigla: "",
                nome: "Arquivamento da representação, por improcedência.",
                descricao: ""
            },
            {
                cod: 1036,
                sigla: "",
                nome: "Despacho Revisto",
                descricao: ""
            },
            {
                cod: 1037,
                sigla: "",
                nome: "Pela perda do mandato de deputado federal.",
                descricao: ""
            },
            {
                cod: 1038,
                sigla: "",
                nome: "Volta a aguardar criação de nova Comissão Especial.",
                descricao: ""
            },
            {
                cod: 1040,
                sigla: "",
                nome: "Ratificação de Parecer",
                descricao: ""
            },
            {
                cod: 1041,
                sigla: "",
                nome: "Remessa ao Congresso Nacional",
                descricao: ""
            },
            {
                cod: 1042,
                sigla: "",
                nome: "Relatório de Conferência de Assinaturas",
                descricao: ""
            },
            {
                cod: 1043,
                sigla: "",
                nome: "Ação de Relatoria",
                descricao: ""
            },
            {
                cod: 1050,
                sigla: "",
                nome: "Notificacao para Publicação Intermediária",
                descricao: ""
            },
            {
                cod: 1051,
                sigla: "",
                nome: "Encerramento de Comissão Temporária",
                descricao: ""
            },
            {
                cod: 1052,
                sigla: "",
                nome: "Substituição de Versão",
                descricao: ""
            },
            {
                cod: 1053,
                sigla: "",
                nome: "Apresentação de Quadro Analítico",
                descricao: ""
            },
            {
                cod: 1054,
                sigla: "",
                nome: "Não Acolhimento",
                descricao: ""
            },
            {
                cod: 1055,
                sigla: "",
                nome: "Providência Interna - Comunicação de Dilatação de Prazo",
                descricao: ""
            },
            {
                cod: 1056,
                sigla: "",
                nome: "Providência Interna - Comunicação de resposta ostensiva",
                descricao: ""
            },
            {
                cod: 1057,
                sigla: "",
                nome: "Providência Interna - Comunicação de resposta reservada",
                descricao: ""
            },
            {
                cod: 1058,
                sigla: "",
                nome: "Leitura de proposição em Plenário",
                descricao: ""
            },
            {
                cod: 1059,
                sigla: "",
                nome: "Instauração de Processo - COÉTICA",
                descricao: ""
            },
            {
                cod: 1060,
                sigla: "",
                nome: "Sorteio de Relator - COÉTICA",
                descricao: ""
            },
            {
                cod: 1061,
                sigla: "",
                nome: "Início da Instrução Probatória - COÉTICA",
                descricao: ""
            },
            {
                cod: 1062,
                sigla: "",
                nome: "Encerramento da Instrução Probatória - COÉTICA",
                descricao: ""
            },
            {
                cod: 1070,
                sigla: "",
                nome: "Sessão Solene",
                descricao: ""
            },
            {
                cod: 1071,
                sigla: "",
                nome: "Comissão Geral",
                descricao: ""
            },
            {
                cod: 1231,
                sigla: "",
                nome: "Votação (Plenário)",
                descricao: ""
            },
            {
                cod: 1232,
                sigla: "",
                nome: "Obstruçao Votação (Plenário)",
                descricao: ""
            },
            {
                cod: 1233,
                sigla: "",
                nome: "Destaques (Plenário)",
                descricao: ""
            },
            {
                cod: 1234,
                sigla: "",
                nome: "Votação (Outros Requerimentos)",
                descricao: ""
            },
            {
                cod: 1235,
                sigla: "",
                nome: "Aprovação de Proposição (Plenário)",
                descricao: ""
            },
            {
                cod: 1236,
                sigla: "",
                nome: "Rejeição de Proposição (Plenário)",
                descricao: ""
            },
            {
                cod: 1237,
                sigla: "",
                nome: "Manutenção do texto (Plenário)",
                descricao: ""
            },
            {
                cod: 1238,
                sigla: "",
                nome: "Supressão do texto (Plenário)",
                descricao: ""
            },
            {
                cod: 1239,
                sigla: "",
                nome: "Verificação de Votação (Plenário)",
                descricao: ""
            },
            {
                cod: 1240,
                sigla: "",
                nome: "Prejudicialidade (Plenário)",
                descricao: ""
            },
            {
                cod: 1241,
                sigla: "",
                nome: "Retirada pelo Autor (Plenário)",
                descricao: ""
            },
            {
                cod: 1242,
                sigla: "",
                nome: "Não Acolhimento (Plenário)",
                descricao: ""
            },
            {
                cod: 1243,
                sigla: "",
                nome: "Encaminhamento (Plenário)",
                descricao: ""
            },
            {
                cod: 1244,
                sigla: "",
                nome: "Encerramentos",
                descricao: ""
            },
            {
                cod: 1245,
                sigla: "",
                nome: "Acessórios",
                descricao: ""
            },
            {
                cod: 1250,
                sigla: "",
                nome: "Saída de Relator da Comissão - Sem Parecer Apresentado",
                descricao: ""
            },
            {
                cod: 1255,
                sigla: "",
                nome: "Saída de Relator da Comissão - Com Parecer Apresentado",
                descricao: ""
            },
            {
                cod: 1260,
                sigla: "",
                nome: "Retorno de Relator à Comissão",
                descricao: ""
            },
            {
                cod: 1261,
                sigla: "",
                nome: "Aprovação de Requerimento Procedimental",
                descricao: ""
            },
            {
                cod: 1262,
                sigla: "",
                nome: "Rejeição de Requerimento Procedimental",
                descricao: ""
            },
            {
                cod: 1263,
                sigla: "",
                nome: "Prejudicado Requerimento Procedimental",
                descricao: ""
            },
            {
                cod: 1264,
                sigla: "",
                nome: "Retirada de Requerimento Procedimental",
                descricao: ""
            },
            {
                cod: 1500,
                sigla: "",
                nome: "Matéria apreciada em Plenário",
                descricao: ""
            }
            ];

export default status