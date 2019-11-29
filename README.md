# SUCA-Backend

API do projeto SUCA, responsavel pelos servicos de: 

	- Listar todos os funcionarios
	
		- url: GET "https://suca-a.herokuapp.com/funcionarios"

	- Ver as Informaçoes de um funcionario
		
		- url: POST "https://suca-a.herokuapp.com/funcionario/info"
		- Body: { id: String(Required) }

	- Cadastrar funcionarios
	
		- url: POST "https://suca-a.herokuapp.com/funcionario"
	 	- Body: { nome: String(Required), funcao: String(Required), setor: String(Required) }

	- Listar os funcionarios presentes
	
		- url: GET "https://suca-a.herokuapp.com/funcionarios/presentes"

	- Check-in e check-out de pessoas
	
		- url: GET "https://suca-a.herokuapp.com/funcionario/:id/entradaSaida"

	- Alterar informações do usuario( Nome, Função, Setor)

		- url: PUT "https://suca-a.herokuapp.com/funcionario"
		- Body: { nome: String, funcao: String, setor: String }

	- Deletar funcionarios
	
		- url: Delete "https://suca-a.herokuapp.com/funcionario"
		- Body: { _id: String(Required) }
