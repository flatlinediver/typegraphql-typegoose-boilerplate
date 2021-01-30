import { getModelForClass, prop, plugin } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import mongooseSlugPlugin from 'mongoose-slug-plugin';
import { getSchemaOptions } from '../utils';
import { Base } from './base.model';

@plugin(mongooseSlugPlugin, { tmpl: '<%=label%>' })
@ObjectType()
export class Tag extends Base {
  @Field(_type => String)
  @prop({ required: true, type: String })
  label: string;

  @Field(_type => String, {nullable: true})
  @prop({ required: false, type: String })
  description?: string;

  @Field(_type => String)
  @prop({ required: true, type: String })
  slug?: string;

};

export const TagModel = getModelForClass(Tag, getSchemaOptions());
