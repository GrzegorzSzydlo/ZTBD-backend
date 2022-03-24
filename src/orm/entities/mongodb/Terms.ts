import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Terms {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  start_date!: Date;

  @Column()
  end_date!: Date;

  @Column()
  free_slots!: number;

  @Column()
  price!: number;
}
