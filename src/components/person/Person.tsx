import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BloodType, FAMILY, Gender } from '../../data/family';

export interface IPersonProps {
	id?: number;
	name?: string;
	age?: number;
	dateOfBirth?: string;
	emailAddress?: string;
	bloodType?: BloodType;
	gender?: Gender;
}

const Person = (props: IPersonProps) => {
	const { id } = useParams<{ id: string }>();
	const [person, setPerson] = useState<IPersonProps>();

	useEffect(() => {
		const selectedPerson = FAMILY.find((f) => f.id === +id);
		if (selectedPerson) {
			setPerson(selectedPerson);
		}
	}, [id]);

	const submitForm = (event: FormEvent) => {
		event?.preventDefault();
		console.log(person);
	};

	const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
		const inputElement: HTMLInputElement = event.target as HTMLInputElement;
		const name = inputElement.name;
		const value = inputElement.value;
		setPerson({ ...person, [name]: value });
	};

	return (
		<>
			{person && (
				<form onSubmit={submitForm} style={{ display: 'flex', flexDirection: 'column' }}>
					<FormControl>
						<TextField name='name' label='Name' value={person?.name} onChange={handleChange} />
					</FormControl>
					<FormControl>
						<TextField
							name='dateOfBirth'
							label='Date of birth'
							value={person?.dateOfBirth}
							onChange={handleChange}
							type='date'
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</FormControl>
					<FormControl>
						<TextField name='email' label='E-mail' value={person?.emailAddress} onChange={handleChange} />
					</FormControl>
					<FormControl>
						<InputLabel>Blood type:</InputLabel>
						<Select name='bloodType' value={person?.bloodType} onChange={handleChange}>
							{Object.values(BloodType).map((key) => (
								<MenuItem key={key} value={key}>
									{key}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel>Gender:</InputLabel>
						<Select name='gender' value={person?.gender} onChange={handleChange}>
							{Object.values(Gender).map((key) => (
								<MenuItem key={key} value={key}>
									{key}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button type='submit' variant='contained' color='primary'>
						Update person
					</Button>
				</form>
			)}
		</>
	);
};

export default Person;
