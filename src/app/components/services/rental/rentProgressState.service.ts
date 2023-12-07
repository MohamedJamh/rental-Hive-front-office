import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RentProgressStateService {
  public static dateStart: Date = new Date();
  public static dateEnd: Date = new Date();
  public static equipments: any[] = [];
}
