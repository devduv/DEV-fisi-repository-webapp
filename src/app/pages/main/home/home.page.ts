import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOption } from 'src/app/core/models/menu.model';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.goTo(MenuOption.HOME);
  }

  searchEmitter($event: string) {
    this.menuService.goTo(MenuOption.SEARCH);
    this.router.navigate([MenuOption.SEARCH], { queryParams: { q: $event } });
  }
}
