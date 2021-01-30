import { Arg, Mutation, Resolver } from 'type-graphql';
import { Tag } from '../models';
import { TagService } from '../services';
import { createBaseResolver } from './base.resolver';

const BaseResolver = createBaseResolver("Tags", Tag, TagService);

@Resolver(_of => Tag)
export class TagResolver extends BaseResolver {

  @Mutation(_returns => Tag)
  async createTag(
    @Arg('label', type => String) label: string,
    @Arg('description', { nullable: true }) description?: string,
  ): Promise<Tag> {
    return await this.service.create({
      label,
      description
    });
  }
}


