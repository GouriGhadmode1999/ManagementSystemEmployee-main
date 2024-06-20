import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  onLogin(): void {
    // Validate credentials
    if (this.email === 'admin@gmail.com' && this.password === 'admin@123') {
      // Redirect to admin dashboard
      this.router.navigate(['/add-employee']);
    } else {
      // Display error message
      this.loginError = true;
    }
  }
}
