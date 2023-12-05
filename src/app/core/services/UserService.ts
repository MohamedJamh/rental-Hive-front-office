import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Response} from "../models/Response";
import {User} from "../models/User";
import {EnvService} from "./EnvService";

@Injectable({
  providedIn : "root"
})
export class UserService{

  constructor(private httpClient : HttpClient,private envService : EnvService) {
  }

  getAllUsers() : Observable<HttpResponse<Response<User>>> {
    return this.httpClient.get<Response<User>>(this.envService.apiUrl + "/user", {observe : 'response'})
  }

}
