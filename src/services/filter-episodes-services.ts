
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model";

export const serviceListFilterEpisodes = async (podcastName: string | undefined): Promise <PodcastTransferModel> => {

    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []

    };

    //busca os dados 
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //verifica se tem conteudo 

    responseFormat.statusCode = data.length !== 0 ? 200 : 204;
    responseFormat.body = data;

    return responseFormat;
}