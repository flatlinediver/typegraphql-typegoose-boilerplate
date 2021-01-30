import { TagModel, LogTypeModel } from '../models';
import { TagInput } from '../inputTypes';

export class LogTypeService {
    getAll(){
        return LogTypeModel.find();
    }
    async create(props: {label: string; description?: string; tags: TagInput[];}) {
        const logType = await LogTypeModel.create(props);
        await TagModel.populate(logType, { path: 'tags' })
        return logType;
    }
};