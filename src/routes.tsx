import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Lading from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Lading} />
            <Route path="/app" component={OrphanagesMap}  />
        </BrowserRouter>
    )
};

export default Routes;

