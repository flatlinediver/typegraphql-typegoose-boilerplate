import { ObjectId } from 'mongoose';
import { Field, ID, InputType } from 'type-graphql';
import { LogType } from '../models/logType.model';

@InputType()
export class LogTypeInput implements Partial<LogType> {
  @Field(() => ID)
  _id: ObjectId;
}