import {IncomingMessage, request, ServerResponse} from 'http';
import {serviceListEpisodes } from '../services/list-episodes-services';
import { serviceListFilterEpisodes } from '../services/filter-episodes-services';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

export const  getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const content = await serviceListEpisodes();

    res.writeHead(content.statusCode, {'Content-Type': "application/json" });
    res.end(JSON.stringify(content.body));
    res.end();
};

export const getFilterEpisodes = async(
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const content: PodcastTransferModel = await serviceListFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {'Content-Type': "application/json"});
    res.end(JSON.stringify(content.body));
};