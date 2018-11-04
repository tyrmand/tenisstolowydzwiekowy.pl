
import React, { Component, Fragment } from 'react';

export default class Start extends Component {
    render() {
        return (
            <Fragment>
                <div className="start-img d-flex justify-content-center">
                    <div className="container d-flex flex-column justify-content-center align-items-center">
                        <div className="jumbotron">
                            <h1 className="display-4">Strona w gruntownej przebudowie!</h1>
                            <hr className="my-4" />
                            <p className="lead">Najnowsze informacje znajdziesz na naszym fanpage'u</p>
                            <a className="btn btn-primary btn-lg" href="https://www.facebook.com/dzwiekowy/" role="button" target="_blank">Tenis Stołowy Dźwiękowy</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}