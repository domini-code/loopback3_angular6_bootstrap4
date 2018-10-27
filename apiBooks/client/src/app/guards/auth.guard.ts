import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate() {
    if (this.authService.getCurrentUser()) {
      // login TRUE
      return true;
    } else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
