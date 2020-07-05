import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from '../Interfaces/ideactivate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, IDeactivateComponent {

  public register = { name: "Rahul", phone: "123456789" };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  canExit(): boolean {

    if (confirm("Do you wish to Please confirm")) {
      return true
    } else {
      return false
    }
  }

  gotoDynamic() {
    this.router.navigateByUrl('register-detail', { state: this.register });
  }

}
