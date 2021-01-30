import { getModelForClass, prop, plugin, Ref } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import mongooseSlugPlugin from 'mongoose-slug-plugin';
import { getSchemaOptions } from '../utils';
import { Tag } from './tag.model';
import { Base } from './base.model';

@plugin(mongooseSlugPlugin, { tmpl: '<%=label%>' })
@ObjectType()
export class LogType extends Base {

  @Field(_type => String)
  @prop({ required: true, type: String })
  label: string;

  @Field(_type => String, { nullable: true })
  @prop({ required: false, type: String })
  description?: string;

  @Field(_type => String)
  @prop({ required: true, type: String })
  slug?: string;

  @Field(type => [Tag])
  @prop({ ref: Tag, required: true })
  tags: Ref<Tag>[];

};

export const LogTypeModel = getModelForClass(LogType, getSchemaOptions());
