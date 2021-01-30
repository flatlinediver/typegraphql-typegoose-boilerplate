import { ObjectId } from 'mongoose';
import { LogModel, LogTypeModel, TagModel } from '../models';

export class LogService {
    getAll() {
        return LogModel.find();
    }

    async create(props: {logType: ObjectId, date: Date}) {
        const log = await LogModel.create(props);
        await LogTypeModel.populate(log, { path: 'logType' });
        await TagModel.populate(log, { path: 'logType.tags' });
        return log;  
    }
};