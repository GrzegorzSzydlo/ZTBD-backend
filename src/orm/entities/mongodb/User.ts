import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  phone!: string;

  @Column()
  profile_photo!: string;
}
