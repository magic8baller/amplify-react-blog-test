import {Container} from 'bootstrap-4-react';
import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {HomePage, LoginPage} from '../pages'
class Main extends Component {
	render () {
		return (
			<Container as="main" role="main">
				<div className="starter-template">
					<HashRouter>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/login" component={LoginPage} />
						</Switch>
					</HashRouter>
				</div>
			</Container>
		)
	}
}

export default Main;