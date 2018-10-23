import React, { Component } from 'react';

class SlideMenu extends Component {

    topicsMenu = () => {
        const arrayOfTopic = this.props.topics;
        return arrayOfTopic.map(topic => <div key={topic} className="d-flex d-md-none d-xl-none slideDownMenu slideDown" href="#">{topic}</div>)
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
            <div>
                {this.openMenuFunction()}
            </div>
        );
    }
}
 
export default SlideMenu;