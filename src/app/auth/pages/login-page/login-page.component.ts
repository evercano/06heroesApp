import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private authService : AuthService,
    private router : Router
  ){}

  onLogin():void{
    this.authService.login('everalexander126@gmail.com', 'adasda23sdas.dasdads312ad.ad3123123')
    .subscribe(user =>{
      this.router.navigate(['/']);
    });
  }
}
