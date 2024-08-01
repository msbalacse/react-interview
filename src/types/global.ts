export type TUser = {
    id: string;
    name: string,
    age: number ,
    email: string,
    contact: number,
    country: string
}

export interface TUsers {
    users: TUser[];
}