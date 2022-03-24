import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class Comment {
  @ObjectIdColumn()
  id!: number;
  @Column()
  content!: string;

  @Column()
  username!: string;

  @Column()
  userId!: string;
}
