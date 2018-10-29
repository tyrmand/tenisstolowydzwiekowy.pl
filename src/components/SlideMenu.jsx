import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

class SlideMenu extends Component {

    topicsMenu = () => {
        const arrayOfTopic = this.props.topics;
        return arrayOfTopic.map((topic, item) => <li key={topic} className="d-flex d-md-none d-xl-none slideDownMenu slideDown" onClick={this.openMenuFunction}><NavLink  to={`/${item}`} replace>{topic}</NavLink></li>)
    };

    openMenuFunction = () => {
        if (this.props.openMenu === "open"){
            return (
                <div className="containerForSlideMenuTopics">{this.topicsMenu()}</div>
            )
        }
    }
    
    render() { 
        return (
            <div className="mainContainerForDropDownMenu">
                {this.openMenuFunction()}
            </div>
        );
    }
}
 
export default SlideMenu;