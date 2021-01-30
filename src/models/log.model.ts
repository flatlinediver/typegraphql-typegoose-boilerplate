import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { getSchemaOptions } from '../utils';
import { LogType } from './logType.model';
import { Base } from './base.model';
import { Date } from 'mongoose';
@ObjectType()
export class Log extends Base {
  @Field(type => LogType)
  @prop({ ref: () => LogType, required: true })
  logType: Ref<LogType>;

  @Field(_type => Date)
  @prop({ type: Date })
  date?: Date;
}

export const LogModel = getModelForClass(Log, getSchemaOptions());
