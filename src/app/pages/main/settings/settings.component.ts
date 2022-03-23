import { Component, OnInit } from '@angular/core';
import { Menu, MenuOption } from '../../../core/models/menu.model';
import { MenuService } from '../../../core/services/menu.service';
import { SettingsService } from '../../../core/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  public listMenu:Menu[]=[];
  
  constructor( private _configurationService:SettingsService, private menuService:MenuService) {}

  ngOnInit(): void {

    this.menuService.goTo(MenuOption.SETTINGS);
    this.listMenu=this._configurationService.build();

  }

}
