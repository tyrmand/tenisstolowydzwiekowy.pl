import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <img src="./images/logo-tsd.jpg"></img>
                    <h1>Strona w gruntownej przebudowie!</h1>
                    <p>Najnowsze informacje znajdziesz na naszym funpage'u <a href="https://www.facebook.com/dzwiekowy/">Tenis Stowy Dźwiękowy</a> </p>
                </div>
            </Fragment>
        );
    }
}