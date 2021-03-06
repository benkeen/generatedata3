import { CountryNames } from '~types/countries';

const femaleNames = [
	'Adriana', 'Agustina', 'Aida', 'Aldea', 'Alejandra', 'Alicia', 'Alma', 'Almudena', 'Amalia', 'Amaya', 'Amparo',
	'Ana', 'Anabel', 'Andrea', 'Andreina', 'Anita', 'Antonella', 'Antonia', 'Araceli', 'Aurora', 'Beatriz', 'Bettina',
	'Bianca', 'Blanca', 'Blanche', 'Bonita', 'Cari', 'Carina', 'Carla', 'Carlota', 'Carlota', 'Carlotta', 'Carmelita',
	'Carolina', 'Catalina', 'Celia', 'Chara', 'Christina', 'Claudia', 'Concepción', 'Conchita', 'Consuelo', 'Cristina',
	'Cynthia', 'Delia', 'Diana', 'Dolores', 'Dora', 'Elena', 'Eliana', 'Elisa', 'Elvira', 'Erika', 'Esperanza', 'Ester',
	'Eugenia', 'Eva', 'Fatima', 'Fernanda', 'Fiorella', 'Flavia', 'Flora', 'Gabriela', 'Garbiñe', 'Gisela', 'Gloria',
	'Guiomar', 'Helena', 'Hilda', 'Ignacia', 'Ileana', 'Ilona', 'Imelda', 'Ines', 'Inez', 'Irene', 'Iris', 'Isa',
	'Isabel', 'Isabella', 'Ivette', 'Ivonne', 'Jacin', 'Jacqueline', 'Javiera', 'Joaquina', 'Josefa', 'Josefina',
	'Juana', 'Julia', 'Justina', 'Karina', 'Lana', 'Lara', 'Laura', 'Lena', 'Lidia', 'Liliana', 'Lolita', 'Lorena',
	'Luciana', 'Luisa', 'Lupe', 'Lupita', 'Luz', 'Macarena', 'Magdalena', 'Manuela', 'Marcela', 'Margarita', 'Maria',
	'María', 'María', 'María', 'Mariana', 'Mariela', 'Marina', 'Marisa', 'Marisela', 'Marisol', 'Marta', 'Martina',
	'Maru', 'Maruja', 'Maura', 'Maya', 'Melania', 'Melina', 'Mercedes', 'Merilyn', 'Milagros', 'Milena', 'Millaray',
	'Mirta', 'Morena', 'Nadia', 'Natalia', 'Nazaret', 'Nena', 'Noelia', 'Núria', 'Olga', 'Paloma', 'Paula', 'Paulina',
	'Pierina', 'Pilar', 'Purita', 'Ramona', 'Raquel', 'Rita', 'Rocío', 'Rosa', 'Rosalia', 'Rosario', 'Salma',
	'Samara', 'Sandra', 'Silvia', 'Silvina', 'Simone', 'Soledad', 'Sonia', 'Sophia', 'Soraya', 'Tamara', 'Tara',
	'Tatiana', 'Teresa', 'Tina', 'Tomasa', 'Tona', 'Tonia', 'Urraca', 'Valentina', 'Valeria', 'Veronica', 'Victoria',
	'Vilma', 'Viola', 'Violeta', 'Virginia', 'Viridiana', 'Xiomara', 'Xóchitl', 'Yanet', 'Yazmin', 'Zulema'
];

const maleNames = [
	'Aarón', 'Abel', 'Abelardo', 'Abraham', 'Adan', 'Ademar', 'Adrià', 'Adriano', 'Agustín', 'Alberto', 'Alejandro',
	'Alfredo', 'Alonso', 'Alphons', 'Álvaro', 'Amílcar', 'Angel', 'José', 'Aníbal', 'Antero', 'Antonin', 'Antonio',
	'Armando', 'Arnaldo', 'Arnulfo', 'Arsenio', 'Arturo', 'Augusto', 'Aznar', 'Benito', 'Bernardo', 'Beto', 'Bruno',
	'Carlito', 'Carlo', 'Carlos', 'Carlos', 'Carlos', 'Carmelo', 'Cayetano', 'Cesar', 'Charli', 'Cipriano',
	'Cristhian', 'Cristóbal', 'Cuauhtémoc', 'Danilo', 'List', 'Dámaso', 'Damián', 'Daniel', 'Dario', 'David', 'Diego',
	'Edgardo', 'Eduardo', 'Efraín', 'Elbio', 'Eliseo', 'Emilio', 'Enrique', 'Ernesto', 'Esteban', 'Eugenio', 'Ezequiel',
	'Fabricio', 'Fausto', 'Federico', 'Feliciano', 'Felipe', 'Fernando', 'Fernando', 'Flavio', 'Florencio', 'Florentin',
	'Francisco', 'Fulgencio', 'Gabriel', 'Gaspar', 'Genovevo', 'Geronimo', 'Gilberto', 'Ginés', 'Gonzalo', 'Gregorio',
	'Guido', 'Guillermo', 'Gustavo', 'Gutierre', 'Hector', 'Heriberto', 'Hernán', 'Hernándo', 'Hugo', 'Ignacio',
	'Inigo', 'Jacinto', 'Jaime', 'Jairo', 'Javier', 'Jerónimo', 'Jhon', 'Jimeno', 'Joaquín', 'Jorge', 'José', 'José',
	'José', 'José', 'José', 'Juan', 'Juan', 'Juanfran', 'Juanma', 'Julián', 'Julio', 'Julio', 'Jusepe', 'Leandro',
	'Leon', 'Leonardo', 'Leopoldo', 'Liberato', 'Liberto', 'Lorenzo', 'Lotario', 'Luca', 'Lucero', 'Luciano', 'Lucio',
	'Luis', 'Maikel', 'Manolito', 'Manolo', 'Manrique', 'Manuel', 'José', 'Marcelino', 'Marcelo', 'Marco', 'Marcos',
	'Mariano', 'Mario', 'Mateo', 'Matías', 'Mauricio', 'Maximiliano', 'Melquíades', 'Miguel', 'Miguel', 'Milo',
	'Nacho', 'Nahuel', 'Napoleon', 'Narciso', 'Nazario', 'Nemesio', 'Nestor', 'Nicolas', 'Niño', 'Noe', 'Nuño',
	'Obdulio', 'Omar', 'Osorio', 'Osvaldo', 'Oswaldo', 'Pablo', 'Paco', 'Panfilo', 'Pascual', 'Pasqual', 'Patricio',
	'Pedro', 'Pepe', 'Perez', 'Primitivo', 'Quique', 'Rafa', 'Ramiro', 'Ramón', 'Raphael', 'Raul', 'Reinaldo', 'Reno',
	'Ricardo', 'Roberto', 'Rodolfo', 'Rodrigo', 'Rogelio', 'Rolando', 'Roman', 'Ronaldo', 'Rosendo', 'Salvador',
	'Samuel', 'Santiago', 'Sebastian', 'Servando', 'Silvestre', 'Sixto', 'Suero', 'Tato', 'Tomás', 'Toni', 'Tonin',
	'Tonino', 'Tonio', 'Tono', 'Ulises', 'Venancio', 'Vicente', 'Víctor', 'Victorino', 'Vladimiro', 'Wenceslao',
	'Wilfredo', 'Xavi'
];

const lastNames = [
	'Aguilar', 'Alonso', 'Alvarez', 'Andres', 'Arias', 'Blanco', 'Bravo', 'Caballero', 'Cabrera', 'Calvo', 'Campos',
	'Cano', 'Carmona', 'Carrasco', 'Casado', 'Castillo', 'Castro', 'Cortes', 'Crespo', 'Cruz', 'Delgado', 'Diaz',
	'Diez', 'Dominguez', 'Duran', 'Esteban', 'Fernandez', 'Ferrer', 'Flores', 'Fuentes', 'Gallego', 'Garcia', 'Garrido',
	'Gil', 'Gimenez', 'Gomez', 'Gonzalez', 'Guerrero', 'Gutierrez', 'Hernandez', 'Herrera', 'Herrero', 'Hidalgo',
	'Iba', 'Ibañez', 'Iglesias', 'Izquierdo', 'Jimenez', 'Leon', 'Lopez', 'Lorenzo', 'Lozano', 'Marin', 'Marquez',
	'Marti', 'Martin', 'Martinez', 'Medina', 'Mendez', 'Merino', 'Miguel', 'Molina', 'Montero', 'Mora', 'Morales',
	'Moreno', 'Moya', 'Muñoz', 'Muﾑoz', 'Navarro', 'Nieto', 'Nuñez', 'Nuﾑez', 'Ortega', 'Ortiz', 'Pardo', 'Pascual',
	'Pastor', 'Perez', 'Peña', 'Prieto', 'Ramirez', 'Ramos', 'Redondo', 'Reyes', 'Rodriguez', 'Romero', 'Rubio',
	'Ruiz', 'Saez', 'Sanchez', 'Santana', 'Santos', 'Sanz', 'Serrano', 'Soler', 'Soto', 'Suarez', 'Torres', 'Vazquez',
	'Vega', 'Velasco', 'Vicente', 'Vidal', 'Vila', 'ﾑez'
];

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames
};

export default namesData;
