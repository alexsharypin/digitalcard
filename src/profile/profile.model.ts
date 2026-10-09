import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  github: string;

  @Field()
  linkedin: string;
}
