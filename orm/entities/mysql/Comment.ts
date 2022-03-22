import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  content!: string;

  @Column()
  username!: string;

  @ManyToOne(() => User, (user) => user.id)
  user?: User;
}
