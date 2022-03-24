import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Comment } from "./Comment";
import { News } from "./News";
import { SportCompetition } from "./SportCompetition";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  phone!: string;

  @Column()
  profile_photo!: string;

  @OneToMany(() => Comment, (comment) => comment.user)
  comment?: Comment[];

  @OneToMany(() => News, (news) => news.user)
  news?: News[];

  @OneToMany(
    () => SportCompetition,
    (sportCompetition) => sportCompetition.user
  )
  sport_competition?: SportCompetition[];
}
