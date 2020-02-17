import React from 'react';
import {Navbar as ReactstrapNavbar, NavbarBrand} from 'reactstrap';
import {AppRoute} from '../../models/AppRoute';
import AppHistory from '../../models/AppHistory';

const Navbar = () => {
    return (
        <ReactstrapNavbar color='light' light>
            <NavbarBrand href='#' onClick={() => AppHistory.push(AppRoute.RANDOMIZE_BEER)}>
                The Random Beer App
            </NavbarBrand>
        </ReactstrapNavbar>
    );
};

export default Navbar;
