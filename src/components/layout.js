import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Footer from './footer';
import Navbar from './navbar';

const Layout = (props) => (
	<div>
		<Helmet />
		<Navbar />
		{props.children}
		<Footer />
	</div>
);

export default Layout;
