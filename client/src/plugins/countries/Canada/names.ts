import { CountryNames } from '~types/countries';

const femaleNames = [
	'Aaliyah', 'Abigail', 'Addison', 'Alexa', 'Alice', 'Allison', 'Alyssa', 'Amelia', 'Anna', 'Annabelle', 'Aria',
	'Arianna', 'Arielle', 'Aubrey', 'Audrey', 'Aurora', 'Autumn', 'Ava', 'Avery', 'Ayla', 'Beatrice', 'Brielle',
	'Brooklyn', 'Callie', 'Charlie', 'Charlotte', 'Chloe', 'Claire', 'Clara', 'Eleanor', 'Elena', 'Elizabeth', 'Ella',
	'Ellie', 'Emilia', 'Emily', 'Emma', 'Eva', 'Evelyn', 'Freya', 'Gabriella', 'Georgia', 'Grace', 'Hailey', 'Hannah',
	'Harper', 'Hazel', 'Isabella', 'Isabelle', 'Isla', 'Ivy', 'Jade', 'Jordyn', 'Julia', 'Kaylee', 'Keira', 'Lauren',
	'Layla', 'Leah', 'Liliana', 'Lillian', 'Lily', 'Lucy', 'Lyla', 'Mackenzie', 'Madelyn', 'Madison', 'Maya', 'Mia',
	'Mila', 'Mya', 'Natalie', 'Nora', 'Nova', 'Olivia', 'Ophelia', 'Paisley', 'Penelope', 'Peyton', 'Piper', 'Quinn',
	'Rachel', 'Riley', 'Rosalie', 'Rose', 'Ruby', 'Sadie', 'Savannah', 'Scarlett', 'Sienna', 'Sophia', 'Sophie',
	'Stella', 'Taylor', 'Victoria', 'Violet', 'Zoey'
];

const maleNames = [
	'Adam', 'Aiden', 'Alex', 'Alexander', 'Andrew', 'Arabia', 'Arthur', 'Asher', 'Austin', 'Australia', 'Avery',
	'Benjamin', 'Bennett', 'Blake', 'Brayden', 'Brazil', 'Brody', 'Caleb', 'Callum', 'Carson', 'Carter', 'Charlie',
	'Christian', 'Cole', 'Colton', 'Connor', 'Daniel', 'Declan', 'Dominic', 'Dylan', 'Easton', 'Edward', 'Eli',
	'Elias', 'Elijah', 'Elliot', 'Emmett', 'Ethan', 'Evan', 'Everett', 'Felix', 'Gabriel', 'Gavin', 'Germany',
	'Grayson', 'Harrison', 'Hayden', 'Henry', 'Hudson', 'Hunter', 'India', 'Isaac', 'Isaiah', 'Jace', 'Jack',
	'Jackson', 'Jacob', 'James', 'Jayden', 'John', 'Jordan', 'Joseph', 'Joshua', 'Julian', 'Kayden', 'Landon', 'Leo',
	'Levi', 'Liam', 'Lincoln', 'Logan', 'Luca', 'Lucas', 'Luke', 'Marcus', 'Mason', 'Matteo', 'Matthew', 'Maverick',
	'Max', 'Michael', 'Nathan', 'Nicholas', 'Noah', 'Nolan', 'Oliver', 'Owen', 'Parker', 'Riley', 'Rowan', 'Ryan',
	'Ryder', 'Samuel', 'Sebastian', 'Theo', 'Theodore', 'Thomas', 'Tristan', 'William', 'Wyatt', 'Xavier', 'Zachary',
	'Zayn'
];

const lastNames = [
	'Adams', 'Allard', 'Allen', 'Anderson', 'Andrews', 'Armstrong', 'Arsenault', 'Bailey', 'Baker', 'Beaudoin',
	'Beaulieu', 'Bedard', 'Belanger', 'Bell', 'Bennett', 'Benoit', 'Bergeron', 'Bernard', 'Bernier', 'Bertrand',
	'Berube', 'Bilodeau', 'Black', 'Blais', 'Boisvert', 'Bolduc', 'Bouchard', 'Boucher', 'Boudreau', 'Brooks',
	'Brown', 'Burns', 'Butler', 'Cameron', 'Campbell', 'Caron', 'Carter', 'Champagne', 'Chan', 'Charbonneau', 'Chen',
	'Clark', 'Clarke', 'Cloutier', 'Collins', 'Cook', 'Cooper', 'Cormier', 'Cote', 'Couture', 'Crawford', 'Cyr',
	'Davidson', 'Davies', 'Davis', 'Demers', 'Desjardins', 'Dion', 'Dube', 'Dubois', 'Dufour', 'Dupuis', 'Edwards',
	'Elliott', 'Ellis', 'Evans', 'Ferguson', 'Fisher', 'Fontaine', 'Fortier', 'Fortin', 'Foster', 'Fournier', 'Fraser',
	'Friesen', 'Gagne', 'Gagnon', 'Gallant', 'Gauthier', 'Gervais', 'Gibson', 'Gilbert', 'Gill', 'Girard', 'Giroux',
	'Gordon', 'Gosselin', 'Graham', 'Grant', 'Gray', 'Green', 'Grenier', 'Hall', 'Hamel', 'Hamilton', 'Harris',
	'Harrison', 'Harvey', 'Hebert', 'Henderson', 'Henry', 'Hill', 'Ho', 'Houle', 'Hughes', 'Hunt', 'Hunter', 'Jackson',
	'James', 'Johnson', 'Johnston', 'Jones', 'Kelly', 'Kennedy', 'Kerr', 'Khan', 'Kim', 'King', 'Klassen', 'Labelle',
	'Lachance', 'Lacroix', 'Lalonde', 'Lam', 'Lambert', 'Landry', 'Langlois', 'Lapointe', 'Lavoie', 'Leblanc',
	'Leclerc', 'Leduc', 'Lee', 'Lefebvre', 'Legault', 'Lemay', 'Lemieux', 'Lessard', 'Leung', 'Levesque', 'Lewis',
	'Li', 'Liu', 'Macdonald', 'Mackenzie', 'Maclean', 'Macleod', 'Marshall', 'Martel', 'Martin', 'Mason', 'Mcdonald',
	'Mckay', 'Mclean', 'Mcleod', 'Menard', 'Mercier', 'Michaud', 'Miller', 'Mills', 'Mitchell', 'Moore', 'Morgan',
	'Morin', 'Morris', 'Morrison', 'Murphy', 'Murray', 'Nadeau', 'Nelson', 'Ng', 'Nguyen', 'Ouellet', 'Ouellette',
	'Paquette', 'Paradis', 'Parent', 'Park', 'Parker', 'Parsons', 'Patel', 'Patterson', 'Paul', 'Pelletier', 'Perreault',
	'Perron', 'Perry', 'Peters', 'Phillips', 'Plante', 'Poirier', 'Poulin', 'Proulx', 'Raymond', 'Reid', 'Renaud',
	'Richard', 'Richardson', 'Robert', 'Roberts', 'Robertson', 'Robinson', 'Rogers', 'Rose', 'Ross', 'Rousseau', 'Roy',
	'Russell', 'Ryan', 'Savard', 'Schmidt', 'Scott', 'Seguin', 'Shaw', 'Simard', 'Simpson', 'Singh', 'Smith',
	'St-pierre', 'Stevens', 'Stewart', 'Taylor', 'Theriault', 'Therrien', 'Thibault', 'Thomas', 'Thompson', 'Thomson',
	'Tran', 'Tremblay', 'Turcotte', 'Turner', 'Villeneuve', 'Walker', 'Wallace', 'Walsh', 'Wang', 'Ward', 'Watson',
	'White', 'Wiebe', 'Williams', 'Wilson', 'Wong', 'Wood', 'Wright', 'Wu', 'Young', 'Yu', 'Zhang'
];

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames
};

export default namesData;
