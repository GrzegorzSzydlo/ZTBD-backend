import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Terms } from "./Terms";

@Entity()
export class SportCamps extends BaseEntity {
  @PrimaryGeneratedColumn()
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

  @ManyToOne(() => Terms, (terms) => terms.sport_camps)
  terms?: Terms;
}
