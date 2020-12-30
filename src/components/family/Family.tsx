import React from 'react';
import { Link } from 'react-router-dom';
import { FAMILY } from '../../data/family';

interface Props {}

const Family = (props: Props) => {
	return (
		<ul>
			{FAMILY.map((person) => {
				return (
					<li key={person.id}>
						<Link to={`person/${person.id}`}>{person.name}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Family;
