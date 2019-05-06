import React from 'react';
import loadable from '@loadable/component'

import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import CheckIcon from '@material-ui/icons/Check';
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";

const PageLayoutExamples = loadable(() => import('./examples/PageLayoutExamples'));
const Album = loadable(() => import('./examples/album/Album'));
const Checkout = loadable(() => import('./examples/checkout/Checkout'));
const Propostas = loadable(() => import('./pages/Propostas'));

const routes = [
    {
        path: "/",
        label: 'Index',
        component: PageLayoutExamples,
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