import { CountryNames } from '~types/countries';

const femaleNames = [
	'Alexandra', 'Alice', 'Alicia', 'Aline', 'Alison', 'Amandine', 'Anaïs', 'Anissa', 'Anna', 'Audrey', 'Aurore',
	'Aurélie', 'Carla', 'Caroline', 'Cassandra', 'Celia', 'Charline', 'Charlotte', 'Chloé', 'Cindy', 'Claire',
	'Clémentine', 'Céline', 'Déborah', 'Elisa', 'Elisabeth', 'Elise', 'Eloïse', 'Emeline', 'Emilie', 'Emma', 'Estelle',
	'Fanny', 'Florence', 'Florine', 'Gaëlle', 'Inès', 'Jade', 'Jeanne', 'Jennifer', 'Julie', 'Juliette', 'Justine',
	'Kelly', 'Kim', 'Laetitia', 'Lara', 'Laure', 'Laurie', 'Leila', 'Lisa', 'Lola', 'Lou', 'Louise', 'Lucie', 'Léa',
	'Léna', 'Marine', 'Maelle', 'Manon', 'Margaux', 'Marie', 'Marion', 'Mathilde', 'Maurine', 'Morgane', 'Mégane',
	'Mélanie', 'Mélissa', 'Naomi', 'Nina', 'Nora', 'Noémie ', 'Océane', 'Ophélie', 'Pauline', 'Rachel', 'Sara',
	'Sofia', 'Sophie', 'Stephanie', 'Victoria', 'Virginie', 'Wendy', 'Yasmine', 'Alix', 'Amelie', 'Camille', 'Clara',
	'Clémence', 'Elodie', 'Helene', 'Jessica', 'Laura', 'Salomé', 'Sarah', 'Valentine', 'Valerie', 'Vanessa', 'Zoe'
];

const maleNames = [
	'Adrien', 'Alexandre', 'Ali', 'Andy', 'Anthony', 'Antonin', 'Arnaud', 'Arno', 'Aurélien', 'Axel', 'Ben', 'Benjamin',
	'Benoît', 'Boris', 'Bryan', 'Corentin', 'Cyril', 'Cédric', 'Danny', 'David', 'Dimitri', 'Dorian', 'Dylan', 'Emile',
	'Florent', 'François', 'Gauthier', 'Gaëtan', 'Geoffrey', 'Gilles', 'Glenn', 'Grégoire', 'Grégory', 'Guillaume',
	'Jason', 'Jean', 'John', 'Jonas', 'Jordan', 'Julien', 'Justin', 'Jérémy', 'Karim', 'Kevin', 'Killian', 'Laurent',
	'Leo', 'Loic', 'Louis', 'Luca', 'Lucas', 'Mael', 'Martin', 'Mathieu', 'Matteo', 'Matthias', 'Max', 'Maxence',
	'Maxime', 'Michael', 'Nicolas', 'Olivier', 'Pierre', 'Péter', 'Quentin', 'Raphael', 'Renaud', 'Robin', 'Romain',
	'Rémi', 'Samuel', 'Sebastien', 'Simon', 'Stéphane', 'Tanguy', 'Thibaut', 'Thomas', 'Tom', 'Tony', 'Tristan',
	'Valentin', 'William', 'Xavier', 'Yannick', 'Alexis', 'Antoine', 'Arthur', 'Aymeric', 'Charles', 'Clement',
	'Florian', 'Hugo', 'Ilias', 'Jerome', 'Jonathan', 'Marco', 'Mohamed', 'Nathan', 'Noah', 'Vincent'
];

const lastNames = [
	'Aakster', 'Berg', 'Vincent', 'Bezuindenhout', 'Bouwmeester', 'Bunschoten', 'Cruyssen', 'Dam', 'De Witte',
	'Eikenboom', 'Elzinga', 'Geelen', 'Aaldenberg', 'Haak', 'Haanraads', 'Hagen', 'Heeren', 'Hendrix', 'Hoedemaker',
	'Holt', 'Janssens', 'Jonker', 'Kappel', 'Aarden', 'Klein', 'Kloet', 'Koopman', 'Kuiper', 'Maes', 'Mertens',
	'Offermans', 'Peerenboom', 'Peeters', 'Prinsen', 'Aarle', 'Rademaker', 'Rietveld', 'Roggeveen', 'Romeijnders',
	'Smet', 'Spijker', 'Ter Avest', 'Van Aalsburg', 'Van Alphen', 'Van Assen', 'Achterberg', 'Van Der Aart',
	'Archambault', 'Beauchene', 'Beaulieu', 'Bellamy', 'Berger', 'Blanc', 'Boivin', 'Borde', 'Brisbois', 'Achthoven',
	'Chaput', 'Chastain', 'Chevalier', 'Cloutier', 'Cousineau', 'Deforest', 'Dubois', 'Dumont', 'Duval', 'Fabre',
	'Adrichem', 'Fontaine', 'Gagneux', 'Garcon', 'Janvier', 'Lachapelle', 'Lamar', 'Lane', 'Langlais', 'Lavigne',
	'Lemaire', 'Baardwijk', 'Leroux', 'Marchand', 'Monet', 'Neuville', 'Petit', 'Plamondon', 'Plourde', 'Poirier',
	'Poulin', 'Proulx', 'Bakhuizen', 'Royer', 'Savatier', 'Segal', 'Tailler', 'Tasse', 'Travers', 'Tremblay', 'Tremble',
	'Victor', 'Villenueve'
];

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames
};

export default namesData;

