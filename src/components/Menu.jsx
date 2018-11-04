import React, { Component } from 'react';
import SlideMenu from "./SlideMenu";
import { NavLink, Link } from 'react-router-dom';


class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: 'close',
			firstTopic: [
				"start",
				"o nas",
				"zawody",
				"kontakt"
			]
		}
	};

	hamburgerMenu = () => {
		if (this.state.isOpen === 'close') {
			this.setState({ isOpen: 'open' });
		} else {
			this.setState({ isOpen: 'close' });
		}
	};


	topicsMenu = () => {
		const arrayOfTopic = this.state.firstTopic;
		return arrayOfTopic.map((topic, item) => <li key={topic} className="py-2 d-none d-md-inline-block text-primary" ><NavLink to={`/${item}`} replace>{topic}</NavLink></li>)
	};

	render() {
		return (
			<nav className="site-header sticky-top py-1 bg-light">
				<div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
					<a className="py-2" href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="d-block mx-auto"
						>
							<circle cx="12" cy="12" r="10" />
							<line x1="14.31" y1="8" x2="20.05" y2="17.94" />
							<line x1="9.69" y1="8" x2="21.17" y2="8" />
							<line x1="7.38" y1="12" x2="13.12" y2="2.06" />
							<line x1="9.69" y1="16" x2="3.95" y2="6.06" />
							<line x1="14.31" y1="16" x2="2.83" y2="16" />
							<line x1="16.62" y1="12" x2="10.88" y2="21.94" />
						</svg>
					</a>

					{this.topicsMenu()}

					<div className={'d-flex d-md-none d-xl-none hamburgerMenuContainer'}>
						<div id="nav-icon3" onClick={this.hamburgerMenu} className={this.state.isOpen} href="#">
							<span />
							<span />
							<span />
							<span />
						</div>
						<div className="py-2 d-md-inline-block text-primary textMenuContainer">MENU</div>
					</div>
				</div>
				<SlideMenu openMenu={this.state.isOpen} topics={this.state.firstTopic} closeMenu={this.hamburgerMenu} />
			</nav>

		);
	}

}

export default Menu;
