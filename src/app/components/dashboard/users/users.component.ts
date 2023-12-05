import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../../../core/models/User";
import {EnvService} from "../../../core/services/EnvService";
import { Response } from 'src/app/core/models/Response';
import {UserService} from "../../../core/services/UserService";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[] = []

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe((response : HttpResponse<Response<User>>) => {
        if(response.status == 200 && response.body?.result)
          this.users = response.body?.result
      })
  }



}
