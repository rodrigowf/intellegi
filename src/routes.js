import React from 'react';
import loadable from '@loadable/component'

import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import PaymentIcon from  "@material-ui/icons/Payment";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import FlagIcon from "@material-ui/icons/Flag"

const Checkout = loadable(() => import('./examples/checkout/Checkout'));

const Index = loadable(() => import('./pages/Index'));
const Propostas = loadable(() => import('./pages/Propostas'));
const Comissoes = loadable(() => import('./pages/Comissoes'));
const Deputados = loadable(() => import('./pages/Deputados/Deputados'));
const Partidos = loadable(() => import('./pages/Partidos'));
const Proposicao = loadable(() => import('./pages/Proposicao/Proposicao'));

const routes = [
    {
        path: "/",
        label: 'Index',
        component: Index,
        icon: <DashboardIcon />,
        exact: true,
    },
    {
        path: "/proposta/",
        component: Proposicao,
    },
    {
        path: "/propostas",
        label: 'Lista de Propostas',
        component: Propostas,
        icon: <ListIcon />,
        searchable: true,
    },
    {
        path: "/comissoes",
        label: 'Lista de Comissões',
        component: Comissoes,
        icon: <GroupWorkIcon />,
        searchable: true,
    },
    {
        path: "/deputados",
        label: 'Lista de Deputados',
        component: Deputados,
        icon: <AccountBoxIcon />,
        searchable: true,
    },
    {
        path: "/partidos",
        label: 'Lista de Partidos',
        component: Partidos,
        icon: <FlagIcon />,
        searchable: true,
    },
    // {
    //     path: "/ex",
    //     label: 'Examples',
    //     component: PageLayoutExamples,
    //     icon: <DashboardIcon />,
    //     exact: true,
    // },
    // {
    //     path: "/ex/album",
    //     label: 'Album',
    //     component: Album,
    //     icon: <PhotoAlbumIcon />,
    // },
    {
        path: "/ex/checkout",
        label: 'Cadastro',
        component: Checkout,
        icon: <PaymentIcon/>,
    },
];

export default routes