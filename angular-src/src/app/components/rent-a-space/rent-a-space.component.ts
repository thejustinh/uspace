import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-a-space',
  templateUrl: './rent-a-space.component.html',
  styleUrls: ['./rent-a-space.component.css']
})
export class RentASpaceComponent implements OnInit {
  user: Object;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // if it is an observable, YOU MUST SUBSCRIBE
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    })
  }

}
