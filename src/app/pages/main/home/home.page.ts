import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {


  constructor(private router: Router) {}

  ngOnInit() {}

}
