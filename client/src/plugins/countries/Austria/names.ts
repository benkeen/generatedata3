import { CountryNames } from '~types/countries';

const femaleNames = [
	'Alina', 'Amelie', 'Anika', 'Anna', 'Chiara', 'Clara', 'Elena', 'Elisa', 'Ella', 'Emilia', 'Emily', 'Emma', 'Eva',
	'Felicitas', 'Hannah', 'Helena', 'Ida', 'Ina', 'Isabella', 'Johanna', 'Josephina', 'Josephine', 'Kristin', 'Laura',
	'Lea', 'Lena', 'Leona', 'Lilja', 'Lilly', 'Lina', 'Linda', 'Lorelei', 'Louisa', 'Magdalena', 'Marie', 'Marlene',
	'Melissa', 'Mia', 'Mona', 'Nina', 'Nora', 'Paula', 'Paulina', 'Pia', 'Ronja', 'Sara', 'Sophia', 'Sophie',
	'Valentina', 'Valerie'
];

const maleNames = [
	'Alexander', 'Anton', 'Ben', 'Benjamin', 'Daniel', 'David', 'Dário', 'Elijas', 'Felix', 'Finn', 'Gabriel', 'Henri',
	'Jakob', 'Jonas', 'Jonathan', 'Julian', 'Konstantin', 'Kylian', 'Levi', 'Lewin', 'Liam', 'Luis', 'Lukas', 'Léo',
	'Léon', 'Mathis', 'Matthias', 'Max', 'Maximilian', 'Milo', 'Milàn', 'Moritz', 'Nathan', 'Nico, Niko', 'Nicolàs',
	'Niklas', 'Noah', 'Oliver', 'Oskar', 'Paul', 'Philipp', 'Raphael', 'Samuel', 'Theo', 'Thomas', 'Valentín', 'Vinzent',
	'Yorik', 'Yoshua'
];

const lastNames = [
	'Aigner', 'Auer', 'Bauer', 'Baumgartner', 'Berger', 'Binder', 'Brunner', 'Ebner', 'Eder', 'Egger', 'Fischer',
	'Fuchs', 'Gruber', 'Haas', 'Heilig', 'Hofer', 'Huber', 'Koller', 'Lang', 'Lechner', 'Lehner', 'Leitner', 'Maier',
	'Mayer', 'Mayr', 'Moser', 'Müller', 'Pichler', 'Reiter', 'Schmid', 'Schmidt', 'Schneider', 'Schuster', 'Schwarz',
	'Steiner', 'Wagner', 'Wallner', 'Weber', 'Wimmer', 'Winkler', 'Wolf'
];

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames
};

export default namesData;

