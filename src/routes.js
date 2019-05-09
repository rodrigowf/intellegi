import React from 'react';
import loadable from '@loadable/component'

import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import PaymentIcon from  "@material-ui/icons/Payment";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import AccountBoxIcon from "@material-ui/icons/AccountBox"
// import FlagIcon from "@material-ui/icons/Flag"
// import DonutIcon from "@material-ui/icons/DonutLarge"


const PageLayoutExamples = loadable(() => import('./examples/PageLayoutExamples'));
const Album = loadable(() => import('./examples/album/Album'));
const Checkout = loadable(() => import('./examples/checkout/Checkout'));

const Index = loadable(() => import('./pages/Index'));
const Propostas = loadable(() => import('./pages/Propostas'));
const Comissoes = loadable(() => import('./pages/Comissoes'));
const Deputados = loadable(() => import('./pages/Deputados'));

const routes = [
    {
        path: "/",
        label: 'Index',
        component: Index,
        icon: <DashboardIcon />,
        exact: true,
    },
    {
        path: "/propostas",
        label: 'Lista de Propostas',
        component: Propostas,
        icon: <ListIcon />,
    },
    {
        path: "/comissoes",
        label: 'Lista de Comissões',
        component: Comissoes,
        icon: <GroupWorkIcon />,
    },
    {
        path: "/deputados",
        label: 'Lista de Deputados',
        component: Deputados,
        icon: <AccountBoxIcon />,
    },
    {
        path: "/ex",
        label: 'Examples',
        component: PageLayoutExamples,
        icon: <DashboardIcon />,
        exact: true,
    },
    {
        path: "/ex/album",
        label: 'Album',
        component: Album,
        icon: <PhotoAlbumIcon />,
    },
    {
        path: "/ex/checkout",
        label: 'Donate',
        component: Checkout,
        icon: <PaymentIcon/>,
    },
];

export default routes