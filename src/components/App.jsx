
import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Menu from './Menu';
import StartPage from './Start';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Fragment>
                        <Menu />
                        <Switch>
                            <Route exact path='/' component={StartPage} />
                            <Route path='/0' component={StartPage} />
                            <Route path='/1' component={About} />
                            <Route path='/2' component={NotFound} />
                            <Route path='/3' component={Contact} />
                            <Route path='/4' component={NotFound} />
                            <Route path='/5' component={NotFound} />
                            <Route component={NotFound} />
                        </Switch>
                    </Fragment>
                </HashRouter>
            </div>
        );
    }
}