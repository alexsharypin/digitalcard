import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Achievement {
  experienceId: number;

  @Field()
  description: string;
}
