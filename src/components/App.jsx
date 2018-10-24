
import React, {Component, Fragment} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import Menu from './Menu';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Menu />
                <div className="containerForWaringMessage">
                    <img src="./images/logo-tsd.jpg"></img>
                    <h1>Strona w gruntownej przebudowie!</h1>
                    <p>Najnowsze informacje znajdziesz na naszym funpage'u <a href="https://www.facebook.com/dzwiekowy/">Tenis Stołowy Dźwiękowy</a> </p>
                </div>
            </Fragment>
        );
    }
}