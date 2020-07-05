import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string;
  username: string;
  password: string;
  retUrl: string = "home";

  constructor(private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.get('retUrl');
      });
  }

  onFormSubmit(loginForm) {
    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {      
      if (this.retUrl != null) {
        this.router.navigate([this.retUrl]);
      } else {
        this.router.navigate(['home']);
      }
    });
  }

}
