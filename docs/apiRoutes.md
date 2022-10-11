# Rotas da api

A aplicação usa JSON para transmissão de dados via HTTP.

## /user:

    POST:
        descrição:
            - Cria um usuario.
            - A propriedade senha vai ser emcriptada, por isso a Response deve retorna algo diferente do fornecido.

        schema:
            {
                "name": "fulano"
                "email": "Fulano@gmail.com",
                "password": "12345678"
            }

        respostas:
            200:
                usuario criado com sucesso
                schema:
                    {
                        "name": "fulano"
                        "email": "Fulano@gmail.com",
                        "password": "asd124asd23"
                    }

