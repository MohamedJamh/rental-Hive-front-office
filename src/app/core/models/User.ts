export class User{
    id: number | undefined;
    firstName: string;
    lastName: string;
    email: string;
    organizationName: string;
    createdAt: string;

    constructor(firstName: string, lastName: string, email: string, organizationName: string, createdAt: string, id?: number){
        if(id !== undefined){
            this.id = id;
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.organizationName = organizationName;
        this.createdAt = createdAt;
    }
}
