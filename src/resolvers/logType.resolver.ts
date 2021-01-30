import { Arg, Mutation, Resolver } from 'type-graphql';
import { LogType } from '../models';
import { LogTypeService } from '../services';
import { TagInput } from '../inputTypes';
import { createBaseResolver } from './base.resolver';

const BaseResolver = createBaseResolver("LogTypes", LogType, LogTypeService);
@Resolver(_of => LogType)
export class LogTypeResolver extends BaseResolver {

  @Mutation(_returns => LogType)
  async createLogType(
    @Arg('label', type => String) label: string,
    @Arg("tags", type => [TagInput!]!) tags: TagInput[],
    @Arg('description', { nullable: true }) description?: string
  ) {
    return await this.service.create({
      label,
      tags,
      description
    });
  }
}


