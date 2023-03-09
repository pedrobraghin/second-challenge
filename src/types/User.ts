interface User {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	city: string;
	country: string;
	birthDate: Date;
	active: boolean;
}

export { User };
