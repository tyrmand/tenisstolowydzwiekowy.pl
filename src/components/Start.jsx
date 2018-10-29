
import React, { Component, Fragment } from 'react';

export default class Start extends Component {
    render() {
        return (
            <Fragment>
                <div className="container d-flex flex-column align-items-center">
                    <img src="./images/logo-tsd.jpg"></img>
                    <h1 className="h1 text-center">Strona w gruntownej przebudowie!</h1>
                    <p className="p text-center">Najnowsze informacje znajdziesz na naszym fanpage'u <a href="https://www.facebook.com/dzwiekowy/">Tenis Stołowy Dźwiękowy</a> </p>
                </div>
            </Fragment>
        );
    }
}