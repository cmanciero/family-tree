import { IPersonProps } from '../components/person/Person';

export enum BloodType {
	A_POSITIVE = 'A Positive',
	A_NEGATIVE = 'A Negative',
	B_POSITIVE = 'B Positive',
	B_NEGATIVE = 'B Negative',
	AB_POSITIVE = 'A/B Positive',
	AB_NEGATIVE = 'A/B Negative',
	O_POSITIVE = 'O Positive',
	O_NEGATIVE = 'O Negative',
}

export enum Gender {
	MALE = 'Male',
	FEMALE = 'Female',
	NOT_APPLICABLE = 'N/A',
}

export const FAMILY: Array<IPersonProps> = [
	{
		id: 1,
		name: 'Chris',
		age: 40,
		dateOfBirth: '1980-04-10',
		emailAddress: 'cmanciero@gmail.com',
		bloodType: BloodType.B_POSITIVE,
		gender: Gender.MALE,
	},
	{
		id: 2,
		name: 'Shannon',
		age: 39,
		dateOfBirth: '1981-03-26',
		emailAddress: 'smanciero@gmail.com',
		bloodType: BloodType.A_POSITIVE,
		gender: Gender.FEMALE,
	},
	{
		id: 3,
		name: 'Camren',
		age: 12,
		dateOfBirth: '2008-04-27',
		emailAddress: 'camren.manciero@gmail.com',
		bloodType: BloodType.A_POSITIVE,
		gender: Gender.MALE,
	},
	{
		id: 4,
		name: 'Mason',
		age: 10,
		dateOfBirth: '2010-02-23',
		emailAddress: 'mason.manciero@gmail.com',
		bloodType: BloodType.B_POSITIVE,
		gender: Gender.MALE,
	},
	{
		id: 5,
		name: 'Gavin',
		age: 9,
		dateOfBirth: '2011-11-11',
		emailAddress: 'gavin.manciero@gmail.com',
		bloodType: BloodType.AB_POSITIVE,
		gender: Gender.MALE,
	},
	{
		id: 6,
		name: 'Madden',
		age: 6,
		dateOfBirth: '2014-12-01',
		emailAddress: 'madden.manciero@gmail.com',
		bloodType: BloodType.A_POSITIVE,
		gender: Gender.MALE,
	},
];
