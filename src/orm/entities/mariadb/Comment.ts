import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  content!: string;

  @Column()
  username!: string;

  @ManyToOne(() => User, (user) => user.id)
  user?: User;
}
