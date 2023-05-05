import {Timestamp} from "rxjs";

export class User{
  id: number | undefined;
  name: string | undefined;
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  isAdmin: string | undefined;
  loginDate: Timestamp<Number> | undefined;
}
