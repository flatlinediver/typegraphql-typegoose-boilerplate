import { ObjectId } from 'mongoose';
import { Arg, ID, Mutation, Resolver } from 'type-graphql';
import { Log } from '../models';
import { LogService } from '../services';
import { createBaseResolver } from './base.resolver';

const BaseResolver = createBaseResolver("Logs", Log, LogService);

@Resolver(_of => Log)
export class LogResolver extends BaseResolver {

  @Mutation(_returns => Log)
  async createLog(
      @Arg("logType", type => ID!) logType: ObjectId,
      @Arg("date", type => Date!) date: ObjectId
    )  {
    return await this.service.create({logType, date});
  }

}


