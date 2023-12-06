import {Injectable} from "@angular/core";
import {catchError, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Response} from "../models/Response";
import {User} from "../models/User";
import {EnvService} from "./EnvService";


@Injectable({
  providedIn : "root"
})
export class UserService{

  constructor(private httpClient : HttpClient,private envService : EnvService,) {
  }

  getAllUsers() : Observable<HttpResponse<Response<User[]>>> {
    return this.httpClient.get<Response<User[]>>(this.envService.apiUrl + "/user", {observe : 'response'})
        .pipe(
            catchError((httpResponse) => {
              let errorMessage : string = httpResponse.error.message + "\n";
              for (let err of httpResponse.error.errors) {
                errorMessage += err.message + "\n";
              }
              alert(errorMessage)
              return new Observable<HttpResponse<Response<User[]>>>();
            })
        )
  }

    addUser(newUser : User): Observable<HttpResponse<Response<User>>> {
      return this.httpClient.post<Response<User>>(this.envService.apiUrl + "/user", newUser, {observe : 'response'})
          .pipe(
              catchError((httpResponse) => {
                let errorMessage : string = httpResponse.error.message + "\n";
                for (let err of httpResponse.error.errors) {
                  errorMessage += err.message + "\n";
                }
                alert(errorMessage)
                return new Observable<HttpResponse<Response<User>>>();
              })
          )
    }
}
