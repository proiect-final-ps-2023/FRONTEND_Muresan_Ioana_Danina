import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-comp',
  templateUrl: './sign-in-comp.component.html',
  styleUrls: ['./sign-in-comp.component.css']
})
export class SignInCompComponent implements OnInit{
  userNew: User = new User();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  createUser() {
    this.userService.createUser(this.userNew).subscribe(data=>{
      alert("User created successfully");
    },error => {
      alert("User failed");
    })
    this.userService.sendEmail("ioanamuresan160@yahoo.com").subscribe(data=>{
    },error => {
    })
  }

}
