import {Organization} from "./Organization";

export interface IUser{
    id?: number | undefined;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    organization: Organization;
    createdAt?: string;
}

export class User implements IUser{

    constructor(public firstName?: string,
                public lastName?: string,
                public email?: string,
                public password?: string,
                public organization: Organization = new Organization(),
                public createdAt?: string,
                public id?: number){}
}
