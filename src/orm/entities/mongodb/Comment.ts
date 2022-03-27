import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class Comment {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  content!: string;

  @Column()
  username!: string;

  @Column()
  userId!: string;
}
