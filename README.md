# SUCA-Backend

API do projeto SUCA, responsavel pelos servicos de: 

	- Listar todos os funcionarios
	
		- url: GET "https://suca-a.herokuapp.com/funcionarios"

	- Cadastro de funcionarios
	
		- url: Post "https://suca-a.herokuapp.com/funcionarios"
	 	- Body: { nome: String(Required), funcao: String(Required), setor: String(Required) }

	- Listar os funcionarios presentes
	
		- url: GET "https://suca-a.herokuapp.com/funcionarios/presentes"

	- Check-in e check-out de pessoas
	
		- url: Post "https://suca-a.herokuapp.com/funcionario/:id"

	- Deletar funcionarios
	
		- url: Delete "https://suca-a.herokuapp.com/funcionarios"
		- Body: { _id: String(Required) }
