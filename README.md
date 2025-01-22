# Gerenciador de Podcast com Node

## Descrição

Um aplicativo de streaming para centralizar diferentes episódios de podcasts em formato de vídeo, categorizados para facilitar a navegação e organização.

## Domínio

Podcasts feitos em vídeos.

## Funcionalidades

- Listar episódios de podcasts organizados em seções por categorias, como:
  - Saúde
  - Bodybuilder
  - Mentalidade
  - Humor
  - Esporte
  - Corrida
- Filtrar episódios por nome do podcast.

## Como Funciona

Os episódios de podcasts serão exibidos organizados por categorias. Cada episódio conterá as seguintes informações:

- Nome do Podcast
- Nome do Episódio
- Imagem de Capa
- Link para o Vídeo
- Categorias relacionadas

Essas informações serão fornecidas por uma API Rest.

### Exemplo de Resposta da API

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    "link": "https://www.youtube.com/live/pQSuQmUfS30?si=beD7BMX7rjKc-HQD",
    "category": ["saude", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg",
    "link": "https://www.youtube.com/live/4KDGTdiOV4I?si=SCamWFhXeoclErLE",
    "category": ["esporte", "corrida"]
  }
]
```

## Como Implementar

- Desenvolver uma API Rest que retorne os dados necessários para cada episódio:
  - `podcastName`: Nome do Podcast
  - `episode`: Nome do Episódio
  - `videoId`: ID do Vídeo
  - `cover`: URL da Imagem de Capa
  - `link`: URL do Episódio
  - `category`: Lista de Categorias do Episódio

- Integrar a API a uma interface de frontend que exiba os episódios por categorias e ofereça um campo de busca para filtrar por nome do podcast.

---

**Tecnologias Sugeridas:**
- Backend: Node.js com Express
- Frontend: React ou qualquer framework de sua escolha
- Banco de Dados: MongoDB ou PostgreSQL
- Hospedagem: Heroku, Vercel, ou qualquer serviço de sua preferência

---

Desenvolvido por Davy Lopes Oliveira.
