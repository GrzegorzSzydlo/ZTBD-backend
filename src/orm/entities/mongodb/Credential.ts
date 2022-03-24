import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class Credential {
  @ObjectIdColumn()
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

  @Column()
  userid!: string;
}
