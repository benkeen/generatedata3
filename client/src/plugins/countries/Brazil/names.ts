import { CountryNames } from '~types/countries';

const femaleNames = [
	'Agatha', 'Agatha Sophia', 'Agnes', 'Alana', 'Alexia', 'Alice', 'Alice Vitória', 'Aline', 'Alícia', 'Amanda',
	'Ana', 'Ana Alice', 'Ana Beatriz', 'Ana Carolina', 'Ana Cecília', 'Ana Clara', 'Ana Elisa', 'Ana Helena',
	'Ana Júlia', 'Ana Lara', 'Ana Laura', 'Ana Liz', 'Ana Luísa', 'Ana Lívia', 'Ana Maria', 'Ana Sophia', 'Ana Vitória',
	'Analice', 'Analu', 'Angelina', 'Anne', 'Antonella', 'Antônia', 'Ariella', 'Aurora', 'Ayla', 'Ayla Sophia',
	'Beatriz', 'Bella', 'Betina', 'Bianca', 'Brenda', 'Bruna', 'Bárbara', 'Camila', 'Camilly', 'Carolina',
	'Caroline', 'Catarina', 'Cecília', 'Celina', 'Chloe', 'Clara', 'Clarice', 'Diana', 'Débora', 'Eduarda', 'Elis',
	'Elisa', 'Ellen', 'Eloá', 'Eloá Victoria', 'Emanuela', 'Emanuelly', 'Emanuelly Vitória', 'Emilly', 'Emilly Vitória',
	'Esther', 'Eva', 'Evelyn', 'Fernanda', 'Flora', 'Gabriela', 'Gabrielly', 'Giovanna', 'Giulia', 'Hadassa', 'Hannah',
	'Helena', 'Helena Vitória', 'Heloise', 'Heloísa', 'Heloísa Vitória', 'Iris', 'Isa', 'Isabel', 'Isabella',
	'Isabelly', 'Isadora', 'Isis', 'Jade', 'Joana', 'Juliana', 'Júlia', 'Kiara', 'Lara', 'Lara Sophia', 'Larissa',
	'Laura', 'Laura Beatriz', 'Laura Sophia', 'Lauren', 'Lavínia', 'Laís', 'Leonor', 'Letícia', 'Lia', 'Liz',
	'Liz Maria', 'Lorena', 'Lorena Vitória', 'Louise', 'Luana', 'Luara', 'Luiza', 'Luna', 'Luísa Helena', 'Lívia',
	'Lívia Maria', 'Madalena', 'Maitê', 'Malú', 'Manoela', 'Manu', 'Manuela', 'Manuelly', 'Marcela', 'Maria',
	'Maria Alice', 'Maria Antonella', 'Maria Antônia', 'Maria Beatriz', 'Maria Cecília', 'Maria Clara', 'Maria Eduarda',
	'Maria Elisa', 'Maria Eloá', 'Maria Esther', 'Maria Fernanda', 'Maria Flor', 'Maria Gabriela', 'Maria Helena',
	'Maria Heloísa', 'Maria Isabel', 'Maria Isabella', 'Maria Isadora', 'Maria Isis', 'Maria Júlia', 'Maria Laura',
	'Maria Liz', 'Maria Luiza', 'Maria Rita', 'Maria Sophia', 'Maria Teresa', 'Maria Valentina', 'Maria Vitória',
	'Mariah', 'Mariana', 'Marina', 'Martina', 'Maya', 'Maísa', 'Mel', 'Melina', 'Melinda', 'Melissa', 'Micaela',
	'Milena', 'Mirella', 'Natália', 'Nicole', 'Nina', 'Olívia', 'Paola', 'Pietra', 'Pérola', 'Rafaela', 'Raquel',
	'Rayssa', 'Rebeca', 'Safira', 'Sarah', 'Serena', 'Sophia', 'Sophia Emanuelly', 'Sophia Vitória', 'Sophie',
	'Stella', 'Tainá', 'Teresa', 'Thalita', 'Thayla', 'Theodora', 'Valentina', 'Vitória', 'Yara', 'Yasmin',
	'Yasmin Vitória', 'Yohanna', 'Zoe'
];

const maleNames = [
	'Abner', 'Adrian', 'Afonso', 'Alexandre', 'André', 'Anthony', 'Anthony Gabriel', 'Anthony Miguel', 'Antônio',
	'Apolo', 'Aquiles', 'Arthur', 'Arthur Felipe', 'Arthur Gabriel', 'Arthur Henrique', 'Arthur Miguel', 'Asafe',
	'Augusto', 'Benjamin', 'Bento', 'Benício', 'Bernardo', 'Bernardo Henrique', 'Breno', 'Bruno', 'Bryan',
	'Bryan Henrique', 'Caetano', 'Caio', 'Caleb', 'Carlos Eduardo', 'Carlos Henrique', 'Cauã', 'Christian',
	'Christopher', 'Conrado', 'Daniel', 'Danilo', 'Dante', 'Davi', 'Davi Henrique', 'Davi Lucas', 'Davi Lucca',
	'Davi Luiz', 'Davi Miguel', 'Derick', 'Diego', 'Diogo', 'Dom', 'Dominic', 'Dylan', 'Eduardo', 'Elias', 'Emanuel',
	'Enrico', 'Enzo', 'Enzo Gabriel', 'Enzo Miguel', 'Erick', 'Estêvão', 'Ezequiel', 'Felipe', 'Fernando', 'Filipe',
	'Francisco', 'Frederico', 'Gabriel', 'Gabriel Henrique', 'Gael', 'Guilherme', 'Gustavo', 'Gustavo Henrique',
	'Heitor', 'Heitor Gabriel', 'Heitor Henrique', 'Heitor Miguel', 'Henrique', 'Henry', 'Henry Gabriel', 'Hugo',
	'Igor', 'Inácio', 'Isaac', 'Israel', 'Joaquim', 'Jorge', 'Josué', 'José', 'José Arthur', 'José Augusto',
	'José Felipe', 'José Henrique', 'José Lucas', 'José Miguel', 'José Pedro', 'João', 'João Antônio', 'João Arthur',
	'João Emanuel', 'João Felipe', 'João Gabriel', 'João Guilherme', 'João Henrique', 'João Lucas', 'João Lucca',
	'João Miguel', 'João Paulo', 'João Pedro', 'João Vicente', 'João Vitor', 'Kaique', 'Kauê', 'Kevin', 'Leandro',
	'Leonardo', 'Levi', 'Liam', 'Lorenzo', 'Lorenzo Gabriel', 'Lorenzo Henrique', 'Lorenzo Miguel', 'Luan', 'Lucas',
	'Lucas Gabriel', 'Lucca', 'Luigi', 'Luiz', 'Luiz Antônio', 'Luiz Eduardo', 'Luiz Felipe', 'Luiz Fernando',
	'Luiz Guilherme', 'Luiz Gustavo', 'Luiz Henrique', 'Luiz Miguel', 'Luiz Otávio', 'Marcelo', 'Marcos', 'Martin',
	'Matheus', 'Matheus Henrique', 'Mathias', 'Matteo', 'Miguel', 'Miguel Henrique', 'Moisés', 'Murilo', 'Nathan',
	'Nicolas', 'Nicolas Gabriel', 'Noah', 'Oliver', 'Otto', 'Otávio', 'Paulo', 'Paulo Henrique', 'Pedro',
	'Pedro Arthur', 'Pedro Augusto', 'Pedro Gabriel', 'Pedro Henrique', 'Pedro Lucas', 'Pedro Lucca', 'Pedro Miguel',
	'Pietro', 'Pietro Henrique', 'Rael', 'Rafael', 'Raul', 'Ravi', 'Renan', 'Ricardo', 'Richard', 'Rodrigo', 'Ruan',
	'Ryan', 'Samuel', 'Samuel Henrique', 'Santiago', 'Saulo', 'Thales', 'Theodoro', 'Thiago', 'Thomas', 'Théo',
	'Théo Henrique', 'Tomás', 'Valentim', 'Vicente', 'Vinícius', 'Vitor', 'Vitor Gabriel', 'Vitor Hugo', 'William',
	'Yago', 'Yan', 'Yuri', 'Álvaro', 'Ícaro', 'Ítalo'
];

const lastNames = [
	'da Silva', 'dos Santos', 'Pereira', 'Alves', 'Ferreira', 'Rodrigues', 'Silva', 'de Oliveira', 'de Souza', 'Gomes',
	'Santos', 'Oliveira', 'Ribeiro', 'de Jesus', 'Soares', 'Martins', 'Barbosa', 'Vieira', 'Souza', 'Lopes', 'Lima',
	'Batista', 'Fernandes', 'Costa', 'de Sousa', 'Dias', 'da Conceiçao', 'de Lima', 'do Nascimento', 'Moreira', 'Nunes',
	'da Costa', 'Araujo', 'Marques', 'Cardoso', 'de Almeida', 'Mendes', 'Nascimento', 'Teixeira', 'Ramos', 'Carvalho',
	'Rosa', 'Almeida', 'Sousa', 'Machado', 'Rocha', 'Santana', 'de Araujo', 'Borges', 'Bezerra', 'Henrique', 'Pinheiro',
	'de Carvalho', 'Monteiro', 'Correa', 'Aparecido', 'Andrade', 'Pinto', 'da Cruz', 'de Paula', 'de Freitas',
	'Nogueira', 'Leite', 'Tavares', 'Miranda', 'Pires', 'Garcia', 'dos Reis', 'Xavier', 'do Carmo', 'Duarte', 'de Andrade',
	'Freitas', 'Correia', 'de Fatima', 'Barros', 'Coelho', 'Gonçalves', 'de Melo', 'Reis', 'Viana', 'Campos', 'Moraes',
	'Felix', 'Brito', 'Cordeiro', 'Neves', 'Moura', 'Guimaraes', 'Farias', 'da Rocha', 'de Castro', 'Carneiro',
	'Silveira', 'Candido', 'Melo', 'Medeiros', 'de Assis', 'Bispo', 'de Lourdes', 'Cruz', 'Dantas', 'Maciel', 'Morais',
	'Braga', 'Cavalcante', 'Antunes', 'Siqueira', 'de Moura', 'Domingos', 'Macedo', 'de Santana', 'Fonseca', 'Caetano',
	'Castro', 'Menezes', 'da Cunha', 'de Moraes', 'dos Anjos', 'Inacio', 'Matos', 'Sales', 'Cunha', 'Chaves',
	'de Brito', 'Barreto', 'Queiroz', 'Magalhaes', 'Azevedo', 'Mota', 'Evangelista', 'Bento', 'Maia', 'Amorim',
	'Cabral', 'Bueno', 'Mariano', 'Torres', 'Franca', 'Marinho', 'Amaral', 'Guedes', 'Freire', 'Leal', 'da Rosa',
	'Matias', 'Paulino', 'Sampaio', 'Das Gracas', 'Mendonca', 'Camargo', 'Franco', 'Pacheco', 'Sántos', 'Aguiar',
	'de Barros', 'de Morais', 'Diniz', 'Santiago', 'Figueiredo', 'Lemos', 'Muniz', 'Dutra', 'Bastos', 'da Silveira',
	'Vasconcelos', 'de Azevedo', 'da Luz', 'Faria', 'Trindade', 'Gonzaga', 'Domingues', 'Paiva', 'Feitosa', 'de Abreu',
	'Teles', 'de Matos', 'Braz', 'Coutinho', 'Nonato', 'Messias', 'Chagas', 'Simoes', 'Fagundes', 'Brandao', 'Das Dores',
	'Teodoro', 'Firmino', 'Vaz', 'de Campos', 'Barboza', 'Das Chagas', 'Galdino', 'Custodio', 'Abreu', 'Das Neves',
	'Peixoto', 'Ferraz', 'Rezende', 'Furtado'
];

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames
};

export default namesData;
