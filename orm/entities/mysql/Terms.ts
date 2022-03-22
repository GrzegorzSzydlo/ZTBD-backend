import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { SportCamps } from "./SportCamps";

@Entity()
export class Terms extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  start_date!: Date;

  @Column()
  end_date!: Date;

  @Column()
  free_slots!: number;

  @Column()
  price!: number;

  @OneToMany(() => SportCamps, (sportCamps) => sportCamps.id)
  sport_camps?: SportCamps[];
}
