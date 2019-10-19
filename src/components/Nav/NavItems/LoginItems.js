import {BSpan, Nav} from 'bootstrap-4-react';
import React from 'react';
const LoginItems = () => {
	return (<>
		<Nav.ItemLink href="#" active>
			Home
			</Nav.ItemLink>
		<Nav.ItemLink href="#/login">
			Login To Account
      <BSpan srOnly>(current)</BSpan>
		</Nav.ItemLink>
	</>);
};

export default LoginItems;