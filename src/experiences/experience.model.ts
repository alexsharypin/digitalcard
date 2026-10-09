import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  id: number;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  description: string;

  @Field(() => Int)
  startYear: number;

  @Field(() => Int)
  startMonth: number;

  @Field(() => Int, { nullable: true })
  endYear?: number | null;

  @Field(() => Int, { nullable: true })
  endMonth?: number | null;
}
