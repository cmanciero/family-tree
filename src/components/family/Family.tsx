import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAMILY } from '../../data/family';
import { IPersonProps } from '../person/Person';

interface IFamilyProps {}

const Family = (props: IFamilyProps) => {
	const [people, setPeople] = useState<Array<IPersonProps>>(FAMILY);

	const remove = () => {};
	return (
		<ul>
			{people.map((person) => {
				return (
					<li key={person.id}>
						<Link to={`person/${person.id}`}>{person.name}</Link>
						<Button onClick={remove} variant='outlined' color='secondary'>
							Remove
						</Button>
					</li>
				);
			})}
		</ul>
	);
};

export default Family;
