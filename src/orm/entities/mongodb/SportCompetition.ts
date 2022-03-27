import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class SportCompetition {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  data_time!: Date;

  @Column()
  localization!: string;

  @Column()
  discipline!: string;

  @Column()
  title!: string;

  @Column()
  duration!: number;

  @Column()
  userId!: string;
}
