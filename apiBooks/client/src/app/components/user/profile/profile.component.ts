import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService) { }
  user: UserInterface;

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    console.log(this.user);
  }
}
