import { Entity, Column, OneToMany, ObjectIdColumn } from "typeorm";
import { Comment } from "./Comment";
import { News } from "./News";
import { SportCompetition } from "./SportCompetition";

@Entity()
export class User {
  @ObjectIdColumn()
  id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  phone!: string;

  @Column()
  profile_photo!: string;
}
