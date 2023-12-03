import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../core/models/User";
import {EnvService} from "../../../core/services/EnvService";
import { Response } from 'src/app/core/models/Response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[]  = []

  constructor(private httpClient : HttpClient,private envService : EnvService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.httpClient.get<Response<User>>(this.envService.apiUrl + '/user').subscribe(data => {
        if(data.result != null){
          this.users = data.result;
        }
    });
  }

}
