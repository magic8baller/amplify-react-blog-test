import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react';
import React, {Component} from 'react';
import './App.css';
import config from './aws-exports';
import {Main, Navigator} from './components';
Amplify.configure(config)


class App extends Component {

	render () {
		return (
			<>
				<Navigator />
				<Main />
			</>
		);
	}
}

// export default withAuthenticator(App, {includeGreetings: true})
export default withAuthenticator(App)
