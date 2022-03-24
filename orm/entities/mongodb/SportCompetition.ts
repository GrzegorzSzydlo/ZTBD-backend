import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class SportCompetition {
  @ObjectIdColumn()
  id!: number;

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
