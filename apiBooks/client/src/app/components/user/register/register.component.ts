import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  private user: UserInterface = {
    name: '',
    email: '',
    password: ''
  };
  public isError = false;
  public msgError = '';
  ngOnInit() { }

  onRegister(form: NgForm): void {
    if (form.valid) {
      this.authService
        .registerUser(this.user.name, this.user.email, this.user.password)
        .subscribe(user => {
          this.authService.setUser(user);
          const token = user.id;
          this.authService.setToken(token);
          this.router.navigate(['/user/profile']);
          location.reload();
        },
        res => {
          this.msgError = res.error.error.details.messages.email;
          this.onIsError();
        });
    } else {
      this.onIsError();
    }

  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}
