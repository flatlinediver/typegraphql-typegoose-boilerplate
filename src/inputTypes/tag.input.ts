import { ObjectId } from 'mongoose';
import { Field, ID, InputType } from 'type-graphql';
import { Tag } from '../models/tag.model';

@InputType()
export class TagInput implements Partial<Tag> {
  @Field(() => ID)
  _id: ObjectId;
}