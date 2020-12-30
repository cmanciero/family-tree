import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

interface Props {}

const Navigation = (props: Props) => {
	return (
		<nav>
			<ul>
				<li>
					<Link to={ROUTES.HOME}>Home</Link>
				</li>
				<li>
					<Link to={ROUTES.ABOUT}>About</Link>
				</li>
				<li>
					<Link to={ROUTES.FAMILY}>Family</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
