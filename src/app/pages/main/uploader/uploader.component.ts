import { Component, OnInit } from '@angular/core';
import { MenuOption } from 'src/app/core/models/menu.model';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html'
})
export class UploaderComponent implements OnInit {

  constructor( private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.goTo(MenuOption.UPLOAD);
  }

}
