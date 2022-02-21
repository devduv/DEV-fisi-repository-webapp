import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
})
export class WelcomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  access(rout: string) {
    this.router.navigateByUrl(rout);
  }
}
