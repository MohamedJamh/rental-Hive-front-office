import {EnvService} from "./EnvService";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable} from "rxjs";
import {Response} from "../models/Response";
import {Offer} from "../models/IOffer";
import {Order} from "../models/IOrder";
@Injectable({
    providedIn: 'root'
})
export class OfferService{

    constructor(private httpClient : HttpClient,private envService : EnvService) { }

    creatOffer(offer : Offer):Observable<HttpResponse<Response<Offer>>> {
        return this.httpClient.post<Response<Offer>>(this.envService.apiUrl + "/offer",offer, {observe : 'response'})
            .pipe(
                catchError((httpResponse) => {
                    let errorMessage : string = httpResponse.error.message + "\n";
                    for (let err of httpResponse.error.errors) {
                        errorMessage += err.message + "\n";
                    }
                    alert(errorMessage)
                    return new Observable<HttpResponse<Response<Offer>>>();
                })
            )
    }
}
