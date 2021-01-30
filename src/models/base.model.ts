import { prop } from '@typegoose/typegoose';
import { Field, ID, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongoose';

@ObjectType()
export class Base {
  @Field(_type => ID)
  readonly _id: ObjectId;

  @Field(_type => String)
  @prop({ type: String })
  createdAt: string;

  @Field(_type => String)
  @prop({ type: String })
  updatedAt: string;

}
