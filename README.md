[![CodeQL](https://github.com/mardenrafael/contaboi-backend/actions/workflows/codeql.yml/badge.svg)](https://github.com/mardenrafael/contaboi-backend/actions/workflows/codeql.yml)

# AGROBOV API

Clone o repositorio localmente e instale as dependencias do projeto

```
    git clone https://github.com/mardenrafael/contaboi-backend.git
    cd contaboi-backend
    npm install
```

Copie o arquivo .env.example e renomeie para para .env e altere as variaveis de ambiente.

![image](https://user-images.githubusercontent.com/69557606/194773829-d025fc2a-987f-4300-ba0b-6d7a95280f58.png)


### Iniciar servidor de desenvolvimento

Iniciando servidor

```console
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```
Derrubando servidor

```console
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
```


### Iniciar servidor de produção

Iniciando servidor

```console
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
Derrubando servidor

```console
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v
```