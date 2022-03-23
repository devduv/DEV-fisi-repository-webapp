import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  public perfilList: Menu[] = [];

  constructor() { }

  public buildPerfil(
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


  build() {
    this.perfilList = [];
    this.addPerfil(this.buildPerfil('1', 'Mi Perfil', 'login', '/app/settings/perfil', false));
    this.addPerfil(this.buildPerfil('2', 'Editar Perfil', 'edit', '/app/settings/edit-perfil', false));
    return this.perfilList;
  }

  getMenu() {
    return this.perfilList;
  }


  public addPerfil(menu: Menu) {
    this.perfilList.push(menu);
  }




}
