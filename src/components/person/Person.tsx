import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BloodType, FAMILY, Gender } from '../../data/family';

export interface IPerson {
	id?: number;
	name?: string;
	age?: number;
	dateOfBirth?: Date;
	emailAddress?: string;
	bloodType?: BloodType;
	gender?: Gender;
}

const Person = (props: IPerson) => {
	const { id } = useParams<{ id: string }>();
	const [person, setPerson] = useState<IPerson>();

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

	const handleChange = (event: ChangeEvent) => {
		const inputElement: HTMLInputElement = event.target as HTMLInputElement;
		const name = inputElement.name;
		const value = inputElement.value;
		setPerson({ ...person, [name]: value });
	};

	return (
		<>
			{person && (
				<form onSubmit={submitForm} style={{ display: 'flex', flexDirection: 'column' }}>
					<label>
						Name:
						<input type='text' name='name' value={person?.name} onChange={handleChange} />
					</label>
					<label>
						Date of birth:
						<input type='text' name='dateOfBirth' value={person?.dateOfBirth?.toLocaleDateString()} onChange={handleChange} />
					</label>
					<label>
						E-mail:
						<input type='email' name='email' value={person?.emailAddress} onChange={handleChange} />
					</label>
					<label>
						Blood type:
						<select name='bloodType' value={person?.bloodType} onChange={handleChange}>
							{Object.values(BloodType).map((key) => (
								<option key={key} value={key}>
									{key}
								</option>
							))}
						</select>
					</label>
					<label>
						Gender:
						<select name='gender' value={person?.gender} onChange={handleChange}>
							{Object.values(Gender).map((key) => (
								<option key={key} value={key}>
									{key}
								</option>
							))}
						</select>
					</label>
					<button type='submit'>Update person</button>
				</form>
			)}
		</>
	);
};

export default Person;
