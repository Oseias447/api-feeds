# api-feeds

### Executar a aplicação
> git clone https://github.com/Oseias447/api-feeds.git

> cd api-feeds

> yarn

> yarn migrate

> yarn dev

# Requisitos
___
> Yarn >= 1.21.1

> Postgres >= 12.2

> Node >= 12.16.3

> Insomnia ou Postman

# Testes
___
> yarn test

# Rotas
___
> GET: /feeds {} - Lista todos os Feeds

> POST: /feed { name(string), avatar(string), url_image(string) } - Cria novo Feed

> PUT: /feed/:id { name(string), avatar(string), url_image(string) } - Altera Feed

> DELETE: /feed/:id {} - Exclui Feed
