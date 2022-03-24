import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Credential {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  roles!: string;

  @Column()
  password!: string;

  @Column()
  facebook_id?: string;

  @Column()
  google_id?: string;

  @Column()
  active!: string;

  @Column()
  admin!: string;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;
}
