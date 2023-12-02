export class User{
    id: number | undefined;
    name: string;
    email: string;
    organizationName: string;
    createdAt: string;
    constructor(name: string, email: string, organizationName: string, createdAt: string, id?: number){
        if(id !== undefined){
            this.id = id;
        }
        this.name = name;
        this.email = email;
        this.organizationName = organizationName;
        this.createdAt = createdAt;
    }
}
