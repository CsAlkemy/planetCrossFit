import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = (props) => (
	<div>
		<Helmet />
		<Navbar />
		{props.children}
		<Footer />
	</div>
);

export default Layout;
