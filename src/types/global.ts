export type TUser = {
    id: string;
    name: string;
    age: number | null;
    email: string;
    contact: number | null;
    country: string;
};

export interface TUsers {
    users: TUser[];
}
