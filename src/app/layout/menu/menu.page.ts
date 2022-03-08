import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MenuOption } from 'src/app/core/models/menu.model';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menuList: Menu[] = [];

  public menuSelected: boolean;

  public MenuOption = MenuOption;

  @Input()
  public showMenu: boolean = true;

  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit() {
    this.menuList = this.menuService.build();
  }

  public goTo(option: string) {
    this.menuService.goTo(option);

    this.router.navigate([option]);
  }
}
