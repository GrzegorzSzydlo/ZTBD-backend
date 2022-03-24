import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class News {
  @ObjectIdColumn()
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

  @Column()
  userid!: string;
}
