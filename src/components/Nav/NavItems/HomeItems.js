import React from 'react';
import {Nav, BSpan} from 'bootstrap-4-react';
const HomeItems = () => (
	<>
		<Nav.ItemLink href="#" active>
			Home
      <BSpan srOnly>(current)</BSpan>
		</Nav.ItemLink>
		<Nav.ItemLink href="#/login">
			Login To Account
		</Nav.ItemLink>
	</>
)
export default HomeItems;
