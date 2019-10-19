// import {Authenticator} from 'aws-amplify-react';
// import React, {Component} from 'react';

// class LoginPage extends Component {
// 	render () {
// 		return (
// 			<Authenticator />
// 		)
// 	}
// }

import React, {Component} from 'react';
import {Lead, BSpan} from 'bootstrap-4-react';
import {Authenticator} from 'aws-amplify-react';

class LoginPage extends Component {
	render () {
		const {user} = this.props;

		return (
			<>
				{!user && <Authenticator />}
				{user && <Lead>You are signed in as <BSpan font="italic">{user.username}</BSpan>.</Lead>}
			</>
		)
	}
}
export default LoginPage;
