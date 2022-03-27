import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class News {
  @ObjectIdColumn()
  id!: ObjectID;
  @Column()
  description!: string;

  @Column()
  title!: string;

  @Column()
  image!: string;

  @Column()
  date!: Date;

  @Column()
  camp_filename!: string;

  @Column()
  userId!: string;
}
