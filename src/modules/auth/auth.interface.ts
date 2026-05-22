export interface IUser {
  name: string;
  email: string;
  role?: IRoles;
  password: string;
}

export interface IRoles {
  role: "contributor" | "maintainer";
}
