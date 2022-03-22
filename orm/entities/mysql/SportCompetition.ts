import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity()
export class SportCompetition extends BaseEntity {
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
