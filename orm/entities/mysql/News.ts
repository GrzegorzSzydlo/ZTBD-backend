import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity()
export class News extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
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

  @ManyToOne(() => User, (user) => user.id)
  user?: User;
}
