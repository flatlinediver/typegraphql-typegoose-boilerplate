import { TagModel } from '../models';

export class TagService {
    getAll(){
        return TagModel.find();
    }
    create(tag: {label: string; description?: string;}) {
        return TagModel.create(tag);  
    }
};