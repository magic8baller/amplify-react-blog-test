// import {SignOut} from 'aws-amplify-react';
import {Navbar} from 'bootstrap-4-react';
import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {HomeItems, LoginItems} from './Nav/NavItems';
import {SignOut} from 'aws-amplify-react'

class Navigator extends Component {

	render () {
		// const {user} = this.props;
		return (
			<Navbar expand="md" dark bg="dark" fixed="top">
				<Navbar.Brand href="#">My World</Navbar.Brand>
				<Navbar.Toggler target="#navbarsExampleDefault" />
				<Navbar.Collapse id="navbarsExampleDefault">
					<Navbar.Nav mr="auto">
						<HashRouter>
							<Switch>
								<Route exact path="/" component={HomeItems} />
								<Route path="/login" component={LoginItems} />
							</Switch>
						</HashRouter>
					</Navbar.Nav>
					<Navbar.Text>Γεια σου κόσμε</Navbar.Text>
					<SignOut />
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Navigator;