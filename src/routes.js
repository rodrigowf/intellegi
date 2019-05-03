import React from 'react';
import loadable from '@loadable/component'

import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import CheckIcon from '@material-ui/icons/Check';
//import DashboardIcon from "@material-ui/core/SvgIcon/SvgIcon";

const Album = loadable(() => import('./examples/album/Album'))
const Checkout = loadable(() => import('./examples/checkout/Checkout'))

const routes = [
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