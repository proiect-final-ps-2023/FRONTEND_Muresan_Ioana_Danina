import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  user: User = new User();
  userNew: User = new User();
  public users: User[]= [];
  loggedIn: boolean = false;

  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((res)=>{
        console.log(res);
      },
      (_error)=>{
        console.log("error");
      });
  }

  loginUser() {
    this.userService.loginUser(this.user).subscribe(data=>{
      this.router.navigate(['/all']);
      this.userService.userLoggedInfo = JSON.stringify(data);
      const regex = /"id"\s*:\s*(\d+)/
      const match = this.userService.userLoggedInfo.match(regex);
      if (match) {
        this.userService.userLoggedId= match[1];
      } else {
        console.log("id not found");
      }
      this.removeMap(this.userService.userLoggedId);
    },error => {
      alert("Login failed");
    })
  }

  loginAdmin() {
    this.userService.loginAdmin(this.user).subscribe(data=>{
      this.router.navigate(['/admin']);
    },error => {
      alert("Login failed");
    })
  }

  goToCreateUser()
  {
    this.router.navigate(['/sign']);
  }

  removeMap(idUser: number | undefined): void {
    this.userService.removeMap(idUser).subscribe(
      data => {
      },
      error => console.log(error)
    );
  }

}
