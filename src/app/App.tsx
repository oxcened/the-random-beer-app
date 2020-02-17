import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AppRoute} from './models/AppRoute';
import RandomizeBeer from './containers/RandomizeBeer/RandomizeBeer';
import BreweryDetail from './containers/BreweryDetail/BreweryDetail';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import {connect} from 'react-redux';
import {RootState} from './store/reducer';

interface AppProps {
    isLoading?: boolean;
}

const App = (props: AppProps) => {
    return (
        <div className='App'>
            <Loader isVisible={props.isLoading}/>
            <Navbar/>
            <Switch>
                <Route path={AppRoute.RANDOMIZE_BEER} component={RandomizeBeer} exact/>
                <Route path={AppRoute.BREWERY_DETAIL} component={BreweryDetail} exact/>
                <Redirect to={AppRoute.RANDOMIZE_BEER}/>
            </Switch>
        </div>
    );
};

export default connect(
    (state: RootState) => ({
        isLoading: state.isLoading
    })
)(App);
