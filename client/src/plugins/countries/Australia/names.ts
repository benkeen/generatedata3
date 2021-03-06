import { CountryNames } from '~types/countries';

const femaleNames = [
	'Aaliyah', 'Abigail', 'Addison', 'Adeline', 'Alice', 'Amelia', 'Anna', 'Annabelle', 'Aria', 'Ariana', 'Audrey',
	'Aurora', 'Ava', 'Ayla', 'Bella', 'Billie', 'Bonnie', 'Charlie', 'Charlotte', 'Chloe', 'Claire', 'Clara', 'Daisy',
	'Delilah', 'Eden', 'Eleanor', 'Elena', 'Eliza', 'Elizabeth', 'Ella', 'Ellie', 'Eloise', 'Elsie', 'Emilia', 'Emily',
	'Emma', 'Eva', 'Evelyn', 'Evie', 'Florence', 'Frankie', 'Freya', 'Georgia', 'Grace', 'Hallie', 'Hannah', 'Harlow',
	'Harper', 'Harriet', 'Hazel', 'Imogen', 'Isabel', 'Isabella', 'Isabelle', 'Isla', 'Ivy', 'Jasmine', 'Lara', 'Layla',
	'Lily', 'Lola', 'Lucy', 'Luna', 'Mackenzie', 'Maddison', 'Maeve', 'Maggie', 'Matilda', 'Maya', 'Mia', 'Mila',
	'Millie', 'Molly', 'Olive', 'Olivia', 'Penelope', 'Peyton', 'Phoebe', 'Piper', 'Pippa', 'Poppy', 'Quinn', 'Remi',
	'Rose', 'Rosie', 'Ruby', 'Sadie', 'Sarah', 'Savannah', 'Scarlett', 'Sienna', 'Sofia', 'Sophia', 'Sophie', 'Stella',
	'Summer', 'Violet', 'Willow', 'Zara', 'Zoe'
];

const maleNames = [
	'Adam', 'Aiden', 'Alexander', 'Ali', 'Angus', 'Archer', 'Archie', 'Ari', 'Arlo', 'Arthur', 'Asher', 'Ashton',
	'Austin', 'Beau', 'Benjamin', 'Billy', 'Bodhi', 'Caleb', 'Carter', 'Charles', 'Charlie', 'Connor', 'Cooper',
	'Daniel', 'Darcy', 'Dylan', 'Edward', 'Eli', 'Elijah', 'Ethan', 'Ezra', 'Felix', 'Finn', 'Fletcher', 'Flynn',
	'Gabriel', 'George', 'Hamish', 'Harrison', 'Harry', 'Harvey', 'Henry', 'Hudson', 'Hugo', 'Hunter', 'Isaac', 'Jack',
	'Jackson', 'Jacob', 'James', 'Jasper', 'Jaxon', 'Jayden', 'Jordan', 'Joseph', 'Joshua', 'Jude', 'Kai', 'Lachlan',
	'Lennox', 'Leo', 'Leon', 'Leonardo', 'Levi', 'Lewis', 'Liam', 'Lincoln', 'Logan', 'Louis', 'Luca', 'Lucas', 'Luka',
	'Luke', 'Marcus', 'Mason', 'Matthew', 'Max', 'Michael', 'Muhammad', 'Noah', 'Oliver', 'Oscar', 'Owen', 'Parker',
	'Patrick', 'Riley', 'River', 'Ryan', 'Ryder', 'Samuel', 'Sebastian', 'Sonny', 'Spencer', 'Theo', 'Theodore', 'Thomas',
	'Vincent', 'William', 'Xavier', 'Zachary'
];

const lastNames = [
	'Adams', 'Allen', 'Anderson', 'Bailey', 'Baker', 'Bell', 'Bennett', 'Brown', 'Butler', 'Cameron', 'Campbell',
	'Carter', 'Chapman', 'Clark', 'Clarke', 'Colling', 'Cook', 'Cooper', 'Cox', 'Davies', 'Davis', 'Edwards', 'Elliott',
	'Ellis', 'Evans', 'Fisher', 'Gibson', 'Graham', 'Gray', 'Green', 'Hall', 'Hamilton', 'Harris', 'Harrison', 'Harvey',
	'Hill', 'Hughes', 'Jackson', 'James', 'Johnson', 'Johnston', 'Jones', 'Kelly', 'Kennedy', 'King', 'Knight', 'Lee',
	'Lewis', 'Marshall', 'Martin', 'Mason', 'Matthews', 'McDonald', 'Miller', 'Mills', 'Mitchell', 'Moore', 'Morgan',
	'Morris', 'Murphy', 'Murray', 'Nguyen', 'O\'Brien', 'Parker', 'Pearce', 'Phillips', 'Price', 'Reid', 'Richards',
	'Richardson', 'Roberts', 'Robertson', 'Robinson', 'Rogers', 'Ross', 'Russell', 'Ryan', 'Scott', 'Shaw', 'Simpson',
	'Smith', 'Stevens', 'Stewart', 'Taylor', 'Thomas', 'Thompson', 'Thomson', 'Tran', 'Turner', 'Walker', 'Walsh',
	'Ward', 'Watson', 'Webb', 'White', 'Williams', 'Wilson', 'Wood', 'Wright', 'Young'
];

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames
};

export default namesData;
