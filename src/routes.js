import React from 'react';
import loadable from '@loadable/component'

import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import CheckIcon from '@material-ui/icons/Check';
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";

const PageLayoutExamples = loadable(() => import('./examples/PageLayoutExamples'));
const Album = loadable(() => import('./examples/album/Album'));
const Checkout = loadable(() => import('./examples/checkout/Checkout'));

const Index = loadable(() => import('./pages/Index'));
const Propostas = loadable(() => import('./pages/Propostas'));
const Comissoes = loadable(() => import('./pages/Comissoes'));

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
        icon: <ListIcon />,
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
        label: 'Checkout',
        component: Checkout,
        icon: <CheckIcon />,
    },
];

export default routes