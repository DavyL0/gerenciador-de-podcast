# gerenciador de podcast

 Gerenciador de Podcast Com Node

## Descrição

Um app estilo de streaming, onde possa centralizar diferentes episódios podcasts

#Dominio

Podcasts Feitos em vídeos

## features

- Listar os episódios dos podcasts em seções de categorias
  - saude, bodybuilder, mentalidade, humor, esporte, corrida
- Filtrar episódios por nome de podcast

## como

Listar os epi'sodios podcast em sessões  de categoria

### Como vou implementar: 

Vou retornar em uma API Rest o nome do Podcast , nome do episódio, iimagem de capa, link, category

```json
[{
	podcastName: "flow",
	episode: "CBUM - Flow #319",
	videoId: "pQSuQmUfS30",
	cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
	link: "https://www.youtube.com/live/pQSuQmUfS30?si=beD7BMX7rjKc-HQD",
	category: ["saude", "bodybuilder"]

},
{
	podcastName: "flow",
	episode: "RUBENS BARRICHELLO - Flow #339",
	videoId: "4KDGTdiOV4I",
	cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg",
	link: "https://www.youtube.com/live/4KDGTdiOV4I?si=SCamWFhXeoclErLE",
	category: ["esporte", "corrida"]

}
]
```
