export class Response <T> {
    message : string = "";
    result : T[] = [];
    errors : any = null;

    //no args constructor
    constructor(message : string, result : T[], errors : any){
        this.message = message;
        this.result = result;
        this.errors = errors;
    }
}
