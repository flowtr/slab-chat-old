import { Entity, PrimaryColumn, Column } from "typeorm";
import { createId } from "../util/id";

// TODO: shared code
// export interface IUser {
//   id: string;
//   username: string;
//   password: string;
//   updatedAt: Date;
//   createdAt: Date;
// }

@Entity("user")
export class User {
  @PrimaryColumn()
  id: string = createId();

  @Column({
    nullable: false,
    type: "text"
  })
  username: string = "";

  @Column({
    nullable: false,
    type: "text"
  })
  password: string = "";

  @Column({
    nullable: false,
    type: "datetime"
  })
  updatedAt: Date = new Date();
}
