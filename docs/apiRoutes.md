# Rotas da api

A aplicação usa JSON para transmissão de dados via HTTP.

## /user:

    POST:
        descrição:
            - Cria um usuario.
            - A propriedade senha vai ser emcriptada, por isso a Response deve retorna algo diferente do fornecido.

        schema:
            {
                "name": "Fulano",
                "password": "12345678"
            }

        respostas:
            200:
                usuario criado com sucesso
                schema:
                    {
                        "id": 1,
                        "name": "Fulano",
                        "password": "asd124asd23"
                    }

