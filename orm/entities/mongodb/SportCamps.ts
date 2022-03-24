import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class SportCamps {
  @ObjectIdColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  localization!: string;

  @Column()
  recommended_age!: string;

  @Column()
  duration!: number;

  @Column()
  description!: string;

  @Column()
  camp_filename!: string;

  @Column()
  termsId?: string;
}
