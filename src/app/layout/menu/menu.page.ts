import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menuList: Menu[] = [];

  public menuSelected: boolean = false;

  @Input()
  public showMenu: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.addMenu(this.buildMenu('1', 'Inicio', 'home', '/app/home', true));
    this.addMenu(this.buildMenu('2', 'Buscar', 'search', '/app/search', false));
    this.addMenu(
      this.buildMenu(
        '3',
        'Subir archivos',
        'cloud_upload',
        '/app/uploader',
        false
      )
    );
    this.addMenu(
      this.buildMenu('4', 'Configuración', 'settings', '/app/settings', false)
    );
    this.addMenu(
      this.buildMenu('5', 'Cerrar Sesión', 'exit_to_app', '/', false)
    );
  }

  public buildMenu(
    id: string,
    name: string,
    icon: string,
    rout: string,
    selected: boolean
  ) {
    return {
      id,
      name,
      icon,
      rout,
      selected,
    };
  }

  public addMenu(menu: Menu) {
    this.menuList.push(menu);
  }

  public goTo(menu: Menu) {
    this.menuList.forEach((m) => (m.selected = false));
    menu.selected = true;

    this.router.navigate([menu.rout]);
  }
}
