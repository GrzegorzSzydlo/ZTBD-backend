import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class SportCompetition {
  @PrimaryGeneratedColumn()
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

  @ManyToOne(() => User, (user) => user.id)
  user?: User;
}
