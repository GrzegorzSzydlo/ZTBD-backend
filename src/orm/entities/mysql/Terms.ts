import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { SportCamps } from "./SportCamps";

@Entity()
export class Terms {
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
