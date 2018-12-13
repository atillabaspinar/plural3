import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') form;
  username;
  password;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
    console.log(formValues);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
