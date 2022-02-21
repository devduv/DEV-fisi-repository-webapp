import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreferencesComponent } from 'src/app/shared/preferences/preferences.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
})
export class MainPage implements OnInit {
  public showMenu: boolean = true;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.showPreferencesEmmitter();
  }

  showMenuEmmitter() {
    this.showMenu = !this.showMenu;
  }

  showPreferencesEmmitter() {
    const dialogRef = this.dialog.open(PreferencesComponent);
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
