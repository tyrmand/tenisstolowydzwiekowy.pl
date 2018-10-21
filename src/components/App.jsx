import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import Menu from './Menu';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu />
            </React.Fragment>
        );
    }
}