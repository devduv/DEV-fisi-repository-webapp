import { Injectable } from '@angular/core';
import { Menu, MenuOption } from '../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menuList: Menu[] = [];

  constructor() {}

  build() {
    this.menuList = [];
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

    return this.menuList;
  }

  getMenu() {
    return this.menuList;
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

  public goTo(option: string) {
    let next = this.getMenu().find((m) => m.rout == option);

    this.menuList.forEach((m) => (m.selected = false));

    if (next) {
      next.selected = true;
    }
  }
}
